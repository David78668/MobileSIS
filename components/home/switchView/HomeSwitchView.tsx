import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import GetColors from '../../../declarations/colors';
import { useTheme } from '../../../context/ThemeProvider';

interface HomeSwitchViewProps {
	headerTexts: Array<string>,
	components: Array<React.ReactNode>,
}
	
export default function HomeSwitchView(props: HomeSwitchViewProps) {
	const [currentView, setView] = useState(0);
	
	// color mode
	const mode = useTheme();
	const Colors = GetColors(mode.value);
	
	function renderSwitch({ item, index }: any) {
		return (
			<View style={currentView == index ? styles.underline : null}>
				<TouchableOpacity onPress={() => setView(index)} activeOpacity={0.7}>
					<Text style={{ ...styles.text, opacity: currentView == index ? 0.8 : 0.3 }}>{item}</Text>
				</TouchableOpacity>
			</View>
		);
	}

	function separator() {
		return <View style={{ width: 15 }}></View>;
	}

	// styles
	const styles = StyleSheet.create({
		container: {
			marginTop: 20
		},
		switches: {
			flexDirection: 'row',
			paddingHorizontal: 20
		},
		text: {
			color: Colors.SecondaryTextColor,
			fontWeight: 'bold',
			fontSize: 18,
			paddingBottom: 3
		},
		underline: {
			borderBottomWidth: 2,
			borderBottomColor: Colors.TertiaryTextColor,
		}
	});
	
	return (
		<View style={styles.container}>
			<FlatList
				data={props.headerTexts}
				renderItem={renderSwitch}
				ItemSeparatorComponent={separator}
				style={styles.switches}
				scrollEnabled={false}
				horizontal
			/>
			
			{props.components[currentView]}
		</View>
	)
}