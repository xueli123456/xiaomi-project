<template>
    <div class="new-phone">
        <div class="choice_item" v-for="(pitem,pid) in data" :key="pid">
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
</template>

<script>
    export default {
        name: "newPhone",
        props:['data'],
    }
</script>

<style scoped>
    .new-phone{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }

    /*.choice_item:first-child, .choice_item:nth-child(3),.choice_item:nth-child(5) {*/
    /*    margin-right: .03rem;*/
    /*}*/
    .choice_item{
        display: inline-block;
        width: 1.78rem;
        margin-top: 0.0347rem;
        position: relative;

    }
    .item-img{
        position: relative;
        overflow: hidden;
        border-top-left-radius:0.08rem;
        border-top-right-radius:0.08rem;
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
        border-bottom-left-radius:0.08rem;
        border-bottom-right-radius:0.08rem;
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