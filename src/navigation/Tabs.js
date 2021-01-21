import React from 'react'
import {View, Image} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {MainScreen} from "../screens/MainScreen";
import {CalendarScreen} from "../screens/CalendarScreen";
import {THEME} from "../theme";

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
                                tintColor: focused ? THEME.MAIN_COLOR : 'black'
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
                                tintColor: focused ? THEME.MAIN_COLOR : 'black'
                            }}
                        />
                    )

                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
