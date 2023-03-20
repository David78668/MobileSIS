import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import GetColors from '../../../declarations/colors';
import { useTheme } from '../../../context/ThemeProvider';

interface ScheduleChangeBoxProps {
	StartTime: string,
	ShortName: string,
	Classroom: string,
	Teacher: string,
	Change: string
}

export default function ScheduleChangeBox(props: ScheduleChangeBoxProps) {
	const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
	const styles = StyleSheet.create({
		change: {
			backgroundColor: Colors.PrimaryBackgroundColor,
			alignSelf: 'center',
			flexDirection: 'row',
			borderRadius: 10,
			shadowColor: 'rgba(0, 0, 0, 0.1)',
			shadowOffset: { width: 0, height: 0 },
			shadowRadius: 10,
			shadowOpacity: 1
		},
		changeleft: {
			borderTopLeftRadius: 10,
			borderBottomLeftRadius: 10,
			paddingHorizontal: 20,
			backgroundColor: Colors.ClassroomChangedColor,
			justifyContent: 'center',
			alignItems: 'center',
			width: 80,
		},
		classstart: {
			color: Colors.PrimaryTextColor,
			fontWeight: 'bold',
		},
		classend: {
			color: Colors.PrimaryTextColor,
			opacity: 0.5,
			fontWeight: 'bold'
		},
		changeright: {
			paddingVertical: 10,
			paddingHorizontal: 20
		},
		top: {
			width: 150,
			flexDirection: 'row',
			alignItems: 'center'
		},
		difference: {
			fontSize: 14,
			fontWeight: '400',
		},
		lesson: {
			fontSize: 18,
			fontWeight: 'bold',
			opacity: 0.8,
			color: Colors.SecondaryTextColor,
		},
		bottom: {
			marginTop: 5
		},
		classroom: {
			flexDirection: 'row',
			alignItems: 'center',
			color: Colors.SecondaryTextColor
		},
		value: {
			marginLeft: 5,
			fontWeight: '500',
			opacity: 0.8,
			color: Colors.SecondaryTextColor
		},
		teacher: {
			flexDirection: 'row',
			alignItems: 'center',
			marginTop: 3
		}
	});
	return (
		<View style={styles.change}>
			<View style={styles.changeleft}>
				<Text style={styles.classstart}>{moment(props.StartTime).format("H:mm")}</Text>
				<Text style={styles.classend}>{moment(props.StartTime).add(45, "minutes").format("H:mm")}</Text>
			</View>
			
			<View style={styles.changeright}>
				<View style={styles.top}>
					<Text style={styles.lesson}>{props.ShortName}</Text>
					
					{props.Change == "LessonRemoved" ? 
							<Ionicons name='close' size={15} color={Colors.LessonRemovedColor} style={{ marginLeft: 5 }} /> : null}
					
					{props.Change == "ClassroomChanged" ? 
						<Ionicons name='easel' size={15} color={Colors.ClassroomChangedColor} style={{ marginLeft: 5 }} /> : null}
					
					{props.Change == "TeacherChanged" ? 
						<Ionicons name='person-circle' size={15} color={Colors.TeacherChangedColor} style={{ marginLeft: 5 }} /> : null}
				</View>

				<View style={styles.bottom}>
					<View style={styles.classroom}>
						<Ionicons color={Colors.ClassroomChangedColor} size={15} name="easel" />
						<Text style={styles.value}>Učebna {props.Classroom}</Text>
					</View>

					<View style={styles.teacher}>
						<Ionicons color={Colors.TeacherChangedColor} size={15} name="person-circle" />
						<Text style={styles.value}>{props.Teacher}</Text>
					</View>
				</View>
			</View>
		</View>
	)
}