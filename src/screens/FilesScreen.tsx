import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const FilesScreen: React.FC = ({}) => {
    return (
        <View>
            <Text>Files</Text>
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
