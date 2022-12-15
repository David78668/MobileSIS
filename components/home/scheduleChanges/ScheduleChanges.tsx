import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ScheduleChangeBox from './ScheduleChangeBox';
import { Colors } from '../../../declarations/colors';
import { Feather } from '@expo/vector-icons';

const testData = [
	{
		StartTime: "2022-12-12T07:50:00",
		ShortName: "MAT",
		Clasroom: "214",
		Teacher: "KAR"
	},
	{
		StartTime: "2022-12-12T07:50:00",
		ShortName: "MAT",
		Clasroom: "214",
		Teacher: "KAR"
	},
	{
		StartTime: "2022-12-12T09:45:00",
		ShortName: "MAT",
		Clasroom: "214",
		Teacher: "KAR"
	},
]
	
	
export default function ScheduleChanges() {
	//const data = require("../../../assets/testData.json");
	//const filtered = data.filter((e: any) => e.LessonType.length != 0);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Změny v rozvrhu ({testData.length})</Text>
			<FlatList
				data={testData}
				renderItem={({ item, index }) => renderChange(item, index, testData.length)}
				keyExtractor={(item, index) => index.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={290}
          		decelerationRate={0.5}
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
		color: Colors.SecondaryTextColor,
		fontSize: 18,
		opacity: 0.8
	},
	changes: {
		marginTop: 20,
		overflow: 'visible'
	}
});