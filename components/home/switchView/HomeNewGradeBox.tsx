import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const containerHeight = windowHeight * 0.18;
const months = ["Led.", "Úno.", "Bře.", "Dub.", "Kvě.", "Čer.", "Črv.", "Srp.", "Zář.", "Řij.", "Lis.", "Pro."];

interface GradeBoxProps {
	icon?: FunctionComponent,
	subjectName: String,
	date: String,
	grade: String,
}

function GetDate(date: String) {
	let splitDate = date.split('-');
	return (`${splitDate[2]}. ${months[Number(splitDate[1])]} 20${splitDate[0]}`);
}

export default function HomeNewGradeBox(props: GradeBoxProps) {
	return (
		<View style={styles.container}>
			<View style={styles.iconBox}></View>
			<Text style={styles.header}>{props.subjectName}</Text>
			<Text style={styles.baseText}>{GetDate(props.date)}</Text>
			<View style={styles.gradeBox}>
				<Text style={[styles.header, styles.grade]}>{props.grade}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginRight: windowWidth * 0.037,
		backgroundColor: "white",
		borderRadius: 15,
		alignItems: 'center',
		height: containerHeight,
		width: containerHeight * 0.8,
	},
	gradeBox: {
		height: '25.5%',
		width: '37.5%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: '#E9671E',
		marginTop: 'auto',
		marginBottom: 0,
	},
	iconBox: {
		marginTop: containerHeight * 0.082,
		height: containerHeight * 0.234,
		width: containerHeight * 0.234,
		borderRadius: 10,
		backgroundColor: "blue",
	},
	header: {
		fontSize: 21,
		fontWeight: 'bold',
	},
	baseText: {
		fontSize: 14,
	},
	grade: {
		color: 'white',
	}
})