import React from 'react';
import { StatusBar,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomTabNavigation from './components/CustomNavbar';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle='light-content' />
			
			<CustomTabNavigation />
		</NavigationContainer>
	);
}
