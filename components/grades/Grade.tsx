import { StyleSheet, Text, TouchableOpacity, View, FlatList, Animated } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons"
import React, { useRef } from 'react';
import moment from 'moment';
import icons from '../../declarations/icons';
import { animation } from '../../declarations/animation';
import GetColors from '../../declarations/colors';
import { useTheme } from '../../context/ThemeProvider';
	
export default function Grade(data: any) {
	const [select, setcheckBoxState] = React.useState(false);
	const rotateAnim = useRef(new Animated.Value(0)).current;
	const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
	function GradeItems(data: any) {
		return (
			<FlatList
				data={data}
				renderItem={renderGradeItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	}
	function renderGradeItem({ item }: any) {
		if (item.comment.length != 0) {
			item.comment = item.comment[0].toUpperCase() + item.comment.slice(1);
		}
	
		item.comment = (item.comment.length > 22) ? item.comment.substring(0, 19) + "..." : item.comment;
	
		return (
			<View style={styles.gradeItem}>
				<View style={styles.gradeBox}>
					<Text style={styles.grade}>{item.value}</Text>
				</View>
	
				<View style={styles.gradeInfo}>
					<View>
						<Text style={styles.gradeName}>{item.comment.length == 0 ? 'Bez názvu' : item.comment}</Text>
						<Text style={styles.date}>{moment(item.date).format('D. MMMM')}</Text>
					</View>
	
					<Text style={styles.weight}>Váha {item.weight}</Text>
				</View>
			</View>
		);
	}
	const rotate = () => {
		Animated.timing(rotateAnim, {
			toValue: select ? 0 : 1,
			duration: 250,
			useNativeDriver: true
		}).start();
	};

	const arrowTransform = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['-90deg', '0deg']
	});

	const icon: any = icons.find(e => e.subject == data.subject.name)!.icon;
	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingHorizontal: 20,
			paddingVertical: 10,
			backgroundColor: Colors.PrimaryBackgroundColor,
			borderRadius: 10
		},
		inner: {
			borderRadius: 10,
			backgroundColor: Colors.PrimaryBackgroundColor,
			overflow: 'hidden'
		},
		shadow: {
			shadowColor: 'rgba(0, 0, 0, 0.05)',
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 1,
			shadowRadius: 10
		},
		icon: {
			height: 40,
			width: 40,
			borderRadius: 10,
			backgroundColor: "#e9691e1A",
			justifyContent: 'center',
			alignItems: 'center'
		},
		subjectBox: {
			flexDirection: 'row'
		},
		subject: {
			fontSize: 18,
			fontWeight: 'bold',
			color: Colors.SecondaryTextColor,
			opacity: 0.8
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
			opacity: 0.8
		},
		gradeItem: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		gradeBox: {
			backgroundColor: Colors.TertiaryBackgroundColor,
			paddingVertical: 15,
			width: 60,
			justifyContent: 'center',
			alignItems: 'center',
			borderTopColor: 'rgba(255, 255, 255, 0.1)',
			borderTopWidth: 2
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
			borderTopColor: 'rgba(100, 100, 100, 0.05)',
			borderTopWidth: 2
		},
		separator: {
			height: 1,
			width: '100%',
			backgroundColor: 'lightgray',
			opacity: 0.05
		},
		gradeName: {
			color: Colors.SecondaryTextColor,
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
			color: Colors.SecondaryTextColor,
			fontWeight: '500',
			opacity: 0.6
		}
	});
	return (
		<View style={styles.shadow}>
			<View style={styles.inner}>
				<TouchableOpacity
					style={styles.container}
					onPress={() => {
						animation();
						setcheckBoxState(!select);
						rotate();
					}} activeOpacity={1}>

					<View style={styles.subjectBox}>
						<View style={styles.icon}>
							<Ionicons color={Colors.TertiaryBackgroundColor} size={20} name={icon} />
						</View>

						<View style={styles.info}>
							<Text style={styles.subject}>{data.subject.name}</Text>
							<Text style={styles.average}>Průměr {calculateAverage(data.marks)}</Text>
						</View>
					</View>

					<Animated.View style={{ transform: [{ rotateZ: arrowTransform }]}}>
						<Feather name='chevron-down' color={Colors.TertiaryBackgroundColor} size={25} style={styles.dropdown} />
					</Animated.View>
				</TouchableOpacity>
				
				{select && GradeItems(data.marks)}
			</View>
		</View>
	);
}

function calculateAverage(data: any) {
	var totalValue = 0;
	var count = 0;

	data.forEach((item: any) => {
		let weight = item.weight;
		
		if (weight != undefined && item.value != undefined && item.value != 's') {
			totalValue += weight * gradeToNumber(item.value);
			count += weight;
		}
	});

	return (totalValue / count).toFixed(2).replace('.', ',');
}

function gradeToNumber(text: string) {
	if (text[1] == '-') return parseInt(text[0]) + 0.5;
	if (text == 'n') return 5;
	if (!Number.isNaN(text)) return parseInt(text);
	
	return NaN;
}