import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Body from '../components/general/Body';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';

import ScheduleChanges from '../components/home/scheduleChanges/ScheduleChanges';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import HomeNewGrades from '../components/home/switchView/HomeNewGrades';


export default function Home() {
	return (
		<Container>
			<Heading headerText='Home' />
			
			<Body>
				<ScheduleChanges />
				<HomeSwitchView 
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{attended:400, missed:32, notExcused: 5}}/>, <HomeNewGrades/>]}
				/>
			</Body>
		</Container>
	);
}
