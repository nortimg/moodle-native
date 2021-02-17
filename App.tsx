/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useState} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {THEME} from "./src/theme";
import Tabs from './src/navigation/Tabs'
import {ScreensObjectData} from "./src/navigation/ScreensObjectData";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {CustomDrawerContent} from "./src/navigation/CustomDrawerContent";
import {FilesScreen} from "./src/screens/FilesScreen";
import {SettingScreen} from "./src/screens/SettingScreen";

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => (
    <Stack.Navigator
        initialRouteName={"MainScreen"}
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR,
            },
            headerTintColor: '#fff',
        }}>
        <Stack.Screen
            name={"MainScreen"}
            component={Tabs}
            options={({route}) => ({...ScreensObjectData(route)})}
        />
        <Stack.Screen
            name={"Files"}
            component={FilesScreen}
            options={() => ({
                headerTitle: 'Файлы',
            })}
        />
        <Stack.Screen
            name={"Settings"}
            component={SettingScreen}
            options={() => ({
                headerTitle: 'Настройки',
            })}
        />
    </Stack.Navigator>
)


const App = () => {
    const [isReady, setIsReady] = useState(true)

    if (!isReady) { // Если данные с сервера не загружены будем выводить Loading Component
        return <View>App</View>
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name={'Main'} component={Main}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    buttonImageIcon: {
        width: 25,
        height: 25,
    },
    buttonToucheOpacity: {
        margin: 12,
        marginTop: 17
    }
})

export default App;
