import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
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

export default function Home() {
	const format = moment().format('dddd, D. MMMM').toString();
	const date = format[0].toUpperCase() + format.slice(1);

	return (
		<Container>
			<Heading title='Vítejte' subtitle={date}>
				{<Carousel data={testData.data} />}
			</Heading>
			
			<Body>
				<ScheduleChanges />

				<HomeSwitchView
					headerTexts={["Nové známky", "Absence"]}
					components={[<HomeNewGrades />, <HomeAbsence absence={{ attended: 200, missed: 50, notExcused: 10 }} />]}
				/>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({});