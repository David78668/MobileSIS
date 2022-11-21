import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

interface ProfileBoxProps {
	FirstName: string,
	LastName: string,
	Class?: string,
}

export default function ProfileBox(props: ProfileBoxProps) {
	return (
		<View style={styles.profileBox}>
			<View style={styles.profilePicture}>
				<Text style={styles.profilePictureText}>{props.FirstName[0]}{props.LastName[0]}</Text>
			</View>
			<Text style={styles.studentName}>{props.FirstName} {props.LastName}</Text>
			<Text style={styles.studentInfo}>{props.Class}</Text>
			<TouchableOpacity style={styles.logoutButton}>
				<Text style={styles.logoutText}>Odhlásit</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	profileBox: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		width: Dimensions.get('window').width * 0.88,
		height: Dimensions.get('window').height * 0.257 + 44,
		
	},
	profilePicture: {
		height: 60,
		width: 60,
		borderRadius: 50,
		marginBottom: 9,
		backgroundColor: '#E8681E',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profilePictureText: {
		fontSize: 25,
		fontWeight: '800',
		color: 'white',
	},
	studentName: {
		color: '#050505',
		fontSize: 18,
		fontWeight: 'bold',
	},
	logoutText: {
		color: 'white',
		fontSize: 12,
	},
	studentInfo: {
		fontSize: 13,
		marginBottom: 10,
		marginTop: 6,
		color: '#050505',
	},
	logoutButton: {
		backgroundColor: '#E8681E',
		borderRadius: 10,
		height: 33,
		width: 117,
		alignItems: 'center',
		justifyContent: 'center',
	},
});