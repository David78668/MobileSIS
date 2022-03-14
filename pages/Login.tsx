import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { bareer } from "../components/Token"

WebBrowser.maybeCompleteAuthSession();

const useProxy = false;

const redirectUri = AuthSession.makeRedirectUri({
	useProxy,
});



export default function App({ navigation }) {
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
	React.useEffect(() => {
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
	console.log(redirectUri);
	return (
		<LinearGradient style={styles.background} colors={['#E9671E', '#FFA573']} start={{ x: 1, y: 0.5 }} end={{ x: 1, y: 1 }}   >
			<View style={{ alignItems: "center" }}>
				{/*<Image style={{height:42,width:156,margin:20,marginTop:20}} source={require("./kyberna1.png")}/>*/}
				<Text>{bareer}</Text>
				{/*<Image style={{height:339,width:455}} source={require("./kyberna2.png")}/>*/}
			</View>
			<View style={{ alignItems: 'center', paddingTop: 30, marginBottom: "10%" }}>{LoginButton()}</View>
		</LinearGradient>
	);

	function LoginButton() {
		return (
			<TouchableOpacity
				style={{ padding: 10, flexDirection: "row", backgroundColor: 'white', height: 60, width: '90%', borderRadius: 10, alignItems: "center" }}
				onPress={() => { promptAsync({ useProxy }) }}>
				{/* <Image style={{height:40,width:48}} source={require("./logo.jpg")}/> */}
				<Text style={{ fontWeight: '600', margin: 10 }}>Přihlaš se přes Kybernu</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create(
	{
		background: {
			justifyContent: 'center',
			alignItems: 'center',
			flex: 1,
		},
		ListText: {
			alignItems: 'flex-start',
			color: 'white',
			fontWeight: '600'
		},
	}
)