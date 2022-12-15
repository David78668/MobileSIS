import React from "react";
import { View, Text, StyleSheet, ViewStyle, Platform, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";
import { Colors } from '../../declarations/colors';
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
	title: string,
	subtitle?: string,
	headerComponent?: React.ReactNode,
	Pressable?: TouchableWithoutFeedbackProps,
	children?: React.ReactNode
}

export default function Heading(props: HeaderProps) {
	return (
		<SafeAreaView style={styles.background}>
			<TouchableWithoutFeedback
				{...props.Pressable}
			>
				<View style={styles.headerContainer}>
					<View>

						<Text style={styles.headerText}>{props.title}</Text>

						{props.subtitle ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null}
					</View>

					{props.headerComponent}
				</View>
			</TouchableWithoutFeedback>
			{props.children ? <View style={{ marginTop: 20 }}>{props.children}</View> : null}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: Colors.TertiaryBackgroundColor,
		paddingTop: 20,
		paddingBottom: Platform.OS == 'android' ? 10 : 0
	},
	headerText: {
		fontSize: 30,
		color: Colors.PrimaryTextColor,
		fontWeight: '900'
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	subtitle: {
		color: Colors.PrimaryTextColor,
		fontWeight: '500',
		fontSize: 18,
		opacity: 0.6
	}
});