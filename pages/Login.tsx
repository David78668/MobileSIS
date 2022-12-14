import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Animated } from "react-native";
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import {useState, useEffect} from 'react';
import { bareer } from "../components/Token"
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

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

    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: 'mvc',
            clientSecret: 'secret',
            redirectUri,
            responseType: AuthSession.ResponseType.Code,
            usePKCE: true,
            scopes: ['openid', 'profile', 'roles', 'api.sis.kyberna.cz', 'offline_access'],
        },
        discovery
    );

    useEffect(() => {
        async function getToken() {
            if (result && result.type === 'success') {

                var accessToken = new AuthSession.AccessTokenRequest({
                    clientId: 'mvc',
                    clientSecret: 'secret',
                    code: result.params.code,
                    redirectUri,
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
    }
, [result])
    
    var animated: any[] = [];
    for (var i = 0; i < 3; i++) {
        const [fade] = useState(new Animated.Value(0));
        animated.push(fade);
    }

    useEffect(() => {
        for (var i = 0; i < 3; i++) {
            Animated.timing(animated[i], {
                toValue: 1, duration: 1000, delay: 500 * i, useNativeDriver: true
            }).start();
        }
    }, []);

    return (
        <SafeAreaView style={styles.background}>    
            <ScrollView>
                <View style={styles.content}>
                    
                    {/* Headings and illustration */}
                    <View style={{alignItems: 'center'}}>
                        <Animated.View style={{ ...styles.header, opacity: animated[0] }}>
                            <Image source={require('../assets/logo_white.png')} style={{height: 25, width: 30}} />
                            <Text style={styles.heading}>Kyberna</Text>
                        </Animated.View>

                        <Animated.Image source={require('../assets/illustration.png')} style={{ ...styles.illustration, opacity: animated[0] }} />

                        <Animated.View style={{ opacity: animated[1], paddingHorizontal: 40, alignItems: 'center' }}>
                            <Text style={styles.subheading}>Vítejte v aplikaci školy Kyberna</Text>
                            <Text style={styles.paragraph}>Tato aplikace zahrnuje Váš týdenní rozvrh, průběžné známky, absenci nebo statistiky.</Text>
                            
                            <View style={styles.loginBelow}>
                                <Text style={styles.paragraph}>Pokračujte s přihlášením níže</Text>
                                <Feather name='chevron-right' size={16} color={'white'} style={{ opacity: 0.8, marginLeft: 3 }} />
                            </View>
                        </Animated.View>    
                    </View>

                    {/* Log in button */}
                    <Animated.View style={{ opacity: animated[2] }}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => { promptAsync({ useProxy }) }} activeOpacity={0.7}>
                            <Image source={require('../assets/logo.png')} style={{ height: 17, width: 20.5}} />
                            <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Přihlásit se přes Kybernu</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
        marginBottom: 10,
        fontWeight: '800',
        fontSize: 20,
        textAlign: 'center'
    },
    paragraph: {
        color: 'white',
        opacity: 0.8,
        textAlign: 'center'
    },
    loginButton: {
        marginTop: 50,
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
    },
    loginBelow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        opacity: 0.6
    }
});