import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react'
import {TouchableOpacity, Image} from "react-native";

function getHeaderIconsRight(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'Home':
            return (
                <TouchableOpacity onPress={() => console.log('fired')}>
                    <Image
                        source={require('../../assets/img/search.png')}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'white',
                            marginRight: 15
                        }}
                    />
                </TouchableOpacity>
            )
    }
}

export default getHeaderIconsRight
