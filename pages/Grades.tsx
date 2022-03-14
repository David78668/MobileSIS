import Heading from '../components/Heading';
import React from 'react';
import { View, } from 'react-native';
import Grade from '../components/Grade';

export default function App() {
	const data = require("../data1.json");
	return (
		<View>
			<Heading headerText='Známky' />
			<View style={{ alignItems: 'center' }}>
				{Grade(data.Subjects[0])}
				{Grade(data.Subjects[1])}
			</View>
		</View>
	);
}