import React from 'react'
import {View, Text, StyleSheet, Button} from "react-native";

export const CalendarScreen: React.FC = () => {
    return (
        <View style={styles.center}>
            <Text>Calendar</Text>
            <Button title={'Перейти'} onPress={() => console.log('frredd')} />
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
