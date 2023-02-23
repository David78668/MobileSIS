import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import GetColors from '../../declarations/colors';
import moment from 'moment';
import { useTheme } from '../../context/ThemeProvider';

interface DateScrollProps {
	monthChange: Function
}
  
export default function Datescroll(props: DateScrollProps) {
  var monthIndex = moment().get('month');
  const [currentDate, setCurrentDate] = useState(monthIndex > 5 ? monthIndex - 8 : monthIndex + 4);
  const darkMode = useTheme();
	const Colors = GetColors(darkMode.value);
  var year = moment().get('month') < 8 ? moment().get('year') - 1 : moment().get('year');
  var startMonth = moment(`${year}-09-01`);

  var dates = [];
  for (let i = 0; i < 10; i++) {
    dates[i] = moment(startMonth);
    startMonth.add(1, 'month');
  }

  useEffect(() => props.monthChange(monthIndex > 5 ? monthIndex - 8 : monthIndex + 4), []);
  const styles = StyleSheet.create({
    dateWrapper:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    arrowWrapper: {
      justifyContent: 'center',
      padding: 5
    },
    datetextWrapper: {
      alignItems: 'center',
      width: 85
    },
    headerDate: {
      fontSize: 17,
      color: Colors.PrimaryTextColor,
      fontWeight: '500'
    }
  });
  return (
    <View style={styles.dateWrapper}>
      <TouchableOpacity onPress={() => {
        if (currentDate > 0) {
          setCurrentDate(currentDate - 1);
          props.monthChange(currentDate - 1);
        }
      }} activeOpacity={0.7}>
        <View style={styles.arrowWrapper}>
          <Feather color={Colors.PrimaryTextColor} size={20} name="chevron-left" style={{ opacity: currentDate == 0 ? 0 : 0.6 }} />
        </View>
      </TouchableOpacity>
      
      <View style={styles.datetextWrapper}>
        <Text style={styles.headerDate}>{dates[currentDate].format('MMM. yyyy')}</Text>
      </View>

      <TouchableOpacity onPress={() => {
        if (currentDate < dates.length - 1) {
          setCurrentDate(currentDate + 1);
          props.monthChange(currentDate + 1);
        }
      }} activeOpacity={0.7}>
        <View style={styles.arrowWrapper}>
          <Feather color={Colors.PrimaryTextColor} size={20} name="chevron-right" style={{ opacity: currentDate == dates.length - 1 ? 0 : 0.6 }}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

