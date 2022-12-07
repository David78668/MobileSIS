import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import moment from 'moment';
import "moment/locale/cs";

moment.locale('cs');

interface DateScrollProps {
	monthChange: Function
}

export default function Datescroll(props: DateScrollProps) {
  const [currentDate, setCurrentDate] = useState(monthIndex);

  useEffect(() => props.monthChange(monthIndex), []);
  
  return (
    <View style={styles.dateWrapper}>
      <TouchableOpacity onPress={() => {
        if (currentDate > 0) {
          setCurrentDate(currentDate - 1);
          props.monthChange(currentDate - 1);
        }
      }} activeOpacity={0.7}>
        <View style={styles.arrowWrapper}>
          <Feather color='white' size={20} name="chevron-left" style={{ opacity: currentDate == 0 ? 0 : 0.5 }} />
        </View>
      </TouchableOpacity>
      
      <View style={styles.datetextWrapper}>
        <Text style={styles.headerDate}>{dates[currentDate]}</Text>
      </View>

      <TouchableOpacity onPress={() => {
        if (currentDate < dates.length - 1) {
          setCurrentDate(currentDate + 1);
          props.monthChange(currentDate + 1);
        }
      }} activeOpacity={0.7}>
        <View style={styles.arrowWrapper}>
          <Feather color="white" size={20} name="chevron-right" style={{ opacity: currentDate == dates.length - 1 ? 0 : 0.5 }}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

var month = moment(`${moment().get('year')}-09-01`);

var dates: string[] = [];
for (let i = 0; i < 10; i++) {
  const date = month.format('MMM. YYYY');

  dates.push(date[0].toUpperCase() + date.slice(1));
  month.add(1, 'month');
}

const currentMonth = dates.find(e => e.toLowerCase().includes(moment().format('MMM')))!;
const monthIndex = dates.indexOf(currentMonth);
export const longMonth = month.add(monthIndex, 'month').format('MMMM');

const styles = StyleSheet.create({
  dateWrapper:{
    width: '45%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  arrowWrapper: {
    justifyContent: 'center',
    padding: 5
  },
  datetextWrapper: {
    alignItems:'center',
    flex: 1,
  },
  headerDate: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
    padding: 0,
  },
});