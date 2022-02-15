import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import HomeSwitchView from '../components/HomeSwitchView';
import { Ionicons } from '@expo/vector-icons';
import ProfileBox from '../components/ProfileBox';


export default function Profile() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/carousel.png')} resizeMode="cover" style={styles.profileContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profil</Text>
            <Ionicons name='settings-sharp' style={styles.settingsIcon} size={34}/>
          </View>
        <ProfileBox
          FirstName='Jakub'
          LastName='Klima'
        />
        </ImageBackground>
        <View style={styles.switchHolder}>
          <HomeSwitchView/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    profileContainer:{
      maxHeight:'41%',
      minWidth:'100%',
      backgroundColor:'red',
      flex:1,
      justifyContent:'center',
      alignItems:'center',

    },
    headerText:{
      fontSize:30,
      color:'white',
      fontWeight:'bold',
    },
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'88%',
    },
    settingsIcon:{
      color:'white',
    },
    switchHolder:{
      marginTop:23
    }
  });
