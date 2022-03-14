import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import HomeAbsence from '../components/HomeAbsence';
import HomeSwitchView from '../components/HomeSwitchView';
import CarouselCards from '../components/NextSubjectCarousel';
import ScheduleChanges from '../components/ScheduleChanges';


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