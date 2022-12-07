import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

interface ScheduleChangeBoxProps {
	StartTime: string,
	ShortName: string,
	Classroom: string,
	Teacher: string,
	Change: string,
	Last: boolean
}

export default function ScheduleChangeBox(props: ScheduleChangeBoxProps) {
	
	function computeTime(time: string, lenght: number) {
		let splitTime = time.split(':');
		let hours = isNaN(Number(splitTime[0])) ? 0 : Number(splitTime[0]);
		let minutes = isNaN(Number(splitTime[1])) ? 0 : Number(splitTime[1]);
		minutes += lenght;
		
		while (minutes >= 60) {
			hours++;
			minutes -= 60;
		}

		return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
	}

	function getChangedClassroom(StartTime: any, Lessons: any) {
		let ChangedClassroom
		
		Lessons.map((item: any) => (
			item.StartTime == StartTime && item.LessonType != "LessonChanged" ? ChangedClassroom = item.Classroom : null
		));

		return ChangedClassroom;
	}

	return (
		<View style={{ ...styles.change, marginRight: props.Last ? 0 : 20 }}>
			<View style={styles.changeleft}>
				<Text style={styles.classstart}>{props.StartTime[0] != '0' ? props.StartTime : props.StartTime.slice(1, 5)}</Text>
				<Text style={styles.classend}>{computeTime(props.StartTime, 45)}</Text>
			</View>
			<View style={styles.changeright}>
				<View style={styles.top}>
					<Text style={styles.lesson}>{props.ShortName}</Text>
					
					{props.Change == "LessonRemoved" ? 
							<Ionicons name='close' size={15} color="#EE5656" style={{ marginLeft: 5 }} /> : null}
					
					{props.Change == "ClassroomChanged" ? 
						<Ionicons name='easel' size={15} color="#EE5656" style={{ marginLeft: 5 }} /> : null}
					
					{props.Change == "TeacherChanged" ? 
						<Ionicons name='person-circle' size={15} color="#EE5656" style={{ marginLeft: 5 }} /> : null}
				</View>

				<View style={styles.bottom}>
					<View style={styles.classroom}>
						<Ionicons color="#EE5656" size={15} name="easel" />
						<Text style={styles.value}>Učebna {props.Classroom}</Text>
					</View>

					<View style={styles.teacher}>
						<Ionicons color="#EE5656" size={15} name="person-circle" />
						<Text style={styles.value}>{props.Teacher}</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	change: {
		backgroundColor: 'white',
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
		backgroundColor: '#EE5656',
		justifyContent: 'center',
		alignItems: 'center',
		width: 80
	},
	classstart: {
		color: 'white',
		fontWeight: 'bold'
	},
	classend: {
		color: 'white',
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
		fontWeight: '400'
	},
	lesson: {
		fontSize: 18,
		fontWeight: 'bold',
		opacity: 0.8
	},
	bottom: {
		marginTop: 10
	},
	classroom: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	value: {
		marginLeft: 5,
		fontWeight: '500',
		opacity: 0.8
	},
	teacher: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 3
	}
});