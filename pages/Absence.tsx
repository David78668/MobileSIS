import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import Heading from '../components/general/Heading';
import Datescroll from '../components/absences/DateScroll';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import AbsenceBox from '../components/absences/AbsenceBox';
import * as SecureStore from 'expo-secure-store';
import moment from 'moment';
import "moment/locale/cs";
import { parse } from 'expo-linking';
import ApiRequest from '../tools/ApiRequest';

export default function Absence() {
	const [dataStats, setDataStats] = useState<any>(require('../test-data/absence-stats.json'));
	const [loadedStats, setLoadedStats] = useState(false);
	const [errorStats, setErrorStats] = useState(false);

	async function getAbsence() {
		await ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/absence/stats',
			setData: setDataStats,
			setLoaded: setLoadedStats,
			setError: setErrorStats
		});

		getAbsenceMonth(monthIndex, moment().get('year'));
	}

	const [dataMonth, setDataMonth] = useState<any>(require('../test-data/absence-month.json'));
	const [loadedMonth, setLoadedMonth] = useState(false);
	const [errorMonth, setErrorMonth] = useState(false);

	async function getAbsenceMonth(index: number, year: number) {

		await ApiRequest({
			requestUrl: `https://api.sis.kyberna.cz/api/absence/month?month=${index}&year=${year}`,
			setData: setDataMonth,
			setLoaded: setLoadedMonth,
			setError: setErrorMonth,
			finally: () => parseAbsence(dataMonth)
		});
	}

	useEffect(() => {
		getAbsence();
	}, []);

	const [month, setMonth] = useState<string>();
	const [monthIndex, setMonthIndex] = useState<number>(moment().get('month') + 1);
	const months = ['září', 'říjnu', 'listopadu', 'prosinci', 'lednu', 'únoru', 'březnu', 'dubnu', 'květnu', 'červnu'];

	function monthChange(index: number) {
		setMonth(months[index]);

		const monthIndex = index > 3 ? index - 3 : index + 9;
		setMonthIndex(monthIndex);
		getAbsenceMonth(monthIndex, index > 3 ? moment().get('year') + 1 : moment().get('year'));
	}

	const [absenceDays, setAbsenceDays] = useState(0);
	const [dates, setDates] = useState<object>();
	const [loadedDates, setLoadedDates] = useState(false);

	function parseAbsence(data: any) {
		var dates: any = [];
		
		// get unique days
		data.forEach((e: any) => {
			const date = e.lesson.date.toString().split('T')[0];
			const reason = e.state;
			if (!dates.find((e: any) => e.date == date)) {
				dates.push({ date: date, dates: [], reason });
			}
		});

		// fill dates
		data.forEach((e: any) => {
			const date = e.lesson.date.toString().split('T')[0];
			const day = dates.find((e: any) => e.date == date);
			day.dates.push(e.lesson.date);
		});
		
		setDates(dates);
		setLoadedDates(true);
		setAbsenceDays(dates.length);
	}

	return (
		<Container>
			<Heading title='Absence' headerComponent={<Datescroll monthChange={monthChange} />} />
			
			<Body onRefresh={getAbsence}>
				<View style={styles.graphContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>Celková absence</Text>
						<ActivityIndicator style={styles.loading} animating={!loadedStats} />
					</View>

					{loadedStats &&
						<HomeAbsence absence={{
							attended: dataStats.lessons,
							missed: dataStats.missedLessons,
							notExcused: dataStats.unexcusedLessons
						}} />}
				</View>

				<View style={styles.dates}>
					<View style={styles.header}>
						<Text style={styles.title}>Absence v {month} {loadedMonth ? `(${absenceDays})` : null}</Text>
						<ActivityIndicator style={styles.loading} animating={!loadedMonth} />
					</View>

					{loadedDates && <AbsenceBox data={dates} />}
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
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	loading: {
		marginLeft: 10
	}
});