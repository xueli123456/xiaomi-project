<template>
    <!-- //轮播图开始-->
    <div  class="swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide box1" v-for="thumb in data" :key="thumb">
                <img :src="thumb" alt="">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets"></div>
    </div>
    <!-- //轮播图结束-->
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "swiper",
        data(){
            return{
            }
        },
        props:['data'],
        mounted(){
            this._initSwiper()
        },
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            }
        }
    }
</script>

<style scoped>
    @import '../../../node_modules/swiper/css/swiper.css';
    .swiper-container {
        width:3.75rem;
        height: 4.125rem;
        background-color:gainsboro;
    }
    .box1, .box2, .box3{
        width:3.75rem;
        height: 4.125rem;
    }
    .swiper-wrapper img{
        width: 3.75rem;
        display: block;
        height: 4.125rem;
    }
</style>