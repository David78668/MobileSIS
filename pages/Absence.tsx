import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Heading from '../components/Heading';

export default function Absence() {
  return (
    <View style={styles.container}>
        <Heading headerText='Absence'/>
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
      width:'88%',
    },
  });

