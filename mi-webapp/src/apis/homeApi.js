import {BASEURL} from "../commons/Config"

const HOMEURL = `${BASEURL}/home`


export default {

    /**
     * 获取店铺的信息
     */
    async getHomeInfo () {
        let res = await fetch(HOMEURL)
        let data = await res.json()
        return data
    }
}
