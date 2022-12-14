import React from 'react';
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
import {CarouselItem} from '../components/home/carousel/CarouselItem';

const testData = {
	data:[
		{
			item: {
				StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
			}
		},
		{
			item: {
				StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
			}
		},
		{
			item: {
				StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
			}
		},
		{
			item: {
				StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
			}
		},
	]
}
/* const testData = {
	data: [
		{
			item: {
				{
					StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
				},
				{
					StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
				},
				{
					StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
				},
				{
					StartTime: "2022-12-14T07:00:00",
					Name: "Matematika",
					Teacher: "Zlata Karpíšková",
					Classroom: "214"
				},
			}
		}
	]
} */

export default function Home() {
	// date
	moment.locale('cs');
	const format = moment().format('dddd, D. MMMM').toString();
	const date = format[0].toUpperCase() + format.slice(1);

	return (
		<Container>
			<Heading headerText={date}>
				{<Carousel
					data={testData.data}
				/>}
			</Heading>
			
			<Body>
				<ScheduleChanges />

				<HomeSwitchView
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{ attended: 200, missed: 50, notExcused: 10 }} />, <HomeNewGrades />]}
				/>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({});