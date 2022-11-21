import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import Heading from '../components/general/Heading';
import { LinearGradient } from 'expo-linear-gradient';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { bareer } from "../components/Token"
//import { SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();

const useProxy = false;

const redirectUri = AuthSession.makeRedirectUri({
    useProxy,
});

export default function App({ navigation }: any) {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
    
    const discovery = {
        authorizationEndpoint: "https://auth.kyberna.cz/connect/authorize",
        tokenEndpoint: "https://auth.kyberna.cz/connect/token",
    };

    const [request, result, promptAsync] = AuthSession.useAuthRequest( {
            clientId: 'mvc',
            clientSecret: 'secret',
            redirectUri: AuthSession.makeRedirectUri(({useProxy: true})),
            responseType: AuthSession.ResponseType.Code,
            usePKCE: true,
            scopes: ['openid', 'profile', 'roles', 'api.sis.kyberna.cz', 'offline_access'],
    }, discovery);
    
    React.useEffect(() => {
        async function getToken() {
            if (result && result.type === 'success') {

                var accessToken = new AuthSession.AccessTokenRequest({
                    clientId: 'mvc',
                    clientSecret: 'secret',
                    code: result.params.code,
                    redirectUri: AuthSession.makeRedirectUri(({useProxy: true})),
                    scopes: ['openid', 'profile', 'roles', 'api.sis.kyberna.cz'],
                    extraParams: { 'code_verifier': request?.codeVerifier ?? "" },

                });
                var tokenResult = await AuthSession.exchangeCodeAsync(accessToken, { tokenEndpoint: discovery.tokenEndpoint })

                //const token = result.params.access_token;
                SecureStore.setItemAsync("kybernaAccessToken", tokenResult.accessToken)
                navigation.navigate('Home')
            }
        }

        getToken();
    }, [result])
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.content}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.header}>
                        <Image source={require('../assets/logo_white.png')} style={{height: 25, width: 30}} />
                        <Text style={styles.heading}>Kyberna</Text>
                    </View>

                    <Image source={require('../assets/illustration.png')} style={styles.illustration} />

                    <Text style={styles.subheading}>Vítejte v aplikaci školy Kyberna</Text>
                    <Text style={styles.paragraph}>Tato aplikace zahrnuje Váš týdenní rozvrh, průběžné známky, absenci nebo jiné ruzné statistiky. Pokračujte s přihlášením níže.</Text>
                </View>

                <View>
                    <View style={{ alignItems: 'center', paddingTop: 30 }}>{LoginButton()}</View>
                </View>
            </View>
        </SafeAreaView>
    );

    function LoginButton() {
        return (
            <TouchableOpacity style={styles.loginButton} onPress={() => { promptAsync({ useProxy }) }}>
                <Image source={require('../assets/logo.png')} style={{ height: 17, width: 20.5}} />
                <Text style={{ fontWeight: '600', marginLeft: 10 }}>Přihlásit se přes Kybernu</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E9671E',
        flex: 1
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: 40
    },
    heading: {
        fontSize: 25,
        marginLeft: 10,
		color: 'white',
        fontWeight: '900'
    },
    subheading: {
        color: 'white',
        marginTop: 80,
        paddingHorizontal: 40,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center'
    },
    paragraph: {
        color: 'white',
        marginTop: 10,
        paddingHorizontal: 40,
        opacity: 0.8,
        textAlign: 'center'
    },
    loginButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    illustration: {
        width: Dimensions.get('window').width,
        height: 300,
        marginTop: 50
    }
});