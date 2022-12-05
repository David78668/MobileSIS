import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../pages/Home';
import React from 'react';
import Schedule from '../pages/Schedule';
import Grades from '../pages/Grades';
import Absence from '../pages/Absence';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import FirstPage from '../pages/AAFirstPage';

const windowWidth = Dimensions.get('window').width;
export const navbarHeight = 75;

const Tab = createBottomTabNavigator();
export default function CustomTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                height: Platform.OS == 'android' ? navbarHeight : navbarHeight + 10,
                paddingTop: Platform.OS == 'android' ? 0 : 20,
                borderTopColor: '#eaeaf1',
                borderTopWidth: 3,
                paddingHorizontal: 20
            }
        }}>
            <Tab.Screen name="FirstPage" component={FirstPage} options={{ tabBarItemStyle: { display: 'none' }}} /> 
            <Tab.Screen name="Login" component={Login} options={{ tabBarItemStyle: { display: 'none' }}} /> 
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: HomeIcon }} />
            <Tab.Screen name="Schedule" component={Schedule} options={{ tabBarIcon: ScheduleIcon }} />
            <Tab.Screen name="Grades" component={Grades} options={{ tabBarIcon: GradesIcon }} />
            <Tab.Screen name="Absence" component={Absence} options={{ tabBarIcon: AbsenceIcon }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ProfileIcon }} />
        </Tab.Navigator>
    );
}

const active = '#de6830';
const inactive = 'rgba(0, 0, 0, 0.2)';

const HomeIcon = ({ focused }: any) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name='home' size={25} color={focused ? active : inactive} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Domů</Text>
        </View>
    )
}

const ScheduleIcon = ({ focused }: any) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name='trello' size={25} color={focused ? active : inactive} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Rozvrh</Text>
        </View>
    )
}

const GradesIcon = ({ focused }: any) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name='bookmark' size={25} color={focused ? active : inactive} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Známky</Text>
        </View>
    )
}

const AbsenceIcon = ({ focused }: any) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name='calendar' size={25} color={focused ? active : inactive} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Absence</Text>
        </View>
    )
}

const ProfileIcon = ({ focused }: any) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name='at-sign' size={25} color={focused ? active : inactive} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Profil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 10,
        marginTop: 3,
        fontWeight: '500'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    focused: {
        color: '#de6830',
        fontWeight: 'bold'
    },
    unfocused: {
        color: 'rgba(0, 0, 0, 0.3)'
    }
});