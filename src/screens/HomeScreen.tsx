import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const HomeScreen: React.FC = ({}) => {
    return (
        <View style={styles.center}>
            <Text>ADSDSADASD</Text>
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
