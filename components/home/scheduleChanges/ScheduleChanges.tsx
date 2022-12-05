import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ScheduleChangeBox from './ScheduleChangeBox';

export default function ScheduleChanges() {
	const data = require("../../../assets/testData.json");

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Změny v rozvrhu ({data.Days[0].Lessons.length})</Text>

			<FlatList
				data={data.Days[0].Lessons}
				renderItem={({ item, index }) => renderChange(item, index, data.Days[0].Lessons.length)}
				keyExtractor={(item, index) => index.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.changes} />
		</View>
	);
}

function renderChange(item: any, index: number, length: number) {
	return (
		<ScheduleChangeBox
			StartTime={item.StartTime} ShortName={item.ShortName}
			Classroom={item.Classroom} Teacher={item.Teacher}
			Change={item.LessonType} Last={index + 1 == length} />
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		opacity: 0.8
	},
	changes: {
		marginTop: 20,
		overflow: 'visible'
	}
});