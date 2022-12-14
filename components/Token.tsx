import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

export async function getValueFor(key: string) {
	var result = await SecureStore.getItemAsync(key);

	if (result) {
		alert("🔐 Here's your value 🔐 \n" + result);
	} else {
		alert('No values stored under that key.');
	}
}

export async function bareer() {
	var bareer = await SecureStore.getItemAsync("kybernaAccessToken");

	if (bareer) {
		return bareer;
	}
}

export const userid = async () => {
	var jwt = await SecureStore.getItemAsync("kybernaAccessToken");
	
	if (jwt) {
		return (JSON.parse(jwt_decode(jwt)).userId);
	}
}

export const jwtexpiration = async () => {
	var jwt = await SecureStore.getItemAsync("kybernaAccessToken");

	if (jwt) {
		return (JSON.parse(jwt_decode(jwt)).exp);
	} else {
		return null;
	}
}