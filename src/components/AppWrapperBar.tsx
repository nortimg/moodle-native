import {Appbar} from "react-native-paper";
import React from 'react'
interface Props {
    title: string,
    subtitle?: string,
    actions?: Array<object>,
    backAction?: object
    onPressBackAction?: any
}

export const AppWrapperBar: React.FC<Props> = ({title,subtitle, actions, backAction ,}) => {
    return (
        <>
            {backAction ? <Appbar.BackAction {...backAction}/> : null}
            <Appbar.Content title={title} subtitle={subtitle} />
            {actions ? actions.map(item => {
                return <Appbar.Action key={item.icon} {...item} />
            }) : null}
        </>
    )
}
