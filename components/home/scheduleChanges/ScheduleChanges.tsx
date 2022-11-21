import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FancyBox from '../../general/FancyBox';
import ScheduleChangeBox from './ScheduleChangeBox';

export default function ScheduleChanges() {
	const data = require("../../../assets/testData.json");

	return (
		<View style={styles.container}>
			<Text style={styles.title}>2 změny v rozvrhu</Text>
			
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.changes}>
				{data.Days[0].Lessons.map((item: any) => (
					item.LessonType == "LessonChanged" ?
						<ScheduleChangeBox
							StartTime={item.StartTime} ShortName={item.ShortName}
							Classroom={item.Classroom} Teacher={item.Teacher}
							Lessons={data.Days[0].Lessons} />
						: null
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	changes: {
		marginTop: 10
	}
});