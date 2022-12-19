import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import moment from "moment";

export interface DayBlockProps {
	item: any,
	index: number,
	page: number,
	onPress: (index: number) => void,
}

export default function DayBlock(props: DayBlockProps) {
	return (
		<TouchableOpacity onPress={() => props.onPress(props.index)} style={styles.column} activeOpacity={0.7}>
			<Text style={[styles.lessonText, styles.dayText, (props.page != props.index) && styles.inactive]}>{(moment(props.item.date).format("Do ddd"))}</Text>
			
			<View style={{ ...styles.shape, opacity: (props.page == props.index) ? 0.8 : 0.5, height: props.item.timetable.length * 8 }}></View>
			
			<Text style={[styles.lessonText, styles.rangeText, (props.page != props.index) && styles.inactive]}>{moment(props.item.timetable[0].date).format("H:mm")}</Text>
			<Text style={[styles.lessonText, (props.page != props.index) && styles.inactive]}>{moment(props.item.timetable[props.item.timetable.length - 1].date).add(45, "minutes").format("H:mm")}</Text>
		</TouchableOpacity>
	)
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	column: {
		marginRight: 15
	},
	shape: {
		width: ((width - 40) - 4 * 15) / 5,
		backgroundColor: "white",
		borderRadius: 10
	},
	lessonText: {
		textAlign: 'center',
		color: "white",
		opacity: 0.8,
		fontWeight: 'bold'
	},
	dayText: {
		marginBottom: 5
	},
	rangeText: {
		marginTop: 5
	},
	inactive: {
		opacity: 0.6,
		fontWeight: '500'
	}
});