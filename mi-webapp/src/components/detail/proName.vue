<template>
    <div class="detail-pro-name">
        <div class="pro-name-con">
            <div class="pro-name-left">
                <span  class="pretext">秒杀价</span>
                <div class="price">2699</div>
            </div>
            <div class="pro-name-right">
                <span class="proname-text">距结束</span>
                <span class="hour">08</span>
                <span class="spe">:</span>
                <span class="minut">45</span>
                <span class="spe">:</span>
                <span class="second wh">05</span>
            </div>
        </div>
        <div class="pro-name-foot">
            <img :src="data.pic" alt="">
            <span>{{data.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "proName",
        props:['data']
    }
</script>

<style scoped>
    .pro-name-con{
        width:3.416rem;
        background-color: #f56600;
        color: #fff;
        padding: 0 .1667rem;
        line-height: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .16rem!important;
    }
    .pro-name-right{
        text-align: right;
        font-size: .12rem;
    }
    .proname-text,.spe{
        margin: 0 .026rem;
    }
    .pro-name-foot{
        padding: .167rem .167rem 0;
        line-height: 0.315rem;
        font-size: 0.208rem;
        text-align: left;
    }
    .pro-name-foot img{
        width: 0.455rem;
        height: 0.218rem;
        margin-right: .05rem;
    }
    .pro-name-left{
        min-width: 0.52rem;
        text-align: left;
    }
    .price {
        position: relative;
        padding-left: .11rem;
        line-height: 0.1667rem;
        display: inline-block;
    }
    .price:before {
        content: "￥";
        position: absolute;
        left: 0;
        top: 0;
        font-size: .13rem;
        text-decoration: none;
    }


</style>