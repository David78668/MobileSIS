import React from 'react';
import HomeNewGradeBox from './HomeNewGradeBox';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import data from '../gradeData.json';
import Grades from '../Pages/Grades';

const date = new Date();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const containerHeight = windowHeight*0.18;

function daysInMonth (month:number, year:number) {
  return new Date(year, month, 0).getDate();
}

function convertToDays(date:string) {
  let splitDate = date.split('-');
  return Number(splitDate[0]) * 365 + daysInMonth(Number(splitDate[1]), Number(splitDate[0]) + Number(splitDate[2]))
}

export default function HomeNewGrades() {
  let grades = [];
  let year = date.getFullYear() - 2000;
  let currentDate = convertToDays(`${year}-${date.getMonth()}-${date.getDate()}`);
  let keys = 0;
  for(let i = 0; i < data.Subjects.length; i++){
      for(let k=0; k < data.Subjects[i].Marks.length; k++){
        if(currentDate - convertToDays(data.Subjects[i].Marks[k].Date) < 48){
          grades.push(HomeNewGradeBox({
            subjectName:data.Subjects[i].ShortName,
            grade:String(data.Subjects[i].Marks[k].Value),
            date:data.Subjects[i].Marks[k].Date,
          }));
        }
    }
  }
  let gradeAmount = grades.length;
  return (
    
    <View style={styles.container}>
      
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {grades}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      height: containerHeight,
      marginBottom:0,
      marginTop:'auto',
      borderRadius:10,
      marginLeft: "5.9%",
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 10,
      shadowOpacity: 1,
      elevation:1,
    },
    scrollView:{
      height:'100%',
      
    }
    
  })