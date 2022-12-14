import React from "react";
import { StyleSheet, ScrollView } from "react-native";
interface BodyProps {
	children?: React.ReactNode
}

export default function Body(props: BodyProps){
	return <ScrollView style={styles.container}>{props.children}</ScrollView>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'scroll'
	}
});