import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomTabNavigation from './components/CustomNavbar';

export default function App() {
	return (
		<NavigationContainer>
			<CustomTabNavigation />
		</NavigationContainer>
	);
}
