import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	const data = [
		{
			"Hours": 5,
			"DayName": "17. Po",
			"From": "7:50",
			"To": "12:30"
		},
		{
			"Hours": 8,
			"DayName": "18. Ut",
			"From": "7:50",
			"To": "15:30"
		},
		{
			"Hours": 7,
			"DayName": "19. St",
			"From": "7:50",
			"To": "14:30"
		},
		{
			"Hours": 6,
			"DayName": "20. Čt",
			"From": "8:50",
			"To": "14:30"
		},
		{
			"Hours": 5,
			"DayName": "21. Pá",
			"From": "7:50",
			"To": "12:30"
		},
	]
	return (
		<View style={styles.container}>
			{data.map((item) => (
				<View style={styles.column}>
					<Text style={styles.lessonsText}>{item.DayName}</Text>
					<View style={{ height: item.Hours * 12, width: 50, backgroundColor: "white", borderRadius: 10, opacity: 0.8 }}></View>
					<Text style={styles.lessonsText}>{item.From}</Text>
					<Text style={styles.lessonsText}>{item.To}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	column: {
		padding: 5
	},
	lessonsText: {
		textAlign: 'center',
		color: "white",
		opacity: 0.8
	}
});