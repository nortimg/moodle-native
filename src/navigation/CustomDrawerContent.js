import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {THEME} from "../theme";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions} from '@react-navigation/routers'

export function CustomDrawerContent(props) {
    let ScreenNav = props.state.routes[0].state
    let ScreenNavName = null
    if(ScreenNav){
        ScreenNav = props.state.routes[0].state.routes[1]
        if(ScreenNav){
            ScreenNavName = props.state.routes[0].state.routes[1].name
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.wrapperUser, styles.row]}>
                <Image
                    source={require('../../assets/img/user.jpg')}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.fio}>Султан Гизатулин</Text>
                    <Text style={styles.loginSlag}>@gr484_gsk</Text>
                </View>
            </View>
            <TouchableOpacity underlayColor='black' style={[styles.navigation, {
                backgroundColor: ScreenNavName === 'Files' ? THEME.WHITE_GREY_COLOR : '#fff'
            }]} onPress={() => {
                if(ScreenNav){
                    props.navigation.dispatch(StackActions.popToTop());
                }
                props.navigation.navigate('Files');
            }}>
                <View style={styles.navigationItem}>
                    <MaterialCommunityIcons name="folder" color={THEME.GREY_COLOR} size={26}/>
                    <Text style={styles.navigationTitle}>Файлы</Text>
                </View>
            </TouchableOpacity >
            <TouchableOpacity underlayColor='black' style={[styles.navigation, {
                backgroundColor: ScreenNavName === 'Settings' ? THEME.WHITE_GREY_COLOR : '#fff'
            }]} onPress={() => {
                if(ScreenNav){
                    props.navigation.dispatch(StackActions.popToTop());
                }
                props.navigation.navigate('Settings')
            }}>
                <View style={styles.navigationItem}>
                    <MaterialCommunityIcons name="cog" color={THEME.GREY_COLOR} size={26}/>
                    <Text style={styles.navigationTitle}>Настройки</Text>
                </View>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 0.2,
        borderBottomColor: '#ccc'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    wrapperUser: {
        padding: 15,
        flexDirection: 'row',
    },
    fio: {
        color: THEME.MAIN_COLOR,
        fontFamily: 'OpenSans-Bold',
        marginLeft: 8,
        marginTop: 10,
        fontSize: 16
    },
    navigation: {
        width: "100%"
    },
    navigationItem: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    navigationTitle: {
        color: THEME.GREY_COLOR,
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        marginLeft: 15
    },
    loginSlag: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: THEME.GREY_COLOR,
        marginLeft: 8,
        marginTop: 5
    }
});
