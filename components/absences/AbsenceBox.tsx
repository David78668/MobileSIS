import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../declarations/colors';
import moment from 'moment';
import "moment/locale/cs";

export default function AbsenceBox(props: any) {
	var absence: any[] = [];
	
	props.data.forEach((e: any) => {
		const start = e.dates[0];
		const end = moment(e.dates[e.dates.length - 1]).add(45, 'minutes');

		absence.push({ date: new Date(e.date), start, end, reason: e.reason });
	});
	
	return (
		<View style={styles.container}>
			<FlatList
				data={absence}
				renderItem={renderAbsence}
				ItemSeparatorComponent={separator}
				ListHeaderComponent={header}
				scrollEnabled={false}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
}

interface AbsenceItem {
	date: string,
	start: string,
	end: string,
	reason: number
}

function renderAbsence({ item }: { item: AbsenceItem }) {
	return (
		<View style={styles.item}>
			<View style={styles.wrapper}>
				<Text style={styles.reasonText}>{moment(item.date).format('D. MMMM')}</Text>
			</View>

			<View style={styles.wrapper}>
				<Text style={styles.reasonText}>{moment(item.start).format('H:mm')}-{moment(item.end).format('H:mm')}</Text>
			</View>

			<View style={styles.wrapper}>
				<Text style={styles.reasonText}>{item.reason}</Text>
			</View>
		</View>
	);
}

function header() {
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
			{separator()}
		</>
	);
}

function separator() {
	return <View style={styles.separator}></View>;
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
	}
});