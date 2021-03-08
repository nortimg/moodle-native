import axios from 'axios';

export default class API {
    public static host: string = 'https://moodle.tomtit.tomsk.ru'

    public static async getRecentItems() {
        return await this.callWSFunction(
            'fa70397490b2bcbc2c68fbc658126df6', 
            'block_recentlyaccesseditems_get_recent_items'
        )
    }

    public static async login(username: string, password: string) {
        return await axios.post(
            `${this.host}/login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`
        )
    }

    public static async callWSFunction(token: string, fnName: string) {
        return await axios.post(
            `${this.host}/webservice/rest/server.php?wstoken=${token}&wsfunction=${fnName}&moodlewsrestformat=json`
        )
    }
}