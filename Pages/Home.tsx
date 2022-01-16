import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeAbsence from '../Components/HomeAbsence';
import HomeSwitchView from '../Components/HomeSwitchView';
import CarouselCards from '../Components/NextSubjectCarousel';


export default function Home() {
  return (
    <View>
      <CarouselCards/>
      
      <HomeSwitchView/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
    },
  });