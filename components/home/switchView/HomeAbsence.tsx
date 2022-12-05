import React from 'react';
import { StyleSheet, Text, View, Dimensions, ViewStyle } from 'react-native';
import { Absences, ChartColors } from '../../../declarations/types';
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
		props.chartColors : { attended: "#DE6830", missed: "#1E9EE8", notExcused: "#39E81E" };
	
	const attended = props.absence.attended;
	const missed = props.absence.missed;
	const notExcused = props.absence.notExcused;

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.graphContainer}>
					<DonutChart absence={props.absence} chartColors={colors}/>
				</View>
			</View>

			<View style={styles.graphLabels}>
				<View style={styles.graphLabelsTop}>
					<View style={styles.graphLabel}>
						<View style={[styles.graphLegend, { backgroundColor: colors.attended }]}></View>
						<View style={styles.graphLabelTextContainer}>
							<Text style={styles.graphLabelText}>Odučené</Text>
							<Text style={styles.graphLabelValue}>{attended} hodin</Text>
						</View>
					</View>

					<View style={{...styles.graphLabel, marginLeft: 30 }}>
						<View style={[styles.graphLegend, { backgroundColor: colors.missed }]}></View>
						<View style={styles.graphLabelTextContainer}>
							<Text style={styles.graphLabelText}>Zameškané</Text>
							<Text style={styles.graphLabelValue}>{missed} hodin</Text>
						</View>
					</View>
				</View>

				<View>
					<View style={styles.graphLabel}>
						<View style={[styles.graphLegend, { backgroundColor: colors.notExcused }]}></View>
						<View style={styles.graphLabelTextContainer}>
							<Text style={styles.graphLabelText}>Neomluvené</Text>
							<Text style={styles.graphLabelValue}>{notExcused} hodin</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 15,
		paddingHorizontal: 20,
		justifyContent: 'space-between',
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
		marginTop: 'auto',
		marginBottom: 'auto',
		width: 90,
		height: 90,
	},
	graphLegend: {
		borderRadius: 3,
		width: 5,
		height: 20,
		marginRight: 8
	},
	graphLabel: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	graphLabelTextContainer: {
		paddingVertical: 3
	},
	graphLabelText: {
		fontWeight: 'bold'
	},
	graphLabelValue: {
		opacity: 0.5,
		fontSize: 13
	},
	graphLabels: {
		flexDirection: 'column',
		justifyContent: 'center'
	},
	graphLabelsTop: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});