import React, { useRef } from 'react';
import CustomPaging from './Paging';
import { StyleSheet} from "react-native";
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import Heading from './Heading';
import data from '../data.json';

let schedule = data.Days[0].Lessons;
const date = new Date();

function getCurrentClass(duration: number, data: any) {
	for (let i = 0; i < data.length; i++) {
		let splitTime = data[i].StartTime.split(':');
		let hours = Number(splitTime[0]);
		let minutes = Number(splitTime[1]);
		let startTime = hours * 60 + minutes;
		let endTime = startTime + duration;
		let currentTime = date.getHours() * 60 + date.getMinutes();
		if (currentTime < startTime) {
			return i;
		}
	}
	return 0;
}

const CarouselCards = () => {
	let [currentIndex, setIndex] = React.useState(getCurrentClass(45, schedule));
	const settings = {
		onSnapToItem: (index: any) => setIndex(index),
	};
	const days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota",]
	const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
	const c = useRef(null);
	const index = getCurrentClass(45, schedule);
	return (
		<Heading headerText={`${days[date.getDay()]}, ${date.getDate()}. ${months[date.getMonth()]}`}
			style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Carousel
				layout="stack"
				layoutCardOffset={0}
				ref={c}
				data={schedule}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				inactiveSlideShift={0}
				firstItem={currentIndex}
				containerCustomStyle={styles.CarouselContainer}
				useScrollView={true}
				{...settings}
			/>
			<CustomPaging data={schedule} activeSlide={currentIndex} />
		</Heading>
	)
}

const styles = StyleSheet.create({
	CarouselContainer: {
		flexGrow: 0,
	},
});

export default CarouselCards;