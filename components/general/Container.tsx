import React from 'react';
import { Colors } from '../../declarations/colors';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeProvider';
import GetColors from '../../declarations/colors';
interface ContainerProps {
	children?: React.ReactNode
}

export default function Container(props:ContainerProps){
	const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.SecondaryBackgroundColor
		}
	});
	return <View style={styles.container}>{props.children}</View>;
}

