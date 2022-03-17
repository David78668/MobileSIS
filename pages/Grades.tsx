import Heading from '../components/Heading';
import Container from '../components/Container';
import React from 'react';
import { View, } from 'react-native';
import Grade from '../components/Grade';

export default function App() {
	const data = require("../data1.json");
	return (
		<Container>
			<Heading headerText='Známky' />
			<View style={{ alignItems: 'center' }}>
				{Grade(data.Subjects[0])}
				{Grade(data.Subjects[1])}
			</View>
		</Container>
	);
}