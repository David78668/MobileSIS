import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Dimensions} from 'react-native';
import Grade from '../components/Grade';

export default function App() {
  const data = require("../data1.json");

  return (
    <View>
            <ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.image}>
              <Text style={{color:'white',fontSize:25,fontWeight:'700'}}>Známky</Text>
            </ImageBackground>
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
