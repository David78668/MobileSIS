import React from "react";
import { Colors } from "../../declarations/colors";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface ProfileBoxProps {
	firstName: string,
	lastName: string,
	class?: string,
}

export default function ProfileBox(props: ProfileBoxProps) {
	return (
		<View style={styles.profileBox}>
			<View>
				<Text style={styles.studentName}>{props.firstName} {props.lastName}</Text>
				<Text style={styles.studentInfo}>Třída {props.class}</Text>
			</View>

			<View style={styles.profilePicture}>
				<Text style={styles.profilePictureText}>{props.firstName[0]}{props.lastName[0]}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	profileBox: {
		backgroundColor: Colors.PrimaryBackgroundColor,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderRadius: 20,
		width: Dimensions.get('window').width - 40,
		alignSelf: 'center',
		paddingVertical: 15,
		paddingHorizontal: 20
	},
	profilePicture: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: Colors.TertiaryBackgroundColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	profilePictureText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.PrimaryTextColor
	},
	studentName: {
		fontSize: 18,
		fontWeight: 'bold',
		opacity: 0.8,
		color: Colors.SecondaryTextColor,
	},
	logoutText: {
		color: Colors.PrimaryTextColor,
		fontSize: 12
	},
	studentInfo: {
		color: Colors.SecondaryTextColor,
		opacity: 0.6,
		fontWeight: '500'
	},
	logoutButton: {
		backgroundColor: Colors.TertiaryBackgroundColor,
		borderRadius: 10,
		height: 33,
		width: 117,
		alignItems: 'center',
		justifyContent: 'center'
	},
});