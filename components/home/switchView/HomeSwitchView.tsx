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
						<TouchableWithoutFeedback onPress={() => setView(index)}>
							<Text style={[styles.text, currentView == index ? styles.textActive : styles.textDisabled]}>{item}</Text>
						</TouchableWithoutFeedback>
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
		borderBottomWidth: 2,
	},
	textDisabled: {
		opacity: 0.3,
		fontWeight: 'regular',
	},
	text: {
		color: 'black',
		marginRight: 20,
		fontWeight: 'bold',
		fontSize: 18,
	}
});