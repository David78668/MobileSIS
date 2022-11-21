import React from 'react';
import HomeNewGradeBox from './HomeNewGradeBox';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';

const date = new Date();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const containerHeight = windowHeight * 0.18;

function daysInMonth(month: number, year: number) {
	return new Date(year, month, 0).getDate();
}

function convertToDays(date: string) {
	let splitDate = date.split('-');
	let days1 = Number(splitDate[0]) * 365 + daysInMonth(Number(splitDate[1]), Number(splitDate[0]));
	return Number(days1 + Number(splitDate[2]))
}

export default function HomeNewGrades() {
	//let grades = [];
	let year = date.getFullYear() - 2000;
	let currentDate = convertToDays(`${year}-${date.getMonth()}-${date.getDate()}`);
	/*
	for (let i = 0; i < data.Subjects.length; i++) {
		for (let k = 0; k < data.Subjects[i].Marks.length; k++) {
			if (currentDate - convertToDays(data.Subjects[i].Marks[k].Date) < 2) {
				grades.push(HomeNewGradeBox({
					subjectName: data.Subjects[i].ShortName,
					grade: String(data.Subjects[i].Marks[k].Value),
					date: String(data.Subjects[i].Marks[k].Date),
				}));
			}
		}
	}
	*/
	//let gradeAmount = grades.length;
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
				{/*grades*/}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: containerHeight,
		marginBottom: 0,
		marginTop: 'auto',
		borderRadius: 10,
		marginLeft: "5.9%",
		shadowOffset: { width: 0, height: 0 },
	},
	scrollView: {
		height: '100%',
		borderWidth:0
	}
})