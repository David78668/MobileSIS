import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import Body from '../components/general/Body';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Grade from '../components/grades/Grade';
import { userid, bareer, getValueFor} from "../components/Token";
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Colors } from '../declarations/colors';
import { Ionicons } from '@expo/vector-icons';

export default function Grades() {
	/*const [data, setData] = useState<any>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	let GetGrades = async () => {
		fetch('https://api.sis.kyberna.cz/api/classification/current/marks', { method: 'get', headers: new Headers({ 'Authorization': 'Bearer '+ await SecureStore.getItemAsync("kybernaAccessToken") }) })
		  .then(res => {return(res.json())})
		  .then(
			(result) => {
				//console.log(result);
				setData(result);
				setLoaded(true);
				//alert(result[0].name);
			},
			
			(error) => {
				//alert(error);
				setError(true);
				setLoaded(true);
			}
		)
	}
	
	useEffect(() => {
		GetGrades();
	}, []);*/

	const testData = require('../assets/gradeTest.json');
	const [mode, setMode] = useState(true);

	function separator() {
		return <View style={{ marginTop: 10 }}></View>;
	}

	function renderGrade({ item }: any) {
		return <Grade {...item} />;
	}
	
	return (
		<Container>
			<Heading title='Známky' />

			<Body>
				{/*loaded == true  ? 
					<View style={{paddingHorizontal:'6%', paddingTop: 30}}>
						{data.map((item:any)=>{
							return(
								<Grade {...item} />
							);	
						})}
					</View> : null*/}
				<View style={styles.gradesBox}>
					<Text style={styles.title}>Předměty</Text>
		
					<FlatList
						data={testData}
						renderItem={renderGrade}
						ItemSeparatorComponent={separator}
						keyExtractor={(item, index) => index.toString()}
						style={styles.grades}
					/>
				</View>
			</Body>
		</Container>

	);
}

const styles = StyleSheet.create({
	gradesBox: {
		padding: 20
	},
	grades: {
		overflow: 'visible',
		marginTop: 20
	},
	title: {
		fontWeight: 'bold',
		color: Colors.SecondaryTextColor,
		fontSize: 18,
		opacity: 0.8
	}
});