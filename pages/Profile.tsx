import React, { useRef, useMemo, useCallback } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Heading from '../components/general/Heading';
import Body from '../components/general/Body';
import Container from '../components/general/Container';
import ProfileBox from '../components/profile/ProfileBox';
import ProfileInfo from '../components/profile/ProfileInfo';
import { Colors } from '../declarations/colors';
import ApiRequest from '../tools/ApiRequest';

export default function Profile() {
	const [data, setData] = useState<any>(require('../test-data/profile.json'));
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	const [info, setInfo] = useState<any>();
	const [groups, setGroups] = useState<any>();

	async function getProfileInfo() {		
		ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/user',
			setData, setLoaded, setError
		});
			
		setInfo([
			{ key: 'Jméno', value: `${data.name} ${data.surname}` },
			{ key: 'E-mail', value: data.email },
			{ key: 'Telefoní číslo', value: data.phone, editable: true }
		]);

		setGroups([
			{ key: 'Skupiny', value: '1 / p / r' },
			{ key: 'Volitelný předmět', value: 'PW1' },
			{ key: 'Projekt', value: 'P17' }
		]);
	}

	useEffect(() => {
		getProfileInfo();
	}, []);
	
	/*const [editMode, setEditMode] = useState(false);

	function Edit() {
		return (
			<TouchableOpacity style={styles.edit} activeOpacity={0.7} onPress={() => setEditMode(!editMode)}>
				<Text style={styles.editText}>{editMode ? 'Uložit' : 'Upravit'}</Text>
				
				{editMode ?
					<Ionicons name='checkmark-circle' size={15} color='white' style={styles.editIcon} /> :
					<Ionicons name='create' size={15} color='white' style={styles.editIcon} /> }
			</TouchableOpacity>
		);
	}*/

	return (
		<Container>
			<Heading title='Profil' headerComponent={<Logout />} >
				{loaded &&
					<ProfileBox firstName={data.name} lastName={data.surname} class={data.groups[0].name} />}
			</Heading>

			<Body>
				<View style={styles.section}>
					<View style={styles.header}>
						<View style={styles.headerBox}>
							<Text style={styles.title}>Účet</Text>
							<ActivityIndicator style={styles.loading} animating={!loaded} />
						</View>

						{/*<Edit />*/}
					</View>

					{loaded && <ProfileInfo data={info} /*edit={editMode}*/ />}
				</View>

				<View style={styles.section}>
					<View style={styles.headerBox}>
						<Text style={styles.title}>Rozdělení</Text>
						<ActivityIndicator style={styles.loading} animating={!loaded} />
					</View>
					
					{loaded && <ProfileInfo data={groups} />}
				</View>
			</Body>
		</Container>
	);
}

function Logout() {
	return (
		<TouchableOpacity style={styles.logout} activeOpacity={0.7} onPress={logout}>
			<Text style={styles.logoutText}>Odhlásit se</Text>
		</TouchableOpacity>
	);
}

function logout() {

}

const styles = StyleSheet.create({
	title: {
		color: Colors.PrimaryTextColor,
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
	},
	logout: {
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5
	},
	logoutText: {
		fontSize: 17,
		color: Colors.PrimaryTextColor,
		fontWeight: '500'
	},
	logoutIcon: {
		opacity: 0.6,
		marginLeft: 5
	},
	headerBox: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	loading: {
		marginLeft: 10
	}
});