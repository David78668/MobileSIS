import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Body from '../components/general/Body';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';
import Carousel from '../components/home/carousel/carousel';
import ScheduleChanges from '../components/home/scheduleChanges/ScheduleChanges';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import HomeNewGrades from '../components/home/switchView/HomeNewGrades';

import moment from 'moment';
import "moment/locale/cs";

export default function Home() {
	// date
	moment.locale('cs');
	const date = moment().format('dddd, DD. MMM.');

	return (
		<Container>
			<Heading headerText={date.toString()}>
			{/* <ScrollView style={{height:50, backgroundColor:'red'}}>
			<Text> Test </Text>
			</ScrollView> */}
			<Carousel/>
			</Heading>
			<Body>
				<ScheduleChanges />
				<HomeSwitchView 
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{ attended:400, missed:32, notExcused: 5 }}/>, <HomeNewGrades/>]}
				/>
			</Body>
		</Container>
	);
}
