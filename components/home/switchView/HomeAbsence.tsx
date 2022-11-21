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
			<View>
				<View style={styles.graphContainer}>
					<DonutChart absence={props.absence} chartColors={colors}/>
				</View>
			</View>

			<View style={styles.graphLegendContainer}>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.attended }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text style={styles.graphLabelText}>{attended}</Text>
						<Text style={styles.graphLabelText}>Odučené hodiny</Text>
					</View>
				</View>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.missed }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text style={styles.graphLabelText}>{missed}</Text>
						<Text style={styles.graphLabelText}>Zameškané hodiny</Text>
					</View>
				</View>
				<View style={styles.graphLabel}>
					<View style={[styles.graphLegend, { backgroundColor: colors.notExcused }]}></View>
					<View style={styles.graphLabelTextContainer}>
						<Text style={styles.graphLabelText}>{notExcused}</Text>
						<Text style={styles.graphLabelText}>Neomluvené hodiny</Text>
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
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10,
		marginHorizontal: 20,
		backgroundColor: 'white',
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
	},
	graphContainer: {
		marginTop: 'auto',
		marginBottom: 'auto',
		width: windowWidth * 0.288,
		height: windowWidth * 0.288,
	},
	graphLegend: {
		borderRadius: containerHeight * 0.08 * 0.21,
		width: windowWidth * 0.032,
		height: windowWidth * 0.032,
		marginRight: windowWidth * 0.016,
		marginLeft: 0,
	},
	graphLabel: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "white",
	},
	graphLabelText: {
		fontSize: 14
	},
	graphLabelTextContainer: {

	},
	graphLegendContainer: {
		justifyContent: 'space-around',
	},
})