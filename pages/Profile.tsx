import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Heading from '../components/general/Heading';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import HomeSwitchView from '../components/home/switchView/HomeSwitchView';
import HomeAbsence from '../components/home/switchView/HomeAbsence';
import HomeNewGrades from '../components/home/switchView/HomeNewGrades';
import ProfileBox from '../components/profile/ProfileBox';
import * as SecureStore from 'expo-secure-store';
import FetchData from '../tools/ApiRequest';
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
	const [data, setData] = useState<any>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	const [Absence, setAbsence] = useState<any>();
	const [AbsenceLoaded, setAbsenceLoaded] = useState(false);
	const [AbsenceError, setAbsenceError] = useState(false);
	useEffect(() => {
		//GetProfileInfo();
		FetchData({
			requestUrl: "https://api.sis.kyberna.cz/api/user",
			setDataFunction: setData,
			setLoadedFunction: setLoaded,
			setErrorFunction: setError
		});
		//GetAbsenceInfo();
	  }, []) 
	return (
		<Container>
			<Heading
				headerText='Profil'
				headerComponent={<Settings />} />
			
				{error == false && loaded == true && 
					<ProfileBox
						FirstName={data.name}
						LastName={data.surname}
						Class={data.groups[0].name}
					/>}
				
			<Body>
			{/* {!error && loaded && 
			<HomeSwitchView 
					headerTexts={["Absence", "Nové známky"]}
					components={[<HomeAbsence absence={{attended:Absence.lessons, missed:Absence.missedLessons, notExcused: Absence.unexcusedLessons}}/>, <HomeNewGrades/>]}
				/>
			} */}
			</Body>
		</Container>
	);
}

function Settings() {
	return(
		<TouchableOpacity onPress={SettingsOnPress} activeOpacity={0.7}>
			<Ionicons name='person-circle' size={30} color={'white'} />
		</TouchableOpacity>
	);
}

function SettingsOnPress() {
	
}

const styles = StyleSheet.create({});