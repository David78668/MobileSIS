import React, { useState, useCallback } from "react";
import { StyleSheet, ScrollView, ScrollViewProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, RefreshControl } from "react-native";
import GetColors from "../../declarations/colors";
import { useTheme } from "../../context/ThemeProvider";

interface BodyProps {
	children?: React.ReactNode,
	ScrollView?: ScrollViewProps,
	Touchable?: TouchableWithoutFeedbackProps,
	onRefresh?: Function
}

export default function Body(props: BodyProps) {
	const [refreshing, setRefreshing] = useState(false);
	
	// color mode
	const mode = useTheme();
	const Colors = GetColors(mode.value);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		if (props.onRefresh != undefined) props.onRefresh();

		return new Promise(resolve => setTimeout(resolve, 1000)).then(() => setRefreshing(false));
	}, []);

	const refresh: any = {};
	if (props.onRefresh != undefined) refresh.refreshControl = refreshControl();

	function refreshControl() {
		return (
			<RefreshControl
				tintColor={Colors.SecondaryTextColor}
				refreshing={refreshing}
				onRefresh={onRefresh} />
		);
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1
		}
	});

	return (
		<TouchableWithoutFeedback {...props.Touchable}>
			<ScrollView
				overScrollMode="never"
				showsVerticalScrollIndicator={false}
				nestedScrollEnabled
				scrollEventThrottle={1}
				style={styles.container}
				{...refresh}
				{...props.ScrollView}>

				{props.children}
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}