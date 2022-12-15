import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons"
import React from 'react';
import { Colors } from '../../declarations/colors';
import { GradeProps, GradeData } from '../../declarations/types';
import moment from 'moment';

//TODO
//Tidy up grade conversion from string to int using a dictionary
//Solve longer grade comments dissapearing
const ShortMonths = ['led', 'úno', "bře", "dub", "kvě", "črv", "črn", "srp", "zář", "říj", "lis", "pro"] 

export default function Grade(data: any) {
	const [select, setcheckBoxState] = React.useState(false);

	return (
		<View style={styles.shadow}>
			<TouchableOpacity
				style={styles.container}
				onPress={() => setcheckBoxState(!select)}
				activeOpacity={0.7}>
			
				<View style={styles.icon}>
					<Ionicons color={Colors.TertiaryBackgroundColor} size={20} name='shapes' />
				</View>

				<View style={styles.info}>
					<Text style={styles.subject}>{data.subject.name}</Text>
					<Text style={styles.average}>Průměr — {calculateAverage(data.marks)}</Text>
				</View>

				<View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
					<Text style={styles.grades}>{data.marks.length}</Text>
					<Feather name='chevron-down' color={Colors.TertiaryBackgroundColor} size={20} style={styles.dropdown} />
				</View>
			</TouchableOpacity>
			
			{select && <View style={styles.gradesBox}>{Content(data.marks)}</View>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: Colors.PrimaryBackgroundColor
	},
	shadow: {
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
		backgroundColor: Colors.PrimaryBackgroundColor
	},
	icon: {
		height: 40,
		width: 40,
		borderRadius: 10,
		backgroundColor: "#e9691e1A",
		justifyContent: 'center',
		alignItems: 'center'
	},
	subject: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.SecondaryTextColor,
		opacity: 0.8
	},
	gradesBox: {
		borderTopLeftRadius: 10,
		overflow: 'hidden',
		marginTop: 10
	},
	info: {
		flexDirection: 'column',
		marginLeft: 20
	},
	average: {
		color: Colors.SecondaryTextColor,
		fontWeight: '500',
		opacity: 0.6
	},
	grades: {
		fontWeight: '500',
		opacity: 0.6
	},
	dropdown: {
		marginLeft: 5,
		opacity: 0.8
	},
	gradeItem: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	gradeBox: {
		backgroundColor: Colors.TertiaryBackgroundColor,
		paddingVertical: 15,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	grade: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.PrimaryTextColor
	},
	gradeInfo: {
		flexDirection: 'row',
		height: "100%",
		flex: 1,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: Colors.PrimaryBackgroundColor,
		borderTopColor: 'rgba(0, 0, 0, 0.1)',
		borderTopWidth: 1
	},
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: 'lightgray',
		opacity: 0.05
	},
	gradeName: {
		fontWeight: 'bold',
		opacity: 0.8,
		fontSize: 15
	},
	gradeHeader: {
		flexDirection: 'row'
	},
	date: {
		color: Colors.SecondaryTextColor,
		opacity: 0.6,
		fontWeight: '500',
		fontSize: 13
	},
	weight: {
		fontWeight: '500',
		opacity: 0.6
	}
});

function renderGradeItem({ item }: any) {
	if (item.comment.length != 0) {
		item.comment = item.comment[0].toUpperCase() + item.comment.slice(1);
	}

	return (
		<View style={styles.gradeItem}>
			<View style={styles.gradeBox}>
				<Text style={styles.grade}>{item.value}</Text>
			</View>

			<View style={styles.gradeInfo}>
				<View>
					<Text style={styles.gradeName}>{(item.comment.length > 20) ? item.comment.substring(0, 20) + "..." : item.comment}</Text>
					<Text style={styles.date}>{moment(item.date).format('D. MMMM')}</Text>
				</View>

				<Text style={styles.weight}>Váha: {item.weight}</Text>
			</View>
		</View>
	);
}

function Content(data: any) {
	return (
		<FlatList
			data={data}
			renderItem={renderGradeItem}
			keyExtractor={(item, index) => index.toString()}
		/>
	);
}

function calculateAverage(data: any){
	var totalValue = 0;
	var count = 0;

	data.forEach((item: any) => {
		let weight = item.weight;
		
		if (weight != undefined && item.value != undefined && item.value != 's') {
			totalValue += weight * gradeToNumber(item.value);
			count += weight;
		}
	});

	return ((totalValue/count).toFixed(2)).replace('.', ',');
}

function gradeToNumber(text: string){
	if(text[1] == '-')
		return (Number)(text[0]) + 0.5;
	if(text == 'n'){
		return 5;
	}
	if(!Number.isNaN(text))
		return (Number)(text);
	return NaN;
}