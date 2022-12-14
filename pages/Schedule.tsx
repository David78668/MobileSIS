import React from 'react';
import FetchData from '../tools/ApiRequest';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import { userid, bareer } from "../components/Token";
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';
import LessonView from '../components/timetable/TimeTableStatus';
import Lesson from '../components/timetable/Lesson';
import Body from '../components/general/Body';
import moment from 'moment';

function GetWeekStart(date: Date){
	let result = moment(date).subtract(date.getDay() - 1, "days").format("YYYY/MM/DD");
	alert(result);
	return result
}
export default function Schedule() {
	//const testdata = require("../testData.json");
	// 'https://api.sis.kyberna.cz/api/timetable/bydate/range?userId=' + userid + '&date=2022/02/23&days=5', { method: 'get', headers: new Headers({ 'Authorization': bareer.toString() }) }
	const [data, setData] = React.useState<any>();
	const [loaded, setLoaded] = React.useState(false);
	const [error, setError] = React.useState(false);
		
	const [page, setPage] = React.useState(0);
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
			<Heading headerText='Rozvrh' style={styles.view}>
				
           		{/*testdata.map((item:any,index:number) =>{
				return(
              	<TouchableOpacity onPress={()=>{setPage(index)}} style={styles.column}>
                <Text style={styles.lessonsText}>{new Date(item.date).getDate()}. den</Text>
                  {page == index?<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.8}}></View>:<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.5}}></View>}
                  <Text style={styles.lessonsText}>{item.timetable[0].date}</Text>
                  <Text style={styles.lessonsText}>{(item.timetable[item.timetable.length-1].date)}</Text>
              	</TouchableOpacity>
				)})*/}
			</Heading>
			<Body>
        		{/*testdata[page].timetable.map((item:any)=> {
					return(
						<Lesson item={item}/>
					)
				}
			)*/}
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
	column: {
		padding: 5
	},
	lessonsText: {
		textAlign: 'center',
		maxWidth: 50,
		color: "white",
		opacity: 0.8,
		fontWeight: '600'
	},
	view: {
		flexDirection: 'row',
	},
});