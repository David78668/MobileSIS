import React from "react";
import { Colors } from '../../declarations/colors';
import { View, StyleSheet, Dimensions } from "react-native";

interface ContainerProps {
	children?: React.ReactNode
}

export default function Container(props:ContainerProps){
	return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.SecondaryBackgroundColor,
	}
});