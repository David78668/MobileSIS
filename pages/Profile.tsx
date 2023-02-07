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
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }: any) {
	const [data, setData] = useState<any>(require('../test-data/profile.json'));
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	const [dataSubjects, setDataSubjects] = useState<any>();
	const [loadedSubjects, setLoadedSubjects] = useState(false);
	const [errorSubjects, setErrorSubjects] = useState(false);

	const [info, setInfo] = useState<any>();
	const [groups, setGroups] = useState<any>();

	async function getProfileInfo() {		
		ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/user',
			setData, setLoaded, setError
		});

		data && ApiRequest({
			requestUrl: `https://api.sis.kyberna.cz/api/user/subjects/current?userId=${data.id}`,
			setData: setDataSubjects,
			setLoaded: setLoadedSubjects,
			setError: setErrorSubjects
		});
			
		setInfo([
			{ key: 'Jméno', value: `${data.name} ${data.surname}` },
			{ key: 'E-mail', value: data.email },
			//{ key: 'Telefoní číslo', value: data.phone, editable: true }
		]);

		const groups = findGroups(dataSubjects);
		
		setGroups([
			{ key: 'Skupiny', value: groups.groups.join(', ') },
			{ key: 'Volitelné předměty', value: groups.voluntary.join(', ') },
			{ key: 'Projekt', value: groups.project.join(', ') }
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

	function findGroups(data: any) {
		var groups: string[] = [];

		data.forEach((e: any) => {
			var group = e.groups[0].name;
			if (!groups.includes(group)) groups.push(group);
		});

		var project = /P\d{1,2}/;
		return {
			groups: groups.filter(e => e.length == 1),
			voluntary: groups.filter(e => e.length == 3 && !project.test(e)),
			project: groups.filter(e => project.test(e)).map(e => `Projekt ${e.substring(1)}`)
		};
	}

	function Settings() {
		return (
			<TouchableOpacity style={styles.settings}
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Settings')}>
				
				<Text style={styles.settingsText}>Nastavení</Text>
			</TouchableOpacity>
		);
	}
	
	return (
		<Container>
			<Heading title='Profil' headerComponent={<Settings />} >
				{loaded &&
					<ProfileBox
						firstName={data.name}
						lastName={data.surname}
						class={data.groups[0].name} />}
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

				<TouchableOpacity style={styles.logout}
					activeOpacity={0.7}
					onPress={logout}>
					
					<Ionicons name='log-out-outline' color={Colors.TertiaryBackgroundColor} size={20} style={styles.logoutIcon} />
					<Text style={styles.logoutText}>Odhlásit se</Text>
				</TouchableOpacity>
			</Body>
		</Container>
	);
}

function logout() {
	// asi by to chtelo dodelat
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
	},
	settings: {
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5
	},
	settingsText: {
		fontSize: 17,
		color: Colors.PrimaryTextColor,
		fontWeight: '500'
	},
	logoutIcon: {
		marginRight: 5
	},
	headerBox: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	loading: {
		marginLeft: 10
	},
	logout: {
		backgroundColor: '#E9671E33',
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginHorizontal: 20,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	logoutText: {
		fontSize: 17,
		color: Colors.TertiaryBackgroundColor,
		fontWeight: 'bold'
	}
});