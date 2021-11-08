import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Schedule from '../Pages/Schedule';
import Grades from '../Pages/Grades';
import Absence from '../Pages/Absence';
import Profile from '../Pages/Profile';


const Tab = createBottomTabNavigator();
export default function CustomTabNavigation(){
  return(
    <Tab.Navigator  screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{
      position:'absolute',
      flex:1
    }}} >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:HomeIcon}}/>
      <Tab.Screen name="Schedule" component={Schedule} options={{tabBarIcon:ScheduleIcon}}/>
      <Tab.Screen name="Grades" component={Grades} options={{tabBarIcon:GradesIcon}} />
      <Tab.Screen name="Absence" component={Absence} options={{tabBarIcon:AbsenceIcon}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:ProfileIcon}}/>
    </Tab.Navigator>
  );
  
}

const HomeIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <Image
      source={require('../assets/HomeIcon.svg')}
      resizeMode='contain'
      style={[{tintColor: focused ? "#de6830" : "#c7c7cc",}, styles.Icon]} />      
    <Text style={
      {
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Domů</Text>
  </View>
  )
}

const ScheduleIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <Image
      source={require('../assets/ScheduleIcon.svg')}
      resizeMode='contain'
      style={[{tintColor: focused ? "#de6830" : "#c7c7cc",}, styles.Icon]} />      
    <Text style={
      {
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Rozvrh</Text>
  </View>
  )
}

const GradesIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <Image
      source={require('../assets/GradesIcon.svg')}
      resizeMode='contain'
      style={[{tintColor: focused ? "#de6830" : "#c7c7cc",}, styles.Icon]} />      
    <Text style={
      {
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Známky</Text>
  </View>
  )
}

const AbsenceIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <Image
      source={require('../assets/AbsenceIcon.svg')}
      resizeMode='contain'
      style={[{tintColor: focused ? "#de6830" : "#c7c7cc",}, styles.Icon]} />      
    <Text style={
      {
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Absence</Text>
  </View>
  )
}

const ProfileIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <Image
      source={require('../assets/ProfileIcon.svg')}
      resizeMode='contain'
      style={[{tintColor: focused ? "#de6830" : "#c7c7cc",}, styles.Icon]} />      
    <Text style={
      {
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Profil</Text>
  </View>
  )
}

const styles = StyleSheet.create({
 Icon:{
  width:25,
  height:25
 },

  IconContainer:{
    alignItems:'center',
    justifyContent:'center',
    top:10,
  }
});







