import React from 'react'
import {HomeScreen} from "../screens/HomeScreen";
import {CalendarScreen} from "../screens/CalendarScreen";
import {NotificationScreen} from "../screens/NotificationScreen";
import {MessageScreen} from "../screens/MessageScreen";
import {THEME} from "../theme";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            barStyle={{backgroundColor: THEME.MAIN_COLOR}}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'Calendar'}
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="calendar-blank" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'Message'}
                component={MessageScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="forum" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
