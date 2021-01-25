import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export const ScreensObjectData = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const ScreensData = new Map();
    ScreensData.set('Home', {
        headerTitle: 'ОГБПОУ "ТОМСКИЙ ТЕХНИКУМ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"',
        headerLeft: () => (
            <TouchableOpacity onPress={() => console.log('fired')}>
                <MaterialCommunityIcons name="menu" color={'#fff'} size={30} style={{
                    marginLeft: 15
                }}/>
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => console.log('fired')}>
                <MaterialCommunityIcons name="magnify" color={'#fff'} size={30} style={{
                    marginRight: 15
                }}/>
            </TouchableOpacity>
        ),
    })
    ScreensData.set('Calendar', {
        headerTitle: 'Календарь',
    })
    ScreensData.set('Notification', {
        headerTitle: 'Уведомление',
    })
    ScreensData.set('Message', {
        headerTitle: 'Сообщения',
    })
    return ScreensData.get(routeName);
}



