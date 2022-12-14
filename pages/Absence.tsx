import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import Heading from '../components/general/Heading';
import Datescroll from '../components/absences/DateScroll';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import AbsenceBox from '../components/absences/AbsenceBox';

import moment from 'moment';
import "moment/locale/cs";

moment.locale('cs');

export default function Absence() {
	const [month, setMonth] = useState<string>();

	function monthChange(index: number) {
		const months = ['září', 'říjnu', 'listopadu', 'prosinci', 'lednu', 'únoru', 'březnu', 'dubnu', 'květnu', 'červnu'];
		setMonth(months[index]);
	}

	const data = [{
		date: new Date(),
		start: '10:00',
		end: '11:00',
		reason: 'Školní akce'
	}, {
		date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
		start: '11:00',
		end: '12:00',
		reason: 'Zaspání'
	}, {
		date: new Date(new Date().getTime() + 1000 * 60 * 60 * 48),
		start: '12:00',
		end: '13:00',
		reason: 'Nevolnost'
	}];

	return (
		<Container>
			<Heading title='Absence' headerComponent={<Datescroll monthChange={monthChange} />} />
			
			<Body>
				<View style={styles.graphContainer}>
					<Text style={styles.title}>Celková absence</Text>
					<HomeAbsence absence={{ attended: 200, missed: 50, notExcused: 10 }} />
				</View>

				<View style={styles.dates}>
					<Text style={styles.title}>Absence v {month} ({data.length})</Text>
					<AbsenceBox data={data} />
				</View>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginLeft: 20,
		opacity: 0.8
	},
	dates: {
		marginVertical: 20
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