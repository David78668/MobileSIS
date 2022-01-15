import React from 'react';
import HomeNewGradeBox from './HomeNewGradeBox';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const containerHeight = windowHeight*0.18;


export default function HomeNewGrades() {
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
        <HomeNewGradeBox subjectName="MAT" date="10.dub.1998" grade="2"/>
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