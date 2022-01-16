import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import DonutChart from './CustomPieChart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const containerHeight = windowHeight*0.18;

export default function HomeAbsence() {
  const attended = 413;
  const missed = 21;
  const notExcused = 5;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.graphContainer}>
          <DonutChart attended={attended} missed={missed} notExcused={notExcused}/>
        </View>
      </View>
      
      <View style={styles.graphLegendContainer}>
        <View style={styles.graphLabel}>
          <View style={[styles.graphLegend, {backgroundColor:'#DE6830'}]}></View>
          <View style={styles.graphLabelTextContainer}>
            <Text style={styles.graphLabelText}>{attended}</Text>
            <Text style={styles.graphLabelText}>Odučené hodiny</Text>
          </View>
        </View>
        <View style={styles.graphLabel}>
          <View style={[styles.graphLegend, {backgroundColor:'#1E9EE8'}]}></View>
          <View style={styles.graphLabelTextContainer}>
            <Text style={styles.graphLabelText}>{missed}</Text>
            <Text style={styles.graphLabelText}>Zameškané hodiny</Text>
          </View>
        </View>
        <View style={styles.graphLabel}>
          <View style={[styles.graphLegend, {backgroundColor:'#39E81E'}]}></View>
          <View style={styles.graphLabelTextContainer}>
            <Text style={styles.graphLabelText}>{notExcused}</Text>
            <Text style={styles.graphLabelText}>Neomluvené hodiny</Text>
          </View>
        </View>                      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    height: containerHeight,
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:0,
    marginTop:'auto',
    borderRadius:10,
    marginHorizontal: "5.9%",
    backgroundColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation:1,
    },

    graphContainer:{

      marginTop: 'auto',
      marginBottom: 'auto',
      
      width: windowWidth * 0.288,
      height: windowWidth * 0.288,
    },
    graphLegend:{
      borderRadius:containerHeight * 0.08 * 0.21,
      width: windowWidth * 0.032,
      height: windowWidth * 0.032,
      marginRight: windowWidth * 0.016,
      marginLeft:0,
    },
    graphLabel:{   
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:"white",
    },
    graphLabelText:{
      fontSize: 14
    },
    graphLabelTextContainer:{
     
    },
    graphLegendContainer:{
      
      justifyContent:'space-around',
      
    },

  })