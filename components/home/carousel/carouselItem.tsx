import React from 'react';
import { TeacherIcon, RoomIcon } from '../../../assets/carouselIcons';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const date = new Date();

function computeTime(time: string, lenght: number) {
	let splitTime = time.split(':')
	let hours = isNaN(Number(splitTime[0])) ? 0 : Number(splitTime[0]);
	let minutes = isNaN(Number(splitTime[1])) ? 0 : Number(splitTime[1]);
	minutes += lenght;

	while (minutes >= 60) {
		hours++;
		minutes -= 60;
	}

	return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}

function labelChange(time: string, duration: number, subject: string) {
	let splitTime = time.split(':')
	let hours = Number(splitTime[0]);
	let minutes = Number(splitTime[1]);
	let startTime = hours * 60 + minutes;
	let endTime = startTime + duration;
	let currentTime = date.getHours() * 60 + date.getMinutes();
	
	if (currentTime < startTime) {
		return "Proběhne";
	}
	if (currentTime >= startTime && currentTime <= endTime) {
		return "Právě probíhá";
	}
	if (currentTime > endTime) {
		return "Již proběhlo";
	}
}

export type CarouselItemProps = {
	Id: number;
		Name: string;
		ShortName: string;
		Teacher: string;
		TeacherShortName: string;
		StartTime: string;
		Classroom: string;
		Group: string;
		LessonType: string;
		Url: string;
}
export interface CarouselCardItemProps {
	item: CarouselItemProps,
}

export default function CarouselItem(props: CarouselCardItemProps) {
	return (
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<Text style={styles.startTimeLabel}>{props.item.StartTime[0] != '0' ? props.item.StartTime : props.item.StartTime.slice(1, 5)}</Text>
				<Text style={styles.endTimeLabel}>{computeTime(props.item.StartTime, 45)}</Text>
			</View>

			<View style={styles.divider}></View>
			
			<View style={styles.cardBody}>
				<Text style={styles.subjectLabel}>{props.item.Name}</Text>

				<View style={{ marginTop: 10 }}>
					<View style={styles.paralel}>
						<Ionicons color="#DE6830" size={15} name='easel' />
						<Text style={styles.value}>Učebna {props.item.Classroom}</Text>
					</View>

					<View style={{ ...styles.paralel, marginTop: 3 }}>
						<Ionicons color="#DE6830" size={15} name='person-circle' />
						<Text style={styles.value}>{props.item.Teacher}</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	divider: {
		borderRadius: 10,
		height: "75%",
		width: 3,
		backgroundColor: "#DE6830",
		marginHorizontal: 20
	},
	paralel: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	container: {
		alignItems: "center",
		flexDirection: 'row',
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingHorizontal: 25,
		paddingVertical: 15,
		width: width - 40,
		marginHorizontal: 20
	},
	timeContainer: {
		alignItems: 'center',
		width: 40
	},
	value: {
		marginLeft: 5,
		fontWeight: '500',
		opacity: 0.8
	},
	subjectLabel: {
		fontSize: 18,
		fontWeight: 'bold',
		opacity: 0.8
	},
	endTimeLabel: {
		opacity: 0.3,
		fontWeight: 'bold'
	},
	startTimeLabel: {
		fontWeight: 'bold'
	},
	cardBody: {
		justifyContent: 'center',
	},
	time: {
		opacity: 0.3,
		fontWeight: '500'
	}
});