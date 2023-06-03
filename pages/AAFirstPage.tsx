import React from 'react';
import { Text, View, } from 'react-native';
import { jwtexpiration } from "../components/Token";
import { KEYS } from '../declarations/keys';
import * as SecureStore from 'expo-secure-store';

export default function DefaultPage({ navigation }: any) {
    navigation.setOptions({ tabBarStyle: { display: 'none' }});
    console.log("firstPage woohoo");
    var dateexp = new Date(Number(jwtexpiration) * 1000);
    console.log(dateexp);
    if (dateexp.getDate()) {
        if (dateexp) {
            navigation.navigate("Home");
        }
    } else {
        console.log("No token?");
        navigation.navigate("Login");
    }
    
    return (
        <View>
            <Text>Kyberna Loading</Text>
        </View>
    );
}