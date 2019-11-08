import {BASEURL} from "../commons/Config"

const CATEGORYURL = `${BASEURL}/category`


export default {

    /**
     * 获取店铺的信息
     */
    // getCategoryInfo (cb) {
    //     fetch(CATEGORYURL).then(res=>{
    //         res.json().then(cb);
    //     })
    // }
    async getCategoryInfo() {
        let res = await fetch(CATEGORYURL)
        let data = await res.json()
        return data
    }
}
