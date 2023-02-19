import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import moment from 'moment';
import { getCurrentTimeInSeconds } from 'expo-auth-session/build/TokenRequest';
import { ThemeContext } from '../../App';
import GetColors from '../../declarations/colors';

export interface LessonProps {
	item: any,
}

export default function Lesson(props : LessonProps) {
	let startTime = moment(props.item.date).format("H.mm");
	let endTime = moment(props.item.date).add(45, "minutes").format("H.mm");
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if (context) {
		Colors = GetColors(context?.value);
	}
	const styles = StyleSheet.create({
		inactiveClass: {
			opacity: 0.3
		},
		suplementaryClass: {
			backgroundColor: Colors.ClassroomChangedColor
		},
		change: {
			backgroundColor: Colors.PrimaryBackgroundColor,
			height:80,
			flexDirection: 'row',
			borderRadius: 10,
			flex: 1,
			overflow: 'hidden',
			marginHorizontal: 5,
		},
		changeleft: {
			width: 66,
			backgroundColor: Colors.TertiaryBackgroundColor,
			height: "100%",
			justifyContent: 'center',
			alignItems: 'center',
		},
		classstart: {
			color: Colors.PrimaryTextColor,
		},
		classend: {
			color: Colors.PrimaryTextColor,
		},
		changeright: {
			height: "100%",
			marginLeft: 10,
			paddingVertical: 5,
		},
		top: {
			width: "100%",
			justifyContent: 'space-evenly',
		},
		difference: {
			fontSize: 14,
			color: Colors.SecondaryTextColor,
			fontWeight: "400",
		},
		lesson: {
			fontSize: 20,
			color: Colors.SecondaryTextColor,
			fontWeight: '600',
		},
		bottom: {
			width: "100%",
			paddingTop: 3,
			paddingBottom: 3,
			backgroundColor: Colors.PrimaryBackgroundColor ,
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
	return (
			(<View style={[styles.change, !props.item.active &&  styles.inactiveClass]}>
				<View style={[styles.changeleft, !props.item.static && styles.suplementaryClass]}>
					<Text style={styles.classstart}>{startTime}</Text>
					<Text style={styles.classend}>{endTime}</Text>
				</View>
				<View style={styles.changeright}>
					<View style={styles.top}>
						<Text style={styles.lesson}>{props.item.subject.name}</Text>
					</View>
					<View style={styles.bottom}>
						<View style={styles.classroom}>
							<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name="easel"></Ionicons>
							<Text style={styles.classroomtext}>{props.item.classroom}</Text>
						</View>
						<View style={styles.teacher}>
							<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name="person-circle"></Ionicons>
							<Text style={styles.teachertext}>{props.item.subject.teacher.shortName}</Text>
						</View>
					</View>
				</View>
			</View>)
	);
}