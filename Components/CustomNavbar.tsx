import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ScheduleIcon, GradesIcon, AbsenceIcon, ProfileIcon } from '../assets/navbarIcons';
import Home from '../Pages/Home';
import React from 'react';
import Schedule from '../Pages/Schedule';
import Grades from '../Pages/Grades';
import Absence from '../Pages/Absence';
import Profile from '../Pages/Profile';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const navbarHeight = 65;
const Tab = createBottomTabNavigator();
export default function CustomTabNavigation() {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: false, tabBarStyle: {
        position: 'absolute',
        height: navbarHeight,
      }
    }} >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: HomeIco }} />
      <Tab.Screen name="Schedule" component={Schedule} options={{ tabBarIcon: ScheduleIco }} />
      <Tab.Screen name="Grades" component={Grades} options={{ tabBarIcon: GradesIco }} />
      <Tab.Screen name="Absence" component={Absence} options={{ tabBarIcon: AbsenceIco }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ProfileIco }} />
    </Tab.Navigator>
  );
}

const HomeIco = ({ focused }: any) => {
  return (
    <View style={styles.IconContainer}>
      <HomeIcon tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

      }]} />
      <Text style={[
        {
          color: focused ? "#de6830" : "#c7c7cc",
        }, styles.Label]
      }>Domů</Text>
    </View>
  )
}

const ScheduleIco = ({ focused }: any) => {
  return (
    <View style={styles.IconContainer}>
      <ScheduleIcon tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

      }]} />
      <Text style={[
        {
          color: focused ? "#de6830" : "#c7c7cc",
        }, styles.Label]
      }>Rozvrh</Text>
    </View>
  )
}

const GradesIco = ({ focused }: any) => {
  return (
    <View style={styles.IconContainer}>
      <GradesIcon tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

      }]} />
      <Text style={[
        {
          color: focused ? "#de6830" : "#c7c7cc",
        }, styles.Label]
      }>Známky</Text>
    </View>
  )
}

const AbsenceIco = ({ focused }: any) => {
  return (
    <View style={styles.IconContainer}>
      <AbsenceIcon tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

      }]} />
      <Text style={[
        {
          color: focused ? "#de6830" : "#c7c7cc",
        }, styles.Label]
      }>Absence</Text>
    </View>
  )
}

const ProfileIco = ({ focused }: any) => {
  return (
    <View style={styles.IconContainer}>
      <ProfileIcon tint={focused ? "#de6830" : "#c7c7cc"} style={[styles.Icon, {

      }]} />
      <Text style={[
        {
          color: focused ? "#de6830" : "#c7c7cc",
        }, styles.Label]
      }>Profil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Icon: {
    width: windowWidth * 0.059,
    height: windowWidth * 0.059,
  },

  Label: {
    width: "100%",
    fontSize: 10,
  },

  IconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
