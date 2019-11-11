<template>
    <!--商品价格-->
    <div class="pro-price">
        <div  class="price cur-price">{{data.cur}}</div>
        <div class="price origin-price">{{data.origin}}</div>
    </div>
</template>
<script>
    export default {
        name: "proPrice",
        props:['data']
    }
</script>

<style scoped>
    .cur-price{
        color: #ff6700;
        font-size: .25rem;
        padding-left: .15rem!important;

    }
    .cur-price:before{
        font-size: .19rem;
        /**/
    }
    .origin-price{
        margin-left: .083rem;
        color: rgba(0,0,0,.54);
        font-size: .125rem;
        text-decoration: line-through;
    }
    .pro-price{
        padding: .167rem .167rem;
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