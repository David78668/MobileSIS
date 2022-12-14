import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

interface ContainerProps {
	children?: React.ReactNode
}

export default function Container(props:ContainerProps){
	return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get('screen').height,
		backgroundColor: "#f4f4f4" 
	}
});