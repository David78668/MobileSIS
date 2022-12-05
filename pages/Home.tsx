import React from 'react';
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
	const format = moment().format('dddd, D. MMMM').toString();
	const date = format[0].toUpperCase() + format.slice(1);

	return (
		<Container>
			<Heading headerText={date} />
			
			<Body>
				<ScheduleChanges />
				<HomeSwitchView 
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{ attended: 200, missed: 50, notExcused: 10 }}/>, <HomeNewGrades/>]}
				/>
			</Body>
		</Container>
	);
}