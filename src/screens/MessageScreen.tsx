import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const MessageScreen: React.FC = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Messages</Text>
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
