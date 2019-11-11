<template>
    <div>
<!-- //轮播图开始-->
        <div  class="swiper-container" >
            <div class="swiper-wrapper" v-if="data" >
                <div class="swiper-slide box1" >
                    <img :src="data.banner.src1" alt="">
                </div>
                <div class="swiper-slide box2" >
                    <img :src="data.banner.src2" alt="">
                </div>
                <div class="swiper-slide box3">
                    <img :src="data.banner.src3" alt="">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets"></div>
        </div>
<!--        //轮播图结束-->
<!--        //分类-->
        <div class="home-list" >
            <a href="#" v-for="(item,index) in data.listImg" :key="index">
                <img :src="item.name" alt="">
            </a>
        </div>
<!--        //结束-->
        <div class="hdivider_line"></div>
        <div class="good-thing" >
            <div class="good-thing-left">
                <a href="" >
                    <img :src="data.newGoods.src1" alt="">
                </a>
            </div>
            <div class="good-thing-right">
                <a href=""  >
                    <img :src="data.newGoods.src2" alt="">
                </a>
                <a href="">
                    <img :src="data.newGoods.src3" alt="">
                </a>
            </div>
        </div>
        <div class="carnival">
            <img :src="data.newGoods.src4" alt="">
        </div>
        <div class="hdivider_line"></div>
        <remb-choice :data="data.goods" v-if="data.goods"></remb-choice>

    </div>

</template>

<script>
    import  Swiper from 'swiper'
    import choice from './choice'
    export default {
        name: "recommend",
        data(){
            return{
            }
        },
        mounted(){
            this._initSwiper()
        },
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            }
        },
        props: ['data'],
        components:{
           "rembChoice":choice
        }
    }
</script>

<style scoped>
    @import '../../../node_modules/swiper/css/swiper.css';
    .swiper-container {
        width:3.75rem;
        height: 1.88rem;
        background-color:gainsboro;
        margin-top:0.6rem;
    }
    .box1, .box2, .box3{
        width:3.75rem;
        height: 1.88rem;
    }
    .swiper-wrapper img{
        width: 3.75rem;
        display: block;
        height: 1.88rem;
    }
    .home-list a{
        display: inline-block;
        width: 0.75rem;
        height: 0.8rem;
    }
    .home-list img{
        display: block;
        width: 0.75rem;
        height: 0.8rem;
    }
    .home-list{
        background-color: white;
    }
    .hdivider_line{
        height: 0.08rem;
        background-color: rgb(245, 245, 245);
    }
    .good-thing{
        height: 2.64rem;
        width: 3.75rem;
        border-bottom: 0.08rem solid rgb(245, 245, 245);
    }
    .good-thing-left, .good-thing-left img{
        display: inline-block;
        width: 1.86rem;
        height: 2.64rem;
        margin-right: 0.03rem;
        float: left;
    }
    .good-thing-right img{
        display: inline-block;
        width: 1.86rem;
        height: 1.31rem;
    }
    .carnival,.carnival img{
        width: 3.75rem;
        height: 1.45rem;
    }
</style>