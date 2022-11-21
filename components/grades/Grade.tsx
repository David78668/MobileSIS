import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import React from 'react';
import { GradeProps, GradeData } from '../../declarations/types';

//TODO
//Tidy up grade conversion from string to int using a dictionary
//Solve longer grade comments dissapearing
const ShortMonths = ['led', 'úno', "bře", "dub", "kvě", "črv", "črn", "srp", "zář", "říj", "lis", "pro"] 

export default function Grade(data: any) {
	const [select, setcheckBoxState] = React.useState(false);
	return (
		<View style={styles.shadow}>
		<TouchableHighlight onPress={() => { select ? setcheckBoxState(false) : setcheckBoxState(true)}}>
			<View style={styles.container}>
				<Ionicons
					color={'white'}
					size={27}
					style={{
						backgroundColor: "#EB7221",
						padding: 5,
						borderRadius: 12,
						marginLeft: 10,
						}} name="calculator-outline"></Ionicons>
				<View style={{ flexDirection: 'column', marginLeft: 20 }}>
					<Text style={{ fontSize: 16, fontWeight: '600' }}>{data.subject.name}</Text>
					<Text>Průměr: {calculateAverage(data.marks)}</Text>
				</View>
				<View style={{ marginLeft: 'auto', flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Text style={{ paddingTop: 30 }}>Známky: {data.marks.length}</Text>
					<Ionicons
						name='chevron-up-outline'
						color="#EB7221"
						size={20}
						style={{
							transform: [{rotate: select ? '0deg' : '180deg'}],
						}}
					>

					</Ionicons>
				</View>
			</View>
		</TouchableHighlight>
			{select && Content(data.marks)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 5,
		backgroundColor: 'white',
	},
	shadow: {
		margin: 3,
		width: '100%',
		borderRadius: 20,
		overflow: 'hidden',
		shadowColor: 'black',
		shadowOffset: { height: 1, width: 5 },
		shadowRadius: 20,
		shadowOpacity: 0.25
	}
});

function Content(data: any) {
		return (
			<View>
				{data.map((item: any) => (
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 1,}}>
						<View style={{ backgroundColor: "#EB7221", height: 55, width: 55, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30, color: 'white' }}>{item.value}</Text></View>
						<View style={{ flexDirection: 'row', height:"100%", flex:1, paddingRight: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'white'}}>
						<Text numberOfLines={1}
							style={{
								marginLeft: 10,
								maxWidth: '50%',
								marginRight: 'auto',
							}}
						>{item.comment}</Text>
						<View style={{ flexDirection: 'column', marginRight: 10 }}>
							<Text style={{ fontSize: 15 }}>{toDate(item.date)}</Text>
							<Text style={{ textAlign: 'right', color: '#EB7221' }}>Váha: {item.weight}</Text>
						</View>
						</View>
					</View>
				))
				}
			</View>
		);
}

function toDate(date: any) {
	var dd = new Date(Date.parse(date));
	//var final = new Date(dd[0], dd[1] - 1, dd[2]);
	return `${dd.getDate()}.${ShortMonths[dd.getMonth()]} ${dd.getFullYear()}`;
}

function calculateAverage(data: any){
	var totalValue = 0;
	var count = 0;
	data.forEach((item:any) => {
			let weight = item.weight;
			
			if(weight != undefined && item.value != undefined && item.value != 's'){
				totalValue += weight * gradeToNumber(item.value);
				count += weight;
			}
			
		
	})
	return((totalValue/count).toFixed(2));
}

function gradeToNumber(text: string){
	if(text[1] == '-')
		return (Number)(text[0]) + 0.5;
	if(text == 'n'){
		return 5;
	}
	if(!Number.isNaN(text))
		return (Number)(text);
	return NaN;
}