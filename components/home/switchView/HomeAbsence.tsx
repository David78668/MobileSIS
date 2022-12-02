import React from 'react';
import { StyleSheet, Text, View, Dimensions, ViewStyle } from 'react-native';
import { Absences, ChartColors } from '../../../declarations/types';
import FancyBox from '../../general/FancyBox';
import DonutChart from './CustomPieChart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const containerHeight = windowHeight * 0.18;

interface HomeAbsenceProps {
	absence: Absences,
	style?: ViewStyle | Array<ViewStyle>,
	chartColors?: ChartColors
}

export default function HomeAbsence(props: HomeAbsenceProps) {
	const colors = props.chartColors != null ?
		props.chartColors : { attended: "#DE6830", missed: "#1E9EE8", notExcused: "#39E81E" }
	
	const attended = props.absence.attended;
	const missed = props.absence.missed;
	const notExcused = props.absence.notExcused;

	return (
		<FancyBox style={[styles.container]}>
			<View style={styles.graphContainer}>
				<DonutChart absence={props.absence} chartColors={colors}/>
			</View>

			<View style={styles.graphLegendContainer}>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.attended }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text>{attended} zúčastnených</Text>
					</View>
				</View>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.missed }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text>{missed} zameškaných</Text>
					</View>
				</View>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.notExcused }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text>{notExcused} neomluvených</Text>
					</View>
				</View>
			</View>
		</FancyBox>
	);
}


const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: containerHeight,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10,
		marginHorizontal: 20,
		backgroundColor: 'white',
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1
	},
	graphContainer: {
		width: 100
	},
	graphLegend: {
		borderRadius: 3,
		width: 10,
		height: 10,
		marginRight: 5
	},
	graphLabel: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "white",
	},
	graphLabelTextContainer: {
		paddingVertical: 5
	},
	graphLegendContainer: {
		justifyContent: 'space-around',
	},
});