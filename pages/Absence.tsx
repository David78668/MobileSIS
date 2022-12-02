import React from 'react';
import { StyleSheet, View, } from 'react-native';
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
					<HomeAbsence absence={{ attended: 400, missed: 32, notExcused: 5 }} />
				</View>

				<View>
					<AbsenceBox />
				</View>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	profileContainer: {
		maxHeight: '13%',
		minWidth: '100%',
		backgroundColor: 'red',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		width: '88%',
	},
	graphContainer: {
		marginTop: 10,
		marginBottom: 20
	},
	absenceBoxContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	}
});