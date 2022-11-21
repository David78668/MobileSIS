import React from 'react';
import { Text, View, } from 'react-native';
import { jwtexpiration } from "../components/Token";

export default function DefaultPage({ navigation }:any) {
        navigation.setOptions({tabBarStyle: { display: 'none' }});

        var dateexp = new Date(Number(jwtexpiration) * 1000);
        if (dateexp !== null) {
            if (dateexp) {
                navigation.navigate("Login");
            }
        }
        else {
            navigation.navigate("Home");
        }
        return (
            <View>
                <Text>Kyberna Loading</Text>
            </View>
    );
}