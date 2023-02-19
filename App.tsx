import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomTabNavigation from './components/CustomNavbar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export type StateContext<T> = {
	value: T,
	setFunction: React.Dispatch<React.SetStateAction<T>>,
} | null;

export const ThemeContext = React.createContext<StateContext<boolean>>(null);
export default function App() {
	const [darkMode, setDarkmode] = React.useState(false);
	return (
		<ThemeContext.Provider value={{
			value: darkMode,
			setFunction: setDarkmode,
		}}>
			<BottomSheetModalProvider>
				<NavigationContainer>
					<StatusBar barStyle='light-content' />

					<CustomTabNavigation />
				</NavigationContainer>
			</BottomSheetModalProvider>
		</ThemeContext.Provider>
	);
}
