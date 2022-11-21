import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Heading from '../components/general/Heading';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import HomeNewGrades from '../components/home/switchView/HomeNewGrades';
import ProfileBox from '../components/profile/ProfileBox';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
	const [data, setData] = useState<any>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	let GetProfileInfo = async () => {
		fetch('https://api.sis.kyberna.cz/api/user', { method: 'get', headers: new Headers({ 'Authorization': 'Bearer '+ await SecureStore.getItemAsync("kybernaAccessToken") }) })
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
		GetProfileInfo();
	  }, []) 
	return (
		<Container>
			<Heading headerText='Profil' style={styles.headerContainer} headerComponent={<Settings/>}>
				{error == false && loaded == true && 
					<ProfileBox
					FirstName={data.name}
					LastName={data.surname}
					Class={data.groups[0].name}
				/>
				}
				
			</Heading>
			<Body>
			<HomeSwitchView 
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{attended:400, missed:32, notExcused: 5}}/>, <HomeNewGrades/>]}
				/>
			</Body>
		</Container>
	);
}

function Settings() {
	return(
		<TouchableWithoutFeedback onPress={SettingsOnPress}>
			<View style={styles.settingIconContainer}>
				<Ionicons name='settings-sharp' size={30} color={'white'}/>
			</View>
		</TouchableWithoutFeedback>
	);
}

function SettingsOnPress() {
	
}

const styles = StyleSheet.create({

	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 22,
	},
	switchHolder: {
		
	},
	settingIconContainer: {
		justifyContent: 'flex-end',
		paddingHorizontal: 22,
	}

});