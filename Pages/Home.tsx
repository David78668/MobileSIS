import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeAbsence from '../Components/HomeAbsence';
import HomeSwitchView from '../Components/HomeSwitchView';
import CarouselCards from '../Components/NextSubjectCarousel';
import ScheduleChanges from '../Components/ScheduleChanges';


export default function Home() {
  return (
    <View>
      <CarouselCards/>
      <ScheduleChanges/>
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