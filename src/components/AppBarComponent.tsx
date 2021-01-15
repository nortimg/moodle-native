import React, {useState} from 'react'
import {Appbar} from "react-native-paper";
import {Text, View, StyleSheet} from "react-native";
import {MenuSearch} from "../ComponentsUI/MenuSearch";

export const AppBarComponent: React.FC = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const closeModal = () => setVisibleModal(false)
    const openModal = () => setVisibleModal(true)
    return (
        <View style={styles.main}>
            <Appbar.Header>
                <Appbar.Content title={'Moodle'} subtitle={'СДО ОГБПОУ "ТОМСКИЙ ТЕХНИКУМ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"'}/>
                <Appbar.Action icon={'magnify'} onPress={() => openModal()}/>
                <Appbar.Action icon="dots-vertical" color={'#fff'}/>
                <View>

                </View>
            </Appbar.Header>
            <MenuSearch closeModal={closeModal} visible={visibleModal}/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        position: 'relative'
    }
});
