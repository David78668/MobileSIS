import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Lesson(item: any) {
	console.log(item);
	return (
		<View>
			{true == true ?(<View style={styles.change}>
			<View style={styles.changeleft}>
				<Text style={styles.classstart}>{item.item.date}</Text>
				<Text style={styles.classend}>{item.item.date}</Text>
			</View>
			<View style={styles.changeright}>
				<View style={styles.top}>
					<Text style={styles.lesson}>{item.item.subject.name}</Text>
				</View>
				<View style={styles.bottom}>
					<View style={styles.classroom}>
						<Ionicons color="#DE6830" size={15} name="easel"></Ionicons>
						<Text style={styles.classroomtext}>{item.item.classroom}</Text>
					</View>
					<View style={styles.teacher}>
						<Ionicons color="#DE6830" size={15} name="person-circle"></Ionicons>
						<Text style={styles.teachertext}>{item.item.subject.teacher.shortName}</Text>
					</View>
				</View>
			</View>
		</View>) : <View></View>}
		</View>
		
	);
}

const styles = StyleSheet.create({
	change: {
		backgroundColor: 'white',
		margin: 1,
		flexDirection: 'row',
	},
	changeleft: {
		width: 66,
		height: 100,
		backgroundColor: '#DE6830',
		borderLeftColor: '#E9671E',
		borderLeftWidth: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	classstart: {
		color: 'white',
	},
	classend: {
		color: 'white',
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
	},
	bottom: {
		width: 144,
		height: 50,
		paddingTop: 3,
		paddingBottom: 3,
		justifyContent: 'space-evenly',
		backgroundColor: 'white',
	},
	classroom: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	classroomtext: {
		marginLeft: 4,
		fontWeight: "500",
		fontSize: 15,
	},
	fromclassroomtext: {
		marginLeft: 3,
		opacity: 0.35,
		fontWeight: "500",
		fontSize: 15,
	},
	teacher: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	teachertext: {
		marginLeft: 4,
		fontWeight: "500",
		fontSize: 15,
	},
});