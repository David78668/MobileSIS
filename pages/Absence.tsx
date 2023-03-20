import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Container from '../components/Container';
import HomeAbsence from '../components/HomeAbsence';
import Heading from '../components/Heading';

export default function Absence() {
	return (
		<Container>
			<Heading headerText='Absence'/>
			<HomeAbsence/>
		</Container>
	);
}

const styles = StyleSheet.create({
	headerText: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 15,
	},
	profileContainer: {
		maxHeight: '13%',
		minWidth: '100%',
		backgroundColor: 'red',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		width: '88%',
	},
});

