import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Heading from '../components/Heading';
import Container from '../components/Container';
import { userid, bareer } from "../components/Token";

export default function Schedule() {
	const testdata = require("../testData.json");
	const data: any = async () => {
		let response = await fetch(
			'https://api.sis.kyberna.cz/api/timetable/bydate/range?userId=' + userid + '&date=2022/02/23&days=5', { method: 'get', headers: new Headers({ 'Authorization': bareer.toString() }) }
		);
		let json = await response.json();
		return json;
	}
	const [page, setPage] = React.useState(0);
	return (
		<Container style={styles.container}>
			<Heading headerText='Rozvrh'>
				{/*
           		{data.map((item:any,index:number) => 
              	<TouchableOpacity onPress={()=>{setPage(index)}} style={styles.column}>
                <Text style={styles.lessonsText}>{new Date(item.date).getDate()}. den</Text>
                  {page == index?<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.8}}></View>:<View style={{height:item.timetable.length*12,width:50,backgroundColor:"white",borderRadius:10,opacity:0.5}}></View>}
                  <Text style={styles.lessonsText}>{item.timetable[0].date}</Text>
                  <Text style={styles.lessonsText}>{(item.timetable[item.timetable.length-1].date)}</Text>
              	</TouchableOpacity>
         		)}*/}
			</Heading>
			<View style={{ borderRadius: 15, overflow: 'hidden', margin: 20, flex: 1 }}>
				<ScrollView style={{ flex: 1, backgroundColor: 'red' }}>
					{/*
        			{data[page].timetable.map((item:any)=>(
        			<View>
         			{LessonView(item)}
        			</View>
        			))}*/}
				</ScrollView>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e5e5e5',
	},
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