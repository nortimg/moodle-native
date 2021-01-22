import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const CalendarScreen: React.FC = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Calendar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
