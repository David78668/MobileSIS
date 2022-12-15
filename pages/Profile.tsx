import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Heading from '../components/general/Heading';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import ProfileBox from '../components/profile/ProfileBox';
import ProfileInfo from '../components/profile/ProfileInfo';
import * as SecureStore from 'expo-secure-store';
import FetchData from '../tools/ApiRequest';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
	const [data, setData] = useState<any>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	const [Absence, setAbsence] = useState<any>();
	const [AbsenceLoaded, setAbsenceLoaded] = useState(false);
	const [AbsenceError, setAbsenceError] = useState(false);
	/*let GetProfileInfo = async () => {
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
	}*/

	let GetAbsenceInfo = async () => {
		fetch('https://api.sis.kyberna.cz/api/absence/stats', { method: 'get', headers: new Headers({ 'Authorization': 'Bearer '+ await SecureStore.getItemAsync("kybernaAccessToken") }) })
		  .then(res => {return(res.json())})
		  .then(
			(result) => {
				//console.log(result);
				setAbsence(result);
				//alert(result[0].name);
			},
			
			(error) => {
				//alert(error);
				setAbsenceError(true);
				setAbsenceLoaded(true);
			}
		)
	}

	useEffect(() => {
		//GetProfileInfo();
		FetchData({
			requestUrl: "https://api.sis.kyberna.cz/api/user",
			setDataFunction: setData,
			setLoadedFunction: setLoaded,
			setErrorFunction: setError
		});

		GetAbsenceInfo();
	}, []);

	const informaceData = [{
		key: 'Jméno',
		value: 'Jméno Příjmení'
	}, {
		key: 'E-mail',
		value: 'jmeno.prijmeni@ssakhk.cz'
	}, {
		key: 'Telefoní číslo',
		value: '123 456 789',
		editable: true
	}];
	
	const rozdeleniData = [{
		key: 'Skupiny',
		value: '1 / p / r'
	}, {
		key: 'Volitelný předmět',
		value: 'PW1'
	}, {
		key: 'Projekt',
		value: 'P17'
	}];
	
	const [editMode, setEditMode] = useState(false);

	function Edit() {
		return (
			<TouchableOpacity style={styles.edit} activeOpacity={0.7} onPress={() => setEditMode(!editMode)}>
				<Text style={styles.editText}>{editMode ? 'Uložit' : 'Upravit'}</Text>
				
				{editMode ?
					<Ionicons name='checkmark-circle' size={15} color='white' style={styles.editIcon} /> :
					<Ionicons name='create' size={15} color='white' style={styles.editIcon} /> }
			</TouchableOpacity>
		);
	}
	
	return (
		<Container>
			<Heading title='Profil'>
				{error == false && loaded == true &&
					<ProfileBox firstName={data.name} lastName={data.surname} class={data.groups[0].name} />}
			</Heading>

			<Body>
				<View style={styles.section}>
					<View style={styles.header}>
						<Text style={styles.title}>Informace</Text>
						<Edit />
					</View>

					<ProfileInfo data={informaceData} edit={editMode} />
				</View>

				<View style={styles.section}>
					<Text style={styles.title}>Rozdělení</Text>
					<ProfileInfo data={rozdeleniData} />
				</View>
			</Body>
		</Container>
	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginLeft: 20,
		opacity: 0.8
	},
	section: {
		marginVertical: 20
	},
	edit: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 20,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
		backgroundColor: 'cornflowerblue'
	},
	editText: {
		color: 'white',
		fontWeight: 'bold'
	},
	editIcon: {
		marginLeft: 5,
		opacity: 0.8
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});