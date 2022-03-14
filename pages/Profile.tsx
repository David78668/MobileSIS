import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Heading from '../components/Heading';
import HomeSwitchView from '../components/HomeSwitchView';
import ProfileBox from '../components/ProfileBox';

export default function Profile() {
	return (
		<View style={styles.container}>
			<Heading headerText='Profil' iconName='settings-sharp' style={styles.headerContainer}>
				<ProfileBox
					FirstName='Jakub'
					LastName='Klima'
				/>
			</Heading>
			<View style={styles.switchHolder}>
				<HomeSwitchView />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 22,
	},
	switchHolder: {
		marginTop: 23
	}
});