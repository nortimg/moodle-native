import React, {useState} from 'react'
import {Appbar} from "react-native-paper";
import {View, StyleSheet} from "react-native";
import {MenuSearch} from "../ComponentsUI/MenuSearch";
import {AppWrapperBar} from "./AppWrapperBar";

export const AppBarComponent: React.FC = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const closeModal = () => setVisibleModal(false)
    const openModal = (setVisibleModalFake: any) => setVisibleModalFake(true)

    return (
        <View style={styles.main}>
            <Appbar.Header>
                <AppWrapperBar
                    title={'Moodle'}
                    subtitle={'СДО ОГБПОУ "ТОМСКИЙ ТЕХНИКУМ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"'}
                    actions={[
                        {icon: 'magnify', onPress: () => openModal(setVisibleModal), color: '#fff'},
                        {icon: 'dots-vertical', color: '#ffffff'},
                    ]}
                />
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
