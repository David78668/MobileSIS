import React from 'react';
import { Text, View, } from 'react-native';
import { jwtexpiration } from "../components/Token";

export default function Absence({ navigation }:any) {
	var dateexp = new Date(Number(jwtexpiration) * 1000);
	if (dateexp !== null) {
		if (dateexp) {

		}
	}
	else {
		navigation.Navigate("Login");
	}
	return (
		<View>
			<Text>Kyberna</Text>
		</View>
	);
}