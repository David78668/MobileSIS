import React from 'react';
import HomeNewGradeBox from './HomeNewGradeBox';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const date = new Date();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

	const data = [{
		date: new Date(),
		subject: 'MAT',
		grade: '1',
		icon: <Ionicons name='shapes' size={20} color='#E9671ECC' />
	}, {
		date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
		subject: 'PRG',
		grade: '1',
		icon: <Ionicons name='code-slash' size={20} color='#E9671ECC' />
	}, {
		date: new Date(new Date().getTime() + 1000 * 60 * 60 * 48),
		subject: 'AGJ',
		grade: '1',
		icon: <Ionicons name='earth' size={20} color='#E9671ECC' />
	}, {
		date: new Date(new Date().getTime() + 1000 * 60 * 60 * 72),
		subject: 'FYZ',
		grade: '1',
		icon: <Ionicons name='sunny' size={20} color='#E9671ECC' />
	}];
	
	function renderGrade(item: any, index: number, length: number) {
		return (
			<HomeNewGradeBox
				date={item.date}
				subjectName={item.subject}
				grade={item.grade}
				icon={item.icon}
				last={index + 1 == length} />
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => renderGrade(item, index, data.length)}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={140}
				decelerationRate={0.5}
				style={{ overflow: 'visible' }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20
	}
});