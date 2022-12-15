import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../declarations/colors';

import moment from 'moment';
import "moment/locale/cs";

interface GradeBoxProps {
	icon?: React.ReactNode,
	subjectName: string,
	date: Date,
	grade: string,
	last: boolean
}

export default function HomeNewGradeBox(props: GradeBoxProps) {
	moment.locale('cs');
	const date = moment(props.date).format('D. MMMM').toString();

	return (
		<View style={{ ...styles.container, marginRight: props.last ? 0 : 20 }}>
			<View style={{ alignItems: 'center' }}>
				<View style={styles.iconBox}>{props.icon}</View>
				<Text style={styles.header}>{props.subjectName}</Text>
				<Text style={styles.date}>{date}</Text>
			</View>

			<View style={styles.gradeBox}>
				<Text style={styles.grade}>{props.grade}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.PrimaryBackgroundColor,
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingTop: 10,
		justifyContent: 'space-between',
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
		width: 120
	},
	gradeBox: {
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: Colors.TertiaryBackgroundColor,
		paddingVertical: 5,
		marginTop: 20,
		flexDirection: 'row'
	},
	iconBox: {
		height: 40,
		width: 40,
		borderRadius: 10,
		backgroundColor: "#e9691e1A",
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.SecondaryTextColor,
		opacity: 0.8,
		marginTop: 10
	},
	date: {
		fontWeight: '500',
		opacity: 0.6,
		color: Colors.SecondaryTextColor,
		fontSize: 13
	},
	grade: {
		color: Colors.PrimaryTextColor,
		fontWeight: 'bold',
		fontSize: 18
	}
})