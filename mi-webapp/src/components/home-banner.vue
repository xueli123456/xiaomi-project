<template>
    <div  class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1">
                <img src="../assets/images/home-img/banner1.jpg" alt="">
            </div>
            <div class="swiper-slide box2">
                <img src="../assets/images/home-img/banner2.jpg" alt="">
            </div>
            <div class="swiper-slide box3">
                <img src="../assets/images/home-img/banner3.jpg" alt="">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets"></div>
    </div>
</template>

<script>
    import  Swiper from 'swiper'
    export default {
        name: "home-banner",
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
        }

    }

</script>
<style scoped>
    @import '../../node_modules/swiper/css/swiper.css';
    .swiper-container {
        width:3.75rem;
        height: 1.88rem;
        background-color:gainsboro;
    }
    .box1,.box2,.box3{
        width:3.75rem;
        height: 1.88rem;
    }
    .swiper-wrapper img{
        width: 3.75rem;
    }
</style>