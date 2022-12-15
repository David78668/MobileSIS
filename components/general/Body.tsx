import React from "react";
import { StyleSheet, ScrollView, ScrollViewProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";
interface BodyProps {
	children?: React.ReactNode,
	ScrollView?: ScrollViewProps,
	Touchable?: TouchableWithoutFeedbackProps
	
}

export default function Body(props: BodyProps) {
	return (
	<TouchableWithoutFeedback
		{...props.Touchable}
	>
		<ScrollView
			overScrollMode="never"
			showsVerticalScrollIndicator={false}
			scrollEventThrottle = {1}
			style={styles.container}
			{...props.ScrollView}
		>
			{props.children}
		</ScrollView>
	</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'scroll'
	}
});