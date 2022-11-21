import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import Body from '../components/general/Body';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Grade from '../components/grades/Grade';
import { userid, bareer, getValueFor} from "../components/Token";
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

/*
	TODO:
		Make proper short month parsing from date
 */

export default function Grades() {
	const [data, setData] = useState<any>();
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
	  }, []) 
	return (
		<Container>
			<Heading headerText='Známky' />
			<Body style={styles.body}>
			{ loaded == true  ? 
				 <View style={{paddingHorizontal:'6%', paddingTop: 30}}>
					{data.map((item:any)=>{
						return(
							<Grade {...item}/>
						);	
					})}
				</View> : <View></View>
				
			}
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	body: {
		
	}
})