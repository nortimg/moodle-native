import React from 'react';
import {TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'

export const ScreensObjectData = (route) => {
    const navigation = useNavigation();
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const ScreensData = {
        Home: {
            headerTitle: 'ОГБПОУ "ТОМСКИЙ ТЕХНИКУМ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
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
        },
        Calendar: {
            headerTitle: 'Календарь',
        },
        Notification: {
            headerTitle: 'Уведомление',
        },
        Message: {
            headerTitle: 'Сообщения',
        },
        Files: {
            headerTitle: 'Файлы'
        },
        Login: {
            headerTitle: 'Логин'
        }
    }
    return ScreensData[routeName];
}
