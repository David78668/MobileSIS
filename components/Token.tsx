import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

export const bareer = () => {
	return (SecureStore.getItemAsync("kybernaAccessToken"));
};

export const userid = async () => {
	var jwt = await SecureStore.getItemAsync("kybernaAccessToken");
	if (jwt) {
		return (JSON.parse(jwt_decode(jwt)).userId);
	}
};

export const jwtexpiration = async () => {
	var jwt = await SecureStore.getItemAsync("kybernaAccessToken");
	if (jwt) {
		return (JSON.parse(jwt_decode(jwt)).exp);
	}
	else {
		return null;
	}
};