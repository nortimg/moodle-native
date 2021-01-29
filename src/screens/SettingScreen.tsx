import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const SettingScreen: React.FC = ({}) => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
