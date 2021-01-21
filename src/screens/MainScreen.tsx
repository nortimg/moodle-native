import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const MainScreen: React.FC = ({}) => {
    return (
        <View style={styles.center}>
            <Text>App</Text>
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
