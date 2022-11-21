import React, { useState } from 'react'
import HomeAbsence from './HomeAbsence';
import HomeNewGrades from './HomeNewGrades';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const viewHeight = windowHeight * 0.23;

interface HomeSwitchViewProps {
	headerTexts: Array<string>,
	components: Array<React.ReactNode>,
}

export default function HomeSwitchView(props: HomeSwitchViewProps) {
	const [currentView, setView] = useState(0);
	return (
		<View style={styles.container}>
			<View style={styles.switches}>
				{props.headerTexts.map((item, index)=>{
					return(
						<TouchableWithoutFeedback onPress={() => setView(index)}><Text style={[styles.text, currentView == index ? styles.textActive : styles.textDisabled]}>{item}</Text></TouchableWithoutFeedback>
					);
				})}
			</View>
			{props.components[currentView]}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	switches: {
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	textActive: {
		color: '#050505',
		borderBottomWidth: 2,
	},
	textDisabled: {
		color: '#C7C7CC',
	},
	text: {
		marginRight: windowWidth * 0.043,
		fontWeight: 'bold',
		fontSize: 18,
	}
});

