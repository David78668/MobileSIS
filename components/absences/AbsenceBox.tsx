import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '../../declarations/colors';
import moment from 'moment';
import "moment/locale/cs";
import { Ionicons } from '@expo/vector-icons';
import Modal from '../general/Modal';
import icons from '../../declarations/icons';
import { ThemeContext } from '../../App';
import GetColors from '../../declarations/colors';

interface AbsenceItem {
	date: Date,
	start: string,
	end: string,
	reason: number,
	subjects: string[],
	dates: string[]
}



interface AbsenceDayProps {
	item: any;
	start: string;
}


export default function AbsenceBox(props: any) {
	var absence: any[] = [];
	
	props.data.forEach((e: any) => {
		const start = moment(e.dates[0]);
		const end = moment(e.dates[e.dates.length - 1]).add(45, 'minutes');
		
		absence.push({
			date: new Date(e.date),
			start, end,
			reason: e.reason,
			subjects: e.subjects,
			dates: e.dates
		});
	});

	function renderAbsence({ item }: any) {
		return <AbsenceItem item={item} />;
	}
	function AbsenceItem({ item }: { item: AbsenceItem }) {
		const [open, setOpen] = useState(false);
		const snapPoints = [24 + 60 + 22 + 30 + (item.subjects.length * 50) + ((item.subjects.length - 1) * 10)];
		const context = React.useContext(ThemeContext);
		let Colors = GetColors(true);
		if(context){
			Colors = GetColors(context?.value);
		}
		function separator() {
			return <View style={{ height: 10 }}></View>;
		}
	
		function renderAbsenceDay({ day, index }: any) {
			return <AbsenceDay item={item.subjects[index]} start={item.dates[index]} />;
		}
	
		return (
			<View>
				<TouchableOpacity
					style={styles.item}
					activeOpacity={0.7}
					onPress={() => setOpen(true)}>
					
					<View style={styles.wrapper}>
						<Text style={styles.reasonText}>{moment(item.date).format('D. MMMM')}</Text>
					</View>
	
					<View style={styles.wrapper}>
						<Text style={styles.reasonText}>{moment(item.start).format('H:mm')}–{moment(item.end).format('H:mm')}</Text>
					</View>
	
					<View style={styles.wrapper}>
						<Text style={styles.reasonText}>{item.reason}</Text>
					</View>
				</TouchableOpacity>
	
				<Modal
					title={moment(item.date).format('D. MMMM, yyyy')}
					snapPoints={snapPoints}
					open={open} setOpen={setOpen}>
						
					<FlatList
						data={item.subjects}
						renderItem={renderAbsenceDay}
						ItemSeparatorComponent={separator}
						scrollEnabled={false}
						style={styles.absenceDays} />
				</Modal>
			</View>
		);
	}
	function AbsenceDay(props: AbsenceDayProps) {
		const icon: any = icons.find(e => e.subject == props.item)!.icon;
	
		const start = moment(props.start).format('H:mm');
		const end = moment(props.start).add(45, 'minutes').format('H:mm');
	
		return (
			<View style={styles.shadow}>
				<View style={styles.inner}>
					<View style={styles.absenceDay}>
						<View style={styles.absenceDayInfo}>
							<View style={styles.icon}>
								<Ionicons color={Colors.TertiaryBackgroundColor} size={20} name={icon} />
							</View>
							
							<Text style={styles.subject}>{props.item}</Text>
						</View>
						
						<Text style={styles.time}>{start}–{end}</Text>
					</View>
				</View>
			</View>
		);
	}
	
	function Header() {
		return (
			<>
				<View style={styles.item}>
					<View style={styles.wrapper}>
						<Text style={styles.bold}>Datum</Text>
					</View>
	
					<View style={styles.wrapper}>
						<Text style={styles.bold}>Rozmezí</Text>
					</View>
	
					<View style={styles.wrapper}>
						<Text style={styles.bold}>Důvod</Text>
					</View>
				</View>
				{Separator()}
			</>
		);
	}
	
	function Separator() {
		return <View style={styles.separator}></View>;
	}

	function AbsenceNone() {
		return (
			<View>
				<Header />
				<Separator />
				<View style={styles.item}>
					<Text style={styles.absenceNone}>Nemáte žádnou absenci.</Text>
				</View>
			</View>
		);
	}
	const styles = StyleSheet.create({
		item: {
			flexDirection: 'row',
			paddingVertical: 10,
			flex: 3
		},
		wrapper: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center'
		},
		bold: {
			fontWeight: 'bold',
			color: Colors.SecondaryTextColor,
			opacity: 0.8,
			fontSize: 15
		},
		reasonText: {
			color: Colors.SecondaryTextColor,
			opacity: 0.6,
			fontWeight: '500'
		},
		separator: {
			backgroundColor: Colors.TertiaryTextColor,
			opacity: 0.5,
			width: '100%',
			borderRadius: 1,
			height: 1
		},
		container: {
			marginTop: 20,
			backgroundColor: Colors.PrimaryBackgroundColor,
			marginHorizontal: 20,
			paddingHorizontal: 20,
			borderRadius: 10,
			shadowColor: 'rgba(0, 0, 0, 0.1)',
			shadowOffset: { width: 0, height: 0 },
			shadowRadius: 10,
			shadowOpacity: 1,
			overflow: 'visible'
		},
		absenceDay: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingHorizontal: 20,
			paddingVertical: 5,
			justifyContent: 'space-between'
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
			fontSize: 16,
			fontWeight: 'bold',
			color: Colors.SecondaryTextColor,
			opacity: 0.8,
			marginLeft: 20
		},
		info: {
			flexDirection: 'column',
			marginLeft: 20
		},
		average: {
			 color: Colors.SecondaryTextColor,
			 fontWeight: '500',
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
		absenceDays: {
			overflow: 'visible'
		},
		absenceDayInfo: {
			 flexDirection: 'row',
			 alignItems: 'center'
		},
		time: {
			fontWeight: '500',
			opacity: 0.6
		},
		absenceNone: {
			fontWeight: '500',
			opacity: 0.6
		}
	});
	return (
		<View style={styles.container}>
			{absence.length != 0 ? <FlatList
				data={absence}
				renderItem={renderAbsence}
				ItemSeparatorComponent={Separator}
				ListHeaderComponent={Header}
				scrollEnabled={false}
				keyExtractor={(item, index) => index.toString()}
			/> : <AbsenceNone />}
		</View>
	);
} 