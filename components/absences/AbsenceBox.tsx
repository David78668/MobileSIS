import React from 'react'
import { StyleSheet, Text, View,} from 'react-native';

export default function AbsenceBox() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.value}>Datum</Text>
				<Text>17. listopad</Text>
			</View>

			<View style={styles.wrapper}>
				<Text style={styles.value}>Rozmezí</Text>
				<Text>18:00-19:00</Text>
			</View>

			<View style={styles.percentWrapper}>
				<Text style={styles.value}>Absence</Text>
				<Text>6.9%</Text>
			</View>
		</View>
	);
};

 const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		backgroundColor: '#fff',
		justifyContent:'space-around',
		margin: 20,
		borderRadius: 10
	},
	wrapper:{
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingTop: '2%',
		paddingBottom: '2%'
	},
	percentWrapper:{
		flexDirection:'column',
		paddingTop:'2%',
		paddingBottom:'2%'
	},
	value: {
		fontWeight:'bold'
	}
});