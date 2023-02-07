import React from 'react';
import ApiRequest from '../tools/ApiRequest';
import { LayoutAnimation, Platform, UIManager, StyleSheet, View, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import { userid, bareer } from "../components/Token";
import LessonContainer from '../components/timetable/LessonContainer';
import Body from '../components/general/Body';
import moment from 'moment';
import DayBlock from '../components/timetable/DayBlock';
import { Colors } from '../declarations/colors';

function GetWeekStart(date: Date) {
	let result = moment(date).subtract(date.getDay() - 1, "days").format("YYYY/MM/DD");
	return result;
}

function GetSelectedDay(date: string) {
	var output = moment(date).format("dddd");
	output = output[0].toUpperCase() + output.substring(1, output.length)
	return output;
}

function FilterData(data: Array<any>) {
	var result: any[][] = [];
	for (var i = 0; i < data.length; i++) {
		var timeblock: any[] = [];
		timeblock.push(data[i]);
		while (i < data.length - 1) {
			var dateA = moment(data[i].date).valueOf();
			var dateAEnd = moment(data[i].date).valueOf() + 2700000;
			var dateB = moment(data[i + 1].date).valueOf();
			if (i != data.length - 1 && (dateB == dateA) || (dateB > dateA && dateB < dateAEnd)) {
				console.log(result.length - 1);
				timeblock.push(data[i + 1]);
				i++;
			}
			else {
				break;
			}
		}
		var output = [];
		if (timeblock.length > 1) {
			var activeClass;
			var setActiveClass = false;
			var originalClass;
			var setOgClass = false;
			for (var k = 0; k < timeblock.length; k++) {
				console.log(timeblock[k])
				if (!setOgClass && timeblock[k].static) {
					originalClass = timeblock[k];
					setOgClass = true;
				}
				if (!setActiveClass && timeblock[k].active) {
					activeClass = timeblock[k]
					setActiveClass = true;
				}
			}
			output.push(originalClass);
			output.push(activeClass);
			result.push(output);
		}
		else {
			result.push(timeblock);
		}
	}
	console.log(result);
	return result;
}




if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Schedule() {
	console.log("Welcome to the schedule");
	const testdata = require("../assets/testData.json");
	const [data, setData] = React.useState<any>();
	const [loaded, setLoaded] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [isDaySelect, setIsDaySelect] = React.useState(true);
	const filteredData = FilterData(testdata[page].timetable);
	React.useEffect(() => {
		ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/timetable/bydate/range?userId=' + userid + `&date=${GetWeekStart(new Date())}` + '&days=5',
			setData: setData,
			setLoaded: setLoaded,
			setError: setError,
		})
	});

	return (
		<Container>
			<Heading
				title="Rozvrh"
				headerComponent={<Text style={styles.header}>{GetSelectedDay(testdata[page].date)}</Text>}
				Pressable={{
					delayPressIn: 0,
					onPressIn(event) {
						LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
						setIsDaySelect(!isDaySelect);
					},
				}}>

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
							);
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
				{
					filteredData.map((item: any, index: number) => {
						let delay = 15
						if (index > 0 && filteredData[index - 1] != undefined) {
							let lessonBefore = filteredData[index - 1][0].date;
							delay = moment(filteredData[index][0].date).diff(moment(lessonBefore), "minutes") - 45;
						}
						return (
							<LessonContainer
								items={item}
								delayBefore={delay}
							/>)
					})
				}
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
		paddingHorizontal: 20
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
	},
	header: {
		fontSize: 17,
		color: Colors.PrimaryTextColor,
		fontWeight: '500',
		padding: 5
	}
});