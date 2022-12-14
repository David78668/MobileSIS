import React from "react";
import { StyleSheet, ViewStyle, Dimensions, ScrollView} from "react-native";
import {navbarHeight} from '../CustomNavbar';

interface BodyProps {
	children?: React.ReactNode,
	style?: ViewStyle | Array<ViewStyle>,
}

export default function Body(props: BodyProps){
	return(
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			style={StyleSheet.compose({ flexGrow: 1, overflow: 'scroll' }, props.style)}>
			
			{props.children}
		</ScrollView>
	);
}