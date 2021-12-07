import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CarouselCards from '../Components/NextSubjectCarousel';


export default function Home() {
  return (
    <SafeAreaView>
      <CarouselCards/>
    </SafeAreaView>
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