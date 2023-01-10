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
import ApiRequest from '../tools/ApiRequest';

export default function Grades() {
	const [data, setData] = useState<any>(require('../test-data/grades.json'));
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	async function getGrades() {
		ApiRequest({
			requestUrl: 'https://api.sis.kyberna.cz/api/classification/current/marks',
			setData, setLoaded, setError
		});
	}
	
	useEffect(() => {
		getGrades();
	}, []);

	function separator() {
		return <View style={{ height: 10 }}></View>;
	}

	function renderGrade({ item }: any) {
		return <Grade {...item} />;
	}

	var marks = 0;
	{loaded && data.forEach((e: any) => e.marks.forEach(() => marks++))}
	
	return (
		<Container>
			<Heading title='Známky' headerComponent={<Text style={styles.headerBox}>{marks} známek</Text>} />

			<Body onRefresh={getGrades}>
				<View style={styles.gradesBox}>
					<View style={styles.header}>
						<Text style={styles.title}>Předměty</Text>
						<ActivityIndicator style={styles.loading} animating={!loaded} />
					</View>

					{loaded &&
						<FlatList
							data={data}
							renderItem={renderGrade}
							ItemSeparatorComponent={separator}
							keyExtractor={(item, index) => index.toString()}
							style={styles.grades}
						/>}
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
	},
	headerBox: {
		fontSize: 17,
   		color: Colors.PrimaryTextColor,
		fontWeight: '500',
		padding: 5
	}
});