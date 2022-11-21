import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Datescroll() {

  const dates = ["Leden 2021","Únor 2021", "Březen 2021", "Duben 2021", "Červen 2021", "Červenec 2021", "Srpen 2021", "Září 2021", "Říjen 2021", "Listopad 2021", "Prosinec 2021"]
  const [currentDate, SetCurrentDate] = useState(5)

  return (
    <View style={styles.dateWrapper}>
    	<TouchableWithoutFeedback onPress={() => currentDate > 0 ? SetCurrentDate(currentDate - 1):null}>
    		<View style={styles.arrowWrapper}>
          <Ionicons  color="white" size={20} name="chevron-back-outline"></Ionicons>
        </View>
      </TouchableWithoutFeedback>
      
      <View style={styles.datetextWrapper}>
        	<Text style={styles.headerDate}>{dates[currentDate]}</Text>
      </View>
        
      <TouchableWithoutFeedback onPress={() => currentDate < dates.length - 1 ? SetCurrentDate(currentDate + 1):null}>
        <View style={styles.arrowWrapper}>
          <Ionicons  color="white" size={20} name="chevron-forward-outline"></Ionicons>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  dateWrapper:{
    width:'55%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
	  alignSelf:'flex-end',
  },
  arrowWrapper: {
	  justifyContent:'center',
	  padding:'4%',
  },
  datetextWrapper: {
    alignItems:'center',
    flex:1,
  },
  headerDate: {
    fontSize:17,
    color:'white',
    fontWeight:'500',
    padding:0,
  },
});