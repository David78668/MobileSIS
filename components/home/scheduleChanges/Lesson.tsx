import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../../../declarations/colors';
import moment from 'moment';

export default function Lesson(item: any) {
	let startTime = moment(item.date).format("H.mm");
	let endTime = moment(item.date).add(45, "minutes").format("H.mm");
	return (
		<View style={styles.change}>
			<View style={styles.changeleft}>
				<Text style={styles.classstart}>{startTime}</Text>
				<Text style={styles.classend}>{endTime}</Text>
			</View>
			<View style={styles.changeright}>
				<View style={styles.top}>
					<Text style={styles.lesson}>{item.subject.name}</Text>
				</View>
				<View style={styles.bottom}>
					<View style={styles.classroom}>
						<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name="easel"></Ionicons>
						<Text style={styles.classroomtext}>{item.classroom}</Text>
					</View>
					<View style={styles.teacher}>
						<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name="person-circle"></Ionicons>
						<Text style={styles.teachertext}>{item.subject.teacher.shortName}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	change: {
		backgroundColor: Colors.PrimaryBackgroundColor,
		margin: 1,
		flexDirection: 'row',
	},
	changeleft: {
		width: 66,
		height: 100,
		backgroundColor: Colors.TertiaryBackgroundColor,
		borderLeftColor: Colors.TertiaryBackgroundColor,
		borderLeftWidth: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	classstart: {
		color: Colors.PrimaryTextColor,
	},
	classend: {
		color: Colors.PrimaryTextColor,
		opacity: 0.5,
	},
	changeright: {
		width: 144,
		height: 100,
		marginLeft: 10,
	},
	top: {
		width: 144,
		height: 50,
		justifyContent: 'space-evenly',
	},
	difference: {
		fontSize: 14,
		fontWeight: "400",
	},
	lesson: {
		fontSize: 21,
		fontWeight: '600',
		color: Colors.SecondaryTextColor,
	},
	bottom: {
		width: 144,
		height: 50,
		paddingTop: 3,
		paddingBottom: 3,
		justifyContent: 'space-evenly',
		backgroundColor: Colors.PrimaryBackgroundColor,
	},
	classroom: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	classroomtext: {
		marginLeft: 4,
		fontWeight: "500",
		fontSize: 15,
		color: Colors.SecondaryTextColor,
	},
	fromclassroomtext: {
		marginLeft: 3,
		opacity: 0.35,
		fontWeight: "500",
		fontSize: 15,
		color: Colors.SecondaryTextColor,
	},
	teacher: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	teachertext: {
		marginLeft: 4,
		fontWeight: "500",
		fontSize: 15,
		color: Colors.SecondaryTextColor,
	},
});