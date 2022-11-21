import React from "react";
import { View, Text, StyleSheet, ViewStyle, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeadingProps {
	headerText: string,
	headerComponent?: React.ReactNode,
	children?: React.ReactNode,
	style?: ViewStyle,
}

export default function Heading(props: HeadingProps) {
	return (
		<SafeAreaView style={styles.background}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{props.headerText}</Text>
				{props.headerComponent}
			</View>

			<View style={props.style}>
				{props.children}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#E9671E',
		paddingHorizontal: 22,
		paddingTop: 40,
		paddingBottom: Platform.OS == 'android' ? 20 : 0
	},
	headerText: {
		fontSize: 30,
		color: 'white',
		fontWeight: '900'
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'nowrap',
		width: '100%',
	}
})