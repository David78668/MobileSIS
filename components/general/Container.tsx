import React from 'react';
import { Colors } from '../../declarations/colors';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../App';
import GetColors from '../../declarations/colors';
interface ContainerProps {
	children?: React.ReactNode
}

export default function Container(props:ContainerProps){
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if (context) {
		Colors = GetColors(context?.value);
	}
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.SecondaryBackgroundColor
		}
	});
	return <View style={styles.container}>{props.children}</View>;
}

