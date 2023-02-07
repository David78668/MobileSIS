import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../declarations/colors';
import Home from '../pages/Home';
import React from 'react';
import Schedule from '../pages/Schedule';
import Grades from '../pages/Grades';
import Absence from '../pages/Absence';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import FirstPage from '../pages/AAFirstPage';
import Settings from '../pages/Settings';

const windowWidth = Dimensions.get('window').width;
export const navbarHeight = 75;

const Tab = createBottomTabNavigator();
export default function CustomTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                height: Platform.OS == 'android' ? navbarHeight : navbarHeight + 10,
                paddingTop: Platform.OS == 'android' ? 0 : 10,
                backgroundColor: Colors.PrimaryBackgroundColor,
                borderTopColor: 'rgba(0, 0, 0, 0.05)',
                borderTopWidth: 5,
                paddingHorizontal: 20
            }}}>

            <Tab.Screen name="FirstPage" component={FirstPage} options={{ tabBarItemStyle: { display: 'none' } }} />
            <Tab.Screen name="Settings" component={Settings} options={{ tabBarItemStyle: { display: 'none' } }} />
            
            <Tab.Screen name="Login" component={Login} options={{ tabBarItemStyle: { display: 'none' }}} /> 
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: HomeIcon }} />
            <Tab.Screen name="Schedule" component={Schedule} options={{ tabBarIcon: ScheduleIcon }} />
            <Tab.Screen name="Grades" component={Grades} options={{ tabBarIcon: GradesIcon }} />
            <Tab.Screen name="Absence" component={Absence} options={{ tabBarIcon: AbsenceIcon }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ProfileIcon }} />
        </Tab.Navigator>
    );
}

const colors = {
    focused: Colors.TertiaryBackgroundColor,
    unfocused: Colors.SecondaryTextColor
}

function HomeIcon({ focused }: any) {
    return (
        <View style={styles.iconContainer}>
            <Feather name='home' size={25} color={focused ? colors.focused : colors.unfocused} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Domů</Text>
        </View>
    )
}

function ScheduleIcon({ focused }: any) {
    return (
        <View style={styles.iconContainer}>
            <Feather name='trello' size={25} color={focused ? colors.focused : colors.unfocused} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Rozvrh</Text>
        </View>
    )
}

function GradesIcon({ focused }: any) {
    return (
        <View style={styles.iconContainer}>
            <Feather name='bookmark' size={25} color={focused ? colors.focused : colors.unfocused} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Známky</Text>
        </View>
    )
}

function AbsenceIcon({ focused }: any) {
    return (
        <View style={styles.iconContainer}>
            <Feather name='calendar' size={25} color={focused ? colors.focused : colors.unfocused} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Absence</Text>
        </View>
    )
}

function ProfileIcon({ focused }: any) {
    return (
        <View style={styles.iconContainer}>
            <Feather name='at-sign' size={25} color={focused ? colors.focused : colors.unfocused} />
            <Text style={[styles.label, focused ? styles.focused : styles.unfocused ]}>Profil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 10,
        marginTop: 3,
        fontWeight: 'bold',
        opacity: 0.8
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    focused: {
        color: Colors.TertiaryBackgroundColor,
        fontWeight: '900'
    },
    unfocused: {
        color: Colors.SecondaryTextColor
    }
});