import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ScheduleChangeBox from './ScheduleChangeBox';
import { Colors } from '../../../declarations/colors';
import testData from '../../../assets/homeSchedule.json';

export default function ScheduleChanges() {
	//const data = require("../../../assets/testData.json");
	//const filtered = data.filter((e: any) => e.LessonType.length != 0);

	function separator() {
		return <View style={{ width: 20 }}></View>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Změny v rozvrhu ({testData.data.length})</Text>

			<FlatList
				data={testData.data}
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
			StartTime={item.item.StartTime} ShortName={item.item.ShortName}
			Classroom={item.item.Classroom} Teacher={item.item.Teacher}
			Change={item.item.LessonType} />
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