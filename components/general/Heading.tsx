import React from "react";
import { View, Text, StyleSheet, ImageBackground, ViewStyle } from "react-native";

interface HeadingProps {
	headerText: string,
	headerComponent?: React.ReactNode,
	children?: React.ReactNode,
	style?: ViewStyle,
}

export default function Heading(props: HeadingProps) {
	return (
		<ImageBackground source={require('../../assets/carousel.png')} resizeMode="cover" style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{props.headerText}</Text>
				{props.headerComponent}
			</View>
			<View style={props.style}>
				{props.children}
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		minWidth: '100%',
		alignItems: 'center',
		paddingTop: 35,
	},
	headerText: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
		marginLeft: 22,
	},
	headerContainer: {
		paddingBottom: '4%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'nowrap',
		width: '100%',
	},
	
})