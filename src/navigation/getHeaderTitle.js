import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    console.log(routeName)
    switch (routeName) {
        case 'Home':
            return 'СДО ОГБПОУ "ТОМСКИЙ ТЕХНИКУМ ИНФОРМАЦИОННЫЙ ТЕХНОЛОГИЙ"'
        case 'Calendar':
            return 'Календарь'
        case 'Notification':
            return 'Уведомления'
        case 'Message':
            return 'Сообщения'
    }
}

export default getHeaderTitle

