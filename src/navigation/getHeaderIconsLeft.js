import React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {TouchableOpacity, Image} from "react-native";

function getHeaderIconsLeft(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return (
                <TouchableOpacity onPress={() => console.log('menu')}>
                    <Image
                        source={require('../../assets/img/menu.png')}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'white',
                            marginLeft: 15,
                            marginTop: 7
                        }}
                    />
                </TouchableOpacity>
            )
    }
}

export default getHeaderIconsLeft
