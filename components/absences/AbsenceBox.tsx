import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../declarations/colors';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import "moment/locale/cs";

moment.locale('cs');

interface AbsenceData {
	date: Date,
	start: string,
	end: string,
	reason: string
}

interface AbsenceProps {
	data: Array<AbsenceData>
}

export default function AbsenceBox(props: AbsenceProps) {
	return (
		<View style={styles.container}>
			<FlatList
				data={props.data}
				renderItem={renderAbsence}
				ItemSeparatorComponent={separator}
				ListHeaderComponent={header}
				scrollEnabled={false}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

function renderAbsence({ item }: { item: AbsenceData }) {
	return (
		<View style={styles.item}>
			<View style={styles.wrapper}>
				<Text style={styles.reasonText}>{moment(item.date).format('D. MMMM')}</Text>
			</View>

			<View style={styles.wrapper}>
				<Text style={styles.reasonText}>{item.start}-{item.end}</Text>
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