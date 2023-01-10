import { getItemAsync } from 'expo-secure-store';
import React from 'react';
import {View, StyleSheet} from 'react-native'
import Lesson from './Lesson';

export interface LessonContainerProps {
	items: Array<any>,
	delayBefore: number
}

export default function LessonContainer(props: LessonContainerProps) {
		console.log(props.items.length);
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

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		flex: 1,
	}
});