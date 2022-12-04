import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import Heading from '../components/general/Heading';
import Datescroll from '../components/absences/DateScroll';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import AbsenceBox from '../components/absences/AbsenceBox';

export default function Absence() {
	return (
		<Container>
			<Heading headerText='Absence' headerComponent={<Datescroll />} />
			
			<Body>
				<View style={styles.graphContainer}>
					<Text style={styles.title}>Celková absence</Text>
					<HomeAbsence absence={{ attended: 400, missed: 32, notExcused: 5 }} />
				</View>

				<View style={styles.dates}>
					<Text style={styles.title}>Absence tento měsíc</Text>
					<AbsenceBox />
				</View>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginLeft: 20
	},
	dates: {
		marginVertical: 20
	},
	headerContainer: {
		flexDirection: 'row',
		width: '88%',
	},
	graphContainer: {
		marginVertical: 20
	},
	absenceBoxContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	}
});