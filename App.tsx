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
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {MainScreen} from "./src/screens/MainScreen";
import getHeaderTitle from "./src/navigation/getHeaderTitle";
import getHeaderIconsRight from "./src/navigation/getHeaderIconsRight";
import getHeaderIconsLeft from "./src/navigation/getHeaderIconsLeft";
import {THEME} from "./src/theme";
import Tabs from './src/navigation/Tabs'
declare const global: { HermesInternal: null | {} };

const App = () => {
    const [isReady, setIsReady] = useState(true)

    if (!isReady) { // Если данные с сервера не загружены будем выводить Loading Component
        return <View>App</View>
    }
    const Stack = createStackNavigator();
    return (
            <NavigationContainer>
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
                        options={({route}) => ({
                            headerTitle: getHeaderTitle(route),
                            headerRight: () => (
                                getHeaderIconsRight(route)
                            ),
                            headerTitleStyle: {
                                fontSize: 20
                            },
                            headerLeft: () => (
                                getHeaderIconsLeft(route)
                            )
                        })}
                    />
                </Stack.Navigator>
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
