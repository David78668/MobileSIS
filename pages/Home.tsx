import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Container from '../components/Container';
import HomeSwitchView from '../components/HomeSwitchView';
import CarouselCards from '../components/NextSubjectCarousel';
import ScheduleChanges from '../components/ScheduleChanges';


export default function Home() {
	return (
		<Container>
			<CarouselCards />
			<ScheduleChanges />
			<HomeSwitchView />
		</Container>
	);
}
