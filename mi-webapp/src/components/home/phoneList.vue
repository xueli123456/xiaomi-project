<template>
    <div class="phone-list">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :data-history="pid+1"  v-for="(pitem,pid) in data" :key="pid" >
                    <div class="choice_item" >
                        <div class="item-img">
                            <img :src="pitem.pic" alt="">
                            <div class="item-tag">
                                <img :src="pitem.tag" alt="">
                            </div>
                        </div>
                        <div class="item-center">
                            <div class="center_name">{{pitem.title}}</div>
                            <div class="center_brief">{{pitem.des}}</div>
                            <div class="center_price">
                                {{pitem.price}}<span>起</span>
                                <span class="price_old">
                                    <s>￥{{pitem.oldprice}}</s>
                                </span>
                            </div>
                            <div class="center_btn"> 立即购买</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "phoneList",
        mounted(){
            this._initSwiper()
        },
        props:['data'],
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container', {
                    loop : true,
                    spaceBetween: 5,
                    // initialSlide:8,
                    slidesPerView: 2,
                    centeredSlides: true,
                    slideToClickedSlide: true,
                    grabCursor: true,
                    history: 'historyApp.php?page=slide',
                })
            }
        }
    }
</script>

<style scoped>
    .phone-list{
        background-color: rgb(37, 1, 104);
    }
    .swiper-container {
        width: 100%;
        /*height: 300px;*/
    }
    .swiper-slide {
        background-color:white;
        margin-top: 0.03rem;
        color:#000;
        text-align: center;
        float: left;
        width: 1.58rem;
    }

    .choice_item:first-child, .choice_item:nth-child(3),.choice_item:nth-child(5) {
        margin-right: .03rem;
    }
    .choice_item{
        display: inline-block;
        width: 1.78rem;
        margin-top: 0.0347rem;
        position: relative;
    }
    .item-img{
        position: relative;
        overflow: hidden;
    }
    .item-img img{
        width: 1.79rem;
        height: 1.458rem;
        display: block;
    }
    .item-tag{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index:10;
        width: 0.52rem;
        height:0.52rem;
        /*background-color: hotpink;*/
    }
    .item-tag img{
        position: absolute;
        top:0;
        right: 0;
        display: inline-block;
        width: 0.52rem;
        height:0.52rem;
    }
    .item-center {
        text-align: center!important;
        padding: 0rem .14rem;
        background-color: #fff;
        position: relative;
        overflow: hidden;
    }
    .center_name,.center_brief{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .center_name{
        height: 0.16rem;
        font-size: .145rem;
        color: rgba(0,0,0,.87);
        font-weight: bold;
    }
    .center_brief {
        margin-top: .0325rem;
        font-size: .12rem;
        line-height: .156rem;
        color: rgba(0,0,0,.54);
        height: 0.18rem;
    }
    .center_price {
        font-size: .145rem;
        color: #ea625b;
        height: 0.218rem;
        line-height: 0.218rem;
        position: relative;
        display: inline-block;
        padding-left: .0729em;
        font-weight: 700;
    }
    .center_btn{
        width: 1.04rem;
        background: #ea625b;
        border-radius: .026rem;
        text-align: center;
        color: #fff;
        font-size: .125rem;
        padding: .083rem 0;
        font-weight: 700;
        margin: 0.1rem auto;
    }
    .price_old {
        display: inline-block;
        margin: 0 .052rem;
        font-size: .12rem;
        color: rgba(0,0,0,.54);
    }
    .center_price span:first-child{
        font-size: 0.12rem;
    }
</style>