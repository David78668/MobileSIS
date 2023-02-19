import React, { useState, useCallback } from "react";
import { StyleSheet, ScrollView, ScrollViewProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, RefreshControl } from "react-native";
import { ThemeContext } from "../../App";
import GetColors from "../../declarations/colors";

interface BodyProps {
	children?: React.ReactNode,
	ScrollView?: ScrollViewProps,
	Touchable?: TouchableWithoutFeedbackProps,
	onRefresh?: Function
}

export default function Body(props: BodyProps) {
	const [refreshing, setRefreshing] = useState(false);
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if (context) {
		Colors = GetColors(context?.value);
	}
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

