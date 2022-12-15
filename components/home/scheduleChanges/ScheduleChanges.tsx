import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ScheduleChangeBox from './ScheduleChangeBox';
import { Colors } from '../../../declarations/colors';

const testData = [{
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
	}];

export default function ScheduleChanges() {
	//const data = require("../../../assets/testData.json");
	//const filtered = data.filter((e: any) => e.LessonType.length != 0);

	function separator() {
		return <View style={{ width: 20 }}></View>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Změny v rozvrhu ({testData.length})</Text>

			<FlatList
				data={testData}
				renderItem={renderChange}
				keyExtractor={(item, index) => index.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={separator}
				snapToInterval={290}
          		decelerationRate={0.5}
				style={styles.changes} />
		</View>
	);
}

function renderChange({ item }: any) {
	return (
		<ScheduleChangeBox
			StartTime={item.StartTime} ShortName={item.ShortName}
			Classroom={item.Classroom} Teacher={item.Teacher}
			Change={item.LessonType} />
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