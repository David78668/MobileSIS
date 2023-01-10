import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Body from '../components/general/Body';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';
import ScheduleChanges from '../components/home/scheduleChanges/ScheduleChanges';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import HomeNewGrades from '../components/home/switchView/HomeNewGrades';
import moment from 'moment';
import "moment/locale/cs";
import Carousel from '../components/home/carousel/Carousel';
import testData from '../assets/homeSchedule.json';
import { Colors } from '../declarations/colors';

export default function Home() {
	const format = moment().format('D. MMMM').toString();
	const date = format[0].toUpperCase() + format.slice(1);

	const absenceData = require('../test-data/absence-stats.json');

	return (
		<Container>
			<Heading title='Vítejte' headerComponent={<Text style={styles.header}>{date}</Text>}>
				<Carousel data={testData.data} />
			</Heading>
			
			<Body>
				<ScheduleChanges />

				<HomeSwitchView
					headerTexts={["Nové známky", "Absence"]}
					components={[<HomeNewGrades />, <HomeAbsence absence={{
						attended: absenceData.lessons,
						missed: absenceData.missedLessons,
						notExcused: absenceData.unexcusedLessons
					}} />]} />
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 17,
   		color: Colors.PrimaryTextColor,
		fontWeight: '500',
		padding: 5
	}
});