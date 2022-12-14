import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Absences } from '../../../declarations/types';
import { Colors } from '../../../declarations/colors';
import DonutChart from './CustomPieChart';

interface HomeAbsenceProps {
	absence: Absences
}

export default function HomeAbsence(props: HomeAbsenceProps) {
	const colors = {
		attended: "#DE6830",
		missed: "#71c1f0",
		notExcused: "#a7d533"
	}
	
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
						<View>
							<Text style={styles.graphLabelText}>Odučené</Text>
							<Text style={styles.graphLabelValue}>{attended} hodin</Text>
						</View>
					</View>

					<View style={{...styles.graphLabel, marginLeft: 20 }}>
						<View style={[styles.graphLegend, { backgroundColor: colors.missed }]}></View>
						<View>
							<Text style={styles.graphLabelText}>Zameškané</Text>
							<Text style={styles.graphLabelValue}>{missed} hodin</Text>
						</View>
					</View>
				</View>

				<View>
					<View style={{...styles.graphLabel, marginTop: 10 }}>
						<View style={[styles.graphLegend, { backgroundColor: colors.notExcused }]}></View>
						<View>
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
		justifyContent: 'space-around',
		marginTop: 20,
		borderRadius: 10,
		marginHorizontal: 20,
		backgroundColor: Colors.PrimaryBackgroundColor,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1
	},
	graphContainer: {
		marginTop: 'auto',
		marginBottom: 'auto',
		width: 85,
		height: 85,
	},
	graphLegend: {
		borderRadius: 3,
		width: 5,
		height: 20,
		marginRight: 8,
		opacity: 0.8
	},
	graphLabel: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	graphLabelText: {
		fontWeight: 'bold',
		opacity: 0.8,
		color: Colors.SecondaryTextColor,

	},
	graphLabelValue: {
		opacity: 0.5,
		fontSize: 13,
		fontWeight: '500',
		color: Colors.SecondaryTextColor,
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