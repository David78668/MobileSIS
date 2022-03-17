import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Heading from '../components/Heading';
import Container from '../components/Container';
import HomeSwitchView from '../components/HomeSwitchView';
import ProfileBox from '../components/ProfileBox';

export default function Profile() {
	return (
		<Container>
			<Heading headerText='Profil' iconName='settings-sharp' style={styles.headerContainer}>
				<ProfileBox
					FirstName='Jakub'
					LastName='Klima'
				/>
			</Heading>
			<View style={styles.switchHolder}>
				<HomeSwitchView />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({

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