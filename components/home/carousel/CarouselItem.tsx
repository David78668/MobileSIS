import React from 'react';
import moment from 'moment';
import {  View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../../App';
import GetColors from '../../../declarations/colors';

const width = Dimensions.get('window').width;
export type CarouselItemProps = {
	item: {
		Name: string;
		Teacher: string;
		StartTime: string;
		Classroom: string;
		Group?: string;
		LessonType?: string;
		Url?: string;
	}
}

export default function CarouselItem(item: CarouselItemProps) {
	const context = React.useContext(ThemeContext);
	let Colors = GetColors(true);
	if(context){
		Colors = GetColors(context?.value);
	}
	const styles = StyleSheet.create({
		divider: {
			borderRadius: 10,
			height: "75%",
			width: 3,
			backgroundColor: Colors.TertiaryBackgroundColor,
			marginHorizontal: 20
		},
		paralel: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		container: {
			alignItems: "center",
			flexDirection: 'row',
			backgroundColor: Colors.PrimaryBackgroundColor,
			borderRadius: 20,
			paddingHorizontal: 25,
			paddingVertical: 15,
			width: width - 40,
			marginHorizontal: 20,
			shadowColor: 'rgba(255, 255, 255, 0.1)',
			shadowOffset: { width: 0, height: 0 },
			shadowRadius: 10,
			shadowOpacity: 1
		},
		timeContainer: {
			alignItems: 'center'
		},
		value: {
			marginLeft: 5,
			fontWeight: '500',
			opacity: 0.8,
			color: Colors.SecondaryTextColor,
		},
		subjectLabel: {
			fontSize: 18,
			fontWeight: 'bold',
			opacity: 0.8,
			color: Colors.SecondaryTextColor,
		},
		endTimeLabel: {
			opacity: 0.3,
			fontWeight: 'bold',
			color: Colors.SecondaryTextColor,
		},
		startTimeLabel: {
			fontWeight: 'bold',
			color: Colors.SecondaryTextColor,
		},
		cardBody: {
			justifyContent: 'center',
		},
		time: {
			opacity: 0.3,
			fontWeight: '500',
			color: Colors.SecondaryTextColor,
		}
	});
	return (
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<Text style={styles.startTimeLabel}>{moment(item.item.StartTime).format("H:mm")}</Text>
				<Text style={styles.endTimeLabel}>{moment(item.item.StartTime).add(45, "minutes").format("H:mm")}</Text>
			</View>
			<View style={styles.divider}></View>
			<View style={styles.cardBody}>
				<Text style={styles.subjectLabel}>{item.item.Name}</Text>
				<View style={{ marginTop: 10 }}>
					<View style={styles.paralel}>
						<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name='easel' />
						<Text style={styles.value}>Učebna {item.item.Classroom}</Text>
					</View>
					<View style={{ ...styles.paralel, marginTop: 3 }}>
						<Ionicons color={Colors.TertiaryBackgroundColor} size={15} name='person-circle' />
						<Text style={styles.value}>{item.item.Teacher}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
