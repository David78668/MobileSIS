import React from "react";
import { View, Text, StyleSheet, ViewStyle, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
	title: string,
	subtitle?: string,
	headerComponent?: React.ReactNode,
	children?: React.ReactNode
}

export default function Heading(props: HeaderProps) {
	return (
		<SafeAreaView style={styles.background}>
			<View style={styles.headerContainer}>
				<View>
					<Text style={styles.headerText}>{props.title}</Text>
					{props.subtitle ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null}
				</View>

				{props.headerComponent}
			</View>

			{props.children ? <View style={{ marginTop: 20 }}>{props.children}</View> : null}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#E9671E',
		paddingTop: 20,
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
		alignItems: 'center',
		paddingHorizontal: 20
	},
	subtitle: {
		color: 'white',
		fontWeight: '500',
		opacity: 0.6
	}
});