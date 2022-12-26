import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomTabNavigation from './components/CustomNavbar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
	return (
		<BottomSheetModalProvider>
			<NavigationContainer>
				<StatusBar barStyle='light-content' />
				
				<CustomTabNavigation />
			</NavigationContainer>
		</BottomSheetModalProvider>
	);
}
