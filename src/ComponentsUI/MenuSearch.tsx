import React, {useState} from 'react';
import {Provider, Portal, Button, Searchbar, Modal} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from "react-native";

interface Props {
    closeModal: any,
    visible: boolean
}

export const MenuSearch: React.FC<Props> = ({visible, closeModal}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);
    return (
        <View style={styles.modalWrapper}>
            <Provider>
                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={closeModal}
                        contentContainerStyle={styles.modalContent}>
                        <Searchbar
                            placeholder={"Поиск..."}
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                        <Button mode="contained" style={styles.btnStyle}>Найти</Button>
                    </Modal>
                </Portal>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        marginTop: -100,
        padding: 20
    },
    modalWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: Dimensions.get('window').height,
        width: '100%'
    },
    btnStyle: {
        marginTop: 30
    }
});
