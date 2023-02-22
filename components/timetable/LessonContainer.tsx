import { getItemAsync } from 'expo-secure-store';
import React from 'react';
import {View, StyleSheet} from 'react-native'
import Lesson from './Lesson';
import GetColors from '../../declarations/colors';
import { useTheme } from '../../context/ThemeProvider';

export interface LessonContainerProps {
	items: Array<any>,
	delayBefore: number
}

export default function LessonContainer(props: LessonContainerProps) {
	const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
	console.log(props.items.length);
	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			flexWrap: 'nowrap',
			flex: 1,
		}
	});
	return (
		<View style = {[styles.container, {marginTop: props.delayBefore}]}>
			{props.items.map((item)=>{
				return(
					<Lesson
						item={item}
					/>
				)
			})}
		</View>
	)
}