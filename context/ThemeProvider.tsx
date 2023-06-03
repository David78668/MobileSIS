import { PropsWithChildren, useContext, createContext, useState } from "react";
import { useLocalStorage } from "../components/hooks/UseSecureStorage";
import { KEYS } from "../declarations/keys";

export interface IStateContextValues<T> {
	value: T,
	setValue: (value: T) => void,
}

const defaultValues: IStateContextValues<boolean> = {
	value: false,
	setValue: () => {},
}

const ThemeContext = createContext<IStateContextValues<boolean>>(defaultValues);
export function ThemeProvider(props: PropsWithChildren){
	const [darkMode, setDarkMode] = useLocalStorage(KEYS.THEME, false );

	return(
		<ThemeContext.Provider value={{
			value: darkMode,
			setValue: setDarkMode
		}}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export function useTheme(){
	return useContext(ThemeContext);
}