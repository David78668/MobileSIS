import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import Heading from '../components/general/Heading';
import Datescroll from '../components/absences/DateScroll';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import AbsenceBox from '../components/absences/AbsenceBox';
import ApiRequest from '../tools/ApiRequest';
import { animation } from '../declarations/animation';
import moment from 'moment';
import "moment/locale/cs";
import { ThemeContext } from '../App';
import GetColors from '../declarations/colors';

export default function Absence() {
	useEffect(() => {
		getAbsence();
	}, []);
	
	// get absence
	const [dataStats, setDataStats] = useState(require('../test-data/absence-stats.json'));
	const [loadedStats, setLoadedStats] = useState(false);
	const [errorStats, setErrorStats] = useState(false);
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if(context){
		Colors = GetColors(context?.value);
	}
	async function getAbsence() {
		await ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/absence/stats',
			setData: setDataStats,
			setLoaded: setLoadedStats,
			setError: setErrorStats
		});

		animation();
	}

	// get absence month
	const [dataMonth, setDataMonth] = useState<any>(require('../test-data/absence-month.json'));
	const [loadedMonth, setLoadedMonth] = useState(false);
	const [errorMonth, setErrorMonth] = useState(false);

	async function getAbsenceMonth() {
		setLoadedMonth(false);

		await ApiRequest({
			requestUrl: `https://api.sis.kyberna.cz/api/absence/month?month=${month}&year=${year}`,
			setData: setDataMonth,
			setLoaded: setLoadedMonth,
			setError: setErrorMonth
		});

		animation();
	}

	useEffect(() => {
		if(loadedMonth) parseAbsence();
	}, [loadedMonth]);

	// parsed data
	const [absenceDays, setAbsenceDays] = useState(0);
	const [dates, setDates] = useState<object>([]);
	const [loadedDates, setLoadedDates] = useState(false);
	
	// parse absence
	function parseAbsence() {
		var dates: any = [];
		
		dataMonth.forEach((e: any) => {
			const date = e.lesson.date.toString().split('T')[0];
			const reason = e.state;
			if (!dates.find((e: any) => e.date == date)) {
				dates.push({ date, reason, dates: [], subjects: [] });
			}
		});

		dataMonth.forEach((e: any) => {
			const date = e.lesson.date.toString().split('T')[0];
			const day = dates.find((e: any) => e.date == date);
			day.dates.push(e.lesson.date);
			day.subjects.push(e.lesson.name);
		});
		
		setDates(dates);
		setLoadedDates(true);
		setAbsenceDays(dates.length);
	}

	// position in year
	const [month, setMonth] = useState(moment().get('month') + 1);
	const [year, setYear] = useState(moment().get('year'));
	const [monthText, setMonthText] = useState<string>();

	const months = ['září', 'říjnu', 'listopadu', 'prosinci', 'lednu', 'únoru', 'březnu', 'dubnu', 'květnu', 'červnu'];

	// month change
	function monthChange(index: number) {
		setMonthText(months[index]);

		const monthCalc = index > 3 ? index - 3 : index + 9;
		const yearCalc = monthCalc < 8 ? moment().get('year') : moment().get('year') - 1;
		setMonth(monthCalc);
		setYear(yearCalc);
	}

	useEffect(() => {
		getAbsenceMonth();
	}, [month]);
	const styles = StyleSheet.create({
		title: {
			color: Colors.PrimaryTextColor,
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
						<Text style={styles.title}>Absence v {monthText} {loadedMonth && `(${absenceDays})`}</Text>
						<ActivityIndicator style={styles.loading} animating={!loadedMonth} />
					</View>

					{loadedDates && <AbsenceBox data={dates} />}
				</View>
			</Body>
		</Container>
	);
}

