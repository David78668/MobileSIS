import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import moment from 'moment';
import { getCurrentTimeInSeconds } from 'expo-auth-session/build/TokenRequest';
import GetColors from '../../declarations/colors';
import { useTheme } from '../../context/ThemeProvider';

export interface LessonProps {
	item: any
}

export default function Lesson(props : LessonProps) {
	let startTime = moment(props.item.date).format("H:mm");
	let endTime = moment(props.item.date).add(45, "minutes").format("H:mm");
	const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
	const styles = StyleSheet.create({
		inactiveClass: {
			opacity: 0.3
		},
		suplementaryClass: {
			backgroundColor: Colors.ClassroomChangedColor
		},
		change: {
			backgroundColor: Colors.PrimaryBackgroundColor,
			flexDirection: 'row',
			borderRadius: 10,
			flex: 1,
			overflow: 'hidden',
			marginHorizontal: 0
		},
		changeleft: {
			backgroundColor: Colors.TertiaryBackgroundColor,
			height: "100%",
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 20,
			width: 80,
		},
		classstart: {
			color: Colors.PrimaryTextColor,
			fontWeight: 'bold'
		},
		classend: {
			color: Colors.PrimaryTextColor,
			fontWeight: 'bold',
			opacity: 0.5
		},
		changeright: {
			paddingHorizontal: 20,
			paddingVertical: 10
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
			fontSize: 18,
			color: Colors.SecondaryTextColor,
			fontWeight: 'bold',
			opacity: 0.8
		},
		bottom: {
			width: "100%",
			marginTop: 5,
			backgroundColor: Colors.PrimaryBackgroundColor
		},
		classroom: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		value: {
			marginLeft: 5,
			fontWeight: '500',
			opacity: 0.8,
			color: Colors.SecondaryTextColor
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
			marginTop: 3
		}
	});

	return (
		<View style={[styles.change, !props.item.active && styles.inactiveClass]}>
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
						<Ionicons color={props.item.static ? Colors.TertiaryBackgroundColor : Colors.ClassroomChangedColor} size={15} name="easel"></Ionicons>
						<Text style={styles.value}>Učebna {props.item.classroom}</Text>
					</View>

					<View style={styles.teacher}>
						<Ionicons color={props.item.static ? Colors.TertiaryBackgroundColor : Colors.ClassroomChangedColor} size={15} name="person-circle"></Ionicons>
						<Text style={styles.value}>{props.item.subject.teacher.shortName}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}