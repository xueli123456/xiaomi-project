<template>
    <div class="guess-box">
        <div class="guess-top">
            <img src="../../assets/images/carts/like.jpg" alt="">
        </div>
        <div class="cgoods-list">
            <div class="cart-goods" :key="pid"
                 v-for="(p,pid) in data"
                @click=" pSelected(pid)">
                <a href="#/detail">
                    <div class="goods-img">
                        <img src="../../assets/images/carts/like.jpg" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="goods-name">小米CC9 Pro 8GB+128GB</div>
                        <div class="goods-price">3099</div>
                    </div>
                </a>
            </div>
            <div class="cart-goods">
                <a href="/#">
                    <div class="goods-img">
                        <img src="../../assets/images/carts/like.jpg" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="goods-name">小米CC9 Pro 8GB+128GB</div>
                        <div class="goods-price">3099</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guess",
        props:['data'],
        methods: {
            pSelected (sid) {
                this.$emit('pAll', sid)
            },
        }
    }
</script>

<style scoped>
    .guess-box {
        background: #fff;
        text-align: left;
        padding-bottom: .468rem;
    }
    .guess-top{
        width:3.75rem;
    }
    .guess-top img{
        width:3.75rem;
        height: 0.625rem;
    }
    .cgoods-list{
        overflow: hidden;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
    }
    .cart-goods{
        overflow: hidden;
        width: 49%;
    }
    .cart-goods a{
        display: block;
    }
    .goods-img{
        position: relative;
    }
    .goods-img img{
        width: 1.856rem;
        height: 1.856rem;
        display: block;
    }
    .goods-info{
        padding: .0937rem .135rem .115rem;
    }
   .goods-name{
       font-size: .145rem;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       color: #3c3c3c;
   }
    .goods-price{
        font-size: .167rem;
        display: inline-block;
        color: #ff6700;
        margin-top: .052rem;
        position: relative;
        padding-left: .1rem;
        line-height: 0.167rem;
    }
    .goods-price:before {
        content: "￥";
        position: absolute;
        left: 0;
        top: 0;
        font-size: .126rem;
        text-decoration: none;
    }
</style>