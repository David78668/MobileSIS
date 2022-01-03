import { View, Text, StyleSheet, Image } from 'react-native';
import {useAssets, Asset} from 'expo-asset'
import AbsenceIco from '../assets/absence'
import GradesIco from '../assets/grades';
import HomeIco from '../assets/home';
import ProfileIco from '../assets/profile';
import ScheduleIco from '../assets/schedule';
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
      height:'10%',
      
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
     <HomeIco tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

}]}/> 
    <Text   style={
      {
        width:"100%",
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Domů</Text>
  </View>
  )
}

const ScheduleIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
   <ScheduleIco tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

}]}/> 
    <Text style={
      {
        width:"100%",
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Rozvrh</Text>
  </View>
  )
}

const GradesIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
      <GradesIco tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

}]}/>
    <Text style={
      {
        width:"100%",
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Známky</Text>
  </View>
  )
}

const AbsenceIcon = ({focused}:any) =>{
  return(
    <View style={styles.IconContainer}>
    <AbsenceIco tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

}]}/>
    <Text style={
      {
        width:'100%',
        color: focused ? "#de6830" : "#c7c7cc",
      }
    }>Absence</Text>
  </View>
  )
}

const ProfileIcon = ({focused}:any) =>{
  return(
  <View style={styles.IconContainer}>
    <ProfileIco tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

}]}/>
    <Text style={
      {
        width:"100%",
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
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
  }
});
