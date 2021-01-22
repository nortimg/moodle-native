import React from 'react'
import {View, Image} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {MainScreen} from "../screens/MainScreen";
import {CalendarScreen} from "../screens/CalendarScreen";
import {NotificationScreen} from "../screens/NotificationScreen";
import {THEME} from "../theme";
import {MessageScreen} from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={MainScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/img/home.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? THEME.MAIN_COLOR : '#bdc3c7'
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Calendar'}
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/img/calendar.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? THEME.MAIN_COLOR : '#bdc3c7'
                            }}
                        />
                    )

                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/img/notification.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? THEME.MAIN_COLOR : '#bdc3c7'
                            }}
                        />
                    )

                }}
            />
            <Tab.Screen
                name={'Message'}
                component={MessageScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/img/messenger.png')}
                            resizeMode={'contain'}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? THEME.MAIN_COLOR : '#bdc3c7'
                            }}
                        />
                    )

                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
