import Heading from '../components/general/Heading';
import Container from '../components/general/Container';
import Body from '../components/general/Body';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import Grade from '../components/grades/Grade';
import { userid, bareer, getValueFor} from "../components/Token";
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Colors } from '../declarations/colors';
import { animation } from '../declarations/animation';

export default function Grades() {
	const [data, setData] = useState<any>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	async function getGrades() {
		fetch('https://api.sis.kyberna.cz/api/classification/current/marks', {
			method: 'get',
			headers: new Headers({ 'Authorization': 'Bearer ' + await SecureStore.getItemAsync("kybernaAccessToken") })
			//headers: new Headers({ 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkJna1Ntdks3SHNFWGhhNi1VLU1hQUEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzE1NDQwNjksImV4cCI6MTY3MTU0NzY2OSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmt5YmVybmEuY3oiLCJhdWQiOiJhcGkuc2lzLmt5YmVybmEuY3oiLCJjbGllbnRfaWQiOiJtdmMiLCJzdWIiOiIyMDIwIiwiYXV0aF90aW1lIjoxNjcxNTQ0MDY4LCJpZHAiOiJLeWJlcm5hIiwibmFtZSI6Ik9za2FyIFBldHIiLCJ1c2VySWQiOiIxMTU2NiIsInJvbGUiOiJTdHVkZW50Iiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInJvbGVzIiwiYXBpLnNpcy5reWJlcm5hLmN6Il0sImFtciI6WyJleHRlcm5hbCJdfQ.1ZFvhL5m1nr7gwBPm2xwcsDhc_G1I6HrKikG60lwiNuakDoE0xAq-A2zU5KYGCfenhXk1r1Ei9FciGnOcvQK3up821HWikhiquRvRLvebNx8trVo-aQI6_nIz8UocEt3QG9ikWVILFs0ZHe5givoJ4T6qEkDtY83Mj7JRcOXgTtyxmlYUclsM2JAG6n0hIJN5gHIu5SabaoYWLa8XmsvNNq7O1eXz0Qw1bAJqqkvKOlgRP0wk_zys1LSWwS4rKM1xe_N-narW6ZYfhHoTZ23tYGurB3PZdLlHrwASgXfurOcOIjG5aNWAd8hn2TMo9IMdfVyNOmaYbFKALAADNE0-w' })
		})
			.then(res => res.json())
			.then((result) => {
				setData(result);
				setLoaded(true);
				
				animation();
			}, (error) => {
				setError(true);
				setLoaded(true);
			});
	}
	
	useEffect(() => {
		getGrades();
	}, []);

	const testData = require('../assets/gradeTest.json');

	function separator() {
		return <View style={{ marginTop: 10 }}></View>;
	}

	function renderGrade({ item }: any) {
		return <Grade {...item} />;
	}
	
	return (
		<Container>
			<Heading title='Známky' />

			<Body onRefresh={getGrades}>
				<View style={styles.gradesBox}>
					<View style={styles.header}>
						<Text style={styles.title}>Předměty</Text>
						<ActivityIndicator style={styles.loading} animating={!loaded} />
					</View>

					{loaded ?
						<FlatList
							data={data}
							renderItem={renderGrade}
							ItemSeparatorComponent={separator}
							keyExtractor={(item, index) => index.toString()}
							style={styles.grades}
						/> : null}
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
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	loading: {
		marginLeft: 10
	}
});