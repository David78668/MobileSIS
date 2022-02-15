import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Absence() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.profileContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Absence</Text>
        </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText:{
      fontSize:30,
      color:'white',
      fontWeight:'bold',
      marginBottom:15,
    },
    profileContainer:{
      maxHeight:'13%',
      minWidth:'100%',
      backgroundColor:'red',
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',

    },
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'88%',
      
    },
  });

