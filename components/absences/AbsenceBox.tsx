import React from 'react'
import { StyleSheet, Text, View,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AbsenceBox() {

		return (
			<View style={styles.container}>
				<View style={styles.wrapper}>
					<Text style={styles.value}>17.Lis</Text>
					<Text>Datum</Text>
				</View>
				<View style={styles.wrapper}>
					<Text style={styles.value}>18:00-19:00</Text>
					<Text>Čas</Text>
				</View>
				<View style={styles.percentWrapper}>
					<Text style={styles.value}>6.9%</Text>
					<Text>Absence</Text>
				</View>
			</View>
		);
	};

 const styles = StyleSheet.create({
		container: {
			flexDirection:'row',
			backgroundColor: '#fff',
			width:'88.2%',
			justifyContent:'space-evenly',
			borderRadius:10,
			margin:'2%'
		},
		wrapper:{
			flexDirection:'column',
			alignItems:'flex-start',
			paddingTop:'2%',
			paddingBottom:'2%',
		},
		percentWrapper:{
			flexDirection:'column',
			alignItems:'center',
			paddingLeft:'12.5%',
			paddingTop:'2%',
			paddingBottom:'2%',
		},
		value: {
			fontWeight:'bold',
		},
	});