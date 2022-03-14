import { StatusBar } from 'expo-status-bar';
import Heading from '../components/Heading';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Dimensions} from 'react-native';
import Grade from '../components/Grade';

export default function App() {
  const data = require("../data1.json");

  return (
    <View>
        <Heading headerText='Známky'/>
        <View style={{alignItems:'center'}}>
        {Grade(data.Subjects[0])}
        {Grade(data.Subjects[1])}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    paddingLeft:'5%',
    height:80,
    justifyContent:'center',
  },
});
