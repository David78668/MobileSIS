import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

interface FancyBoxProps {
	children?: React.ReactNode,
	style: ViewStyle | Array<ViewStyle>,
}

export default function FancyBox(props: FancyBoxProps){
	return(
		
			<View style={
			StyleSheet.compose({
				shadowColor: "#000",
				shadowOffset: {
				width: 0,
				height: 5,
				},
				shadowOpacity: 0.34,
				shadowRadius: 6.27,
				elevation: 10,
				backgroundColor:"white",
				
    		}, props.style)}>
				{props.children}
			</View>
		
	)
}