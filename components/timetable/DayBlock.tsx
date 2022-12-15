import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import moment from "moment";

export interface DayBlockProps {
	item: any,
	index: number,
	page: number,
	onPress: (index:number) => void,
}
export default function DayBlock(props: DayBlockProps) {
	return (
		<TouchableOpacity onPress={() => { props.onPress(props.index) }} style={styles.column}>
			<Text style={styles.lessonsText}>{(moment(props.item.date).format("ddd Do"))}</Text>
			{props.page == props.index ? <View style={{ height: props.item.timetable.length * 8, width: 50, backgroundColor: "white", borderRadius: 10, opacity: 0.8 }}></View> : <View style={{ height: props.item.timetable.length * 8, width: 50, backgroundColor: "white", borderRadius: 10, opacity: 0.5 }}></View>}
			<Text style={styles.lessonsText}>{moment(props.item.timetable[0].date).format("H.mm")}</Text>
			<Text style={styles.lessonsText}>{moment(props.item.timetable[props.item.timetable.length - 1].date).add(45, "minutes").format("H.mm")}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	column: {
		padding: 5
	},
	lessonsText: {
		textAlign: 'center',
		maxWidth: 50,
		color: "white",
		opacity: 0.8,
		fontWeight: '600'
	}
})