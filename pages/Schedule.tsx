import React from 'react';
import FetchData from '../tools/ApiRequest';
import { LayoutAnimation, Platform, UIManager, StyleSheet, View, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import { userid, bareer } from "../components/Token";
import Lesson from '../components/timetable/Lesson';
import Body from '../components/general/Body';
import moment from 'moment';
import DayBlock from '../components/timetable/DayBlock';
import { Colors } from '../declarations/colors';

function GetWeekStart(date: Date) {
	let result = moment(date).subtract(date.getDay() - 1, "days").format("YYYY/MM/DD");
	return result;
}

function GetSelectedDay(date: string) {
	var output = moment(date).format("dddd Do");
	output = output[0].toUpperCase() + output.substring(1, output.length)
	return output;
}

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Schedule() {
	const testdata = require("../assets/testData.json");
	const [data, setData] = React.useState<any>();
	const [loaded, setLoaded] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [isDaySelect, setIsDaySelect] = React.useState(true);
	React.useEffect(() => {
		FetchData({
			requestUrl: 'https://api.sis.kyberna.cz/api/timetable/bydate/range?userId=' + userid + `&date=${GetWeekStart(new Date())}` + '&days=5',
			setDataFunction: setData,
			setLoadedFunction: setLoaded,
			setErrorFunction: setError,
		})
	});

	return (
		<Container>
			<Heading
				title="Rozvrh"
				subtitle={GetSelectedDay(testdata[page].date)}
				Pressable = {{
					delayPressIn: 0,
					onPress(event) {
						LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
						setIsDaySelect(!isDaySelect);
					},
				}}
			>
				<View style={styles.HeadingContainer}>
					{isDaySelect &&
						testdata.map((item: any, index: number) => {
							return (
								<DayBlock
									item={item}
									index={index}
									page={page}
									onPress={(setPage)}
								/>
							)
						})
					}
				</View>
			</Heading>
				<Body
					ScrollView={{
						onTouchStart(event) {
							LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
							setIsDaySelect(false);
						},
					}}
				>
					{testdata[page].timetable.map((item: any, index: number) => {
						let delay = 15
						if(index > 0){
							let lessonBefore = testdata[page].timetable[index - 1].date;
							delay = moment(item.date).diff(moment(lessonBefore), "minutes") - 45
						}
						return( <Lesson
						item={item}
						delayBefore={delay}
						/>)
					})}
				</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	image: {
		justifyContent: 'center',
	},
	HeadText: {
		padding: 10,
		color: "white",
		fontWeight: "700",
		fontSize: 30,
	},
	HeadingContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	column: {
		padding: 5
	},
	currentDayText: {
		color: Colors.PrimaryTextColor,
		fontSize: 25,
		fontWeight: 'bold',
	},
	lessonsText: {
		textAlign: 'center',
		maxWidth: 50,
		color: "white",
		opacity: 0.8,
		fontWeight: '600'
	},
	headingTextContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
	}
});