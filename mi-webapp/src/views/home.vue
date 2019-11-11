<template>
    <div class="home">
        <mi-header></mi-header>
        <home-nav v-if="homeInfo" :data="homeInfo"></home-nav>
        <div class="empty"></div>
    </div>
</template>

<script>
import header from '../components/home/header'
import navs from '../components/home/home-nav'
import homeApi from '../apis/homeApi'
    export default {
        name: "home",
        components:{
            "mi-header":header,
            "home-nav":navs
        },
        data(){
            return{
                homeInfo:[]
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initPageData () {
                let data = await homeApi.getHomeInfo()
                this.homeInfo = data
                // eslint-disable-next-line no-console
                console.log(data);
            },
        },
        created() {
            this._initPageData()
        },

    }
</script>

<style scoped>
    .empty{
        height: 0.6rem;
        width:3.75rem
    }
    .home{
        overflow: hidden;
        width:3.75rem
    }

</style>