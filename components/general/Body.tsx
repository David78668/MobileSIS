import React from "react";
import { StyleSheet, ScrollView } from "react-native";
interface BodyProps {
	children?: React.ReactNode
	onScroll?: Function
}

export default function Body(props: BodyProps) {
	return (
		<ScrollView
			overScrollMode="never"
			showsVerticalScrollIndicator={false}
			scrollEventThrottle = {250}
			onScroll={() => {
				if (props.onScroll != undefined)
					props.onScroll()
			}}
			style={styles.container}>
			{props.children}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'scroll'
	}
});