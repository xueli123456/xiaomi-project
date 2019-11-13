<template>
    <div class="cart-list">
        <div class="shop-info">
            <input type="checkbox"
                   v-model="data.checked"
                   @change="pSelected(sid)"
                   class="check goods-check goodsCheck"/>
            <div class="shop-info-img">
                <a href="#">
                    <img :src="data.pic" alt="">
                </a>
            </div>
            <div class="shop-info-text">
                <h4>
                     Redmi Note 8 6GB+128GB 梦幻蓝 128GB
                </h4>
                <div class="shop-price">
                    <div class="shop-pices">
                        <span data-v-5c6b2c62="">售价：</span>
                        <b class="price">1399</b>元
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus">
                            <i></i>
                        </a>
                        <span class="num">1</span>
                        <a class="plus" >
                            <i></i>
                        </a>
                    </div>
                    <div  class="delete">
                        <i  class="image-icons icon-delete"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartList",
        props: ['data','sid'],
        methods: {
            addNum(pid, flag) {
                this.$bus.$emit('num', pid, flag)
            }
        }
    }
</script>

<style scoped>
    .shop-info{
        padding: .125rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    input[type="checkbox"] {
        -webkit-appearance: none;
        outline: none;
    }

    input.check {
        background: url(../../assets/images/carts/check_press.png) no-repeat center left;
        background-size: 20px 20px;
        position: absolute;
        top: 50%;
        left: 10px;
        margin-top: -18px;
        width: 20px;
        height: 35px;
    }
    input.check:checked {
        background: url(../../assets/images/carts/check_press.png) no-repeat center left;
        background-size: 20px 20px;
    }

    input.goodsCheck:checked {
        background: url(../../assets/images/carts/check_press.png) no-repeat center left;
        background-size: 20px 20px;
    }

    input.check:checked {
        background: url(../../assets/images/carts/check_press.png) no-repeat center left;
        background-size: 20px 20px;
    }

    .checked {
        background: url(../../assets/images/carts/check_press.png) no-repeat left center;
        background-size: 20px 20px;
        position: absolute;
        top: 50%;
        left: 15px;
        margin-top: -18px;
        width: 20px;
        height: 35px;
    }

    .unchecked {
        background: url(../../assets/images/carts/check_normal.png) no-repeat left center;
        background-size: 20px 20px;
        position: absolute;
        top: 50%;
        left: 15px;
        margin-top: -18px;
        width: 20px;
        height: 35px;
    }
    .shop-info-img{
        display: block;
        position: relative;
        width: 0.9175rem;
        height:0.9175rem;
        margin-right: 0.104rem;
        margin-left: 0.35rem;
        border: 1px solid #eee;
        border-radius: 2px;
    }
    .shop-info-img img{
        width: 0.9175rem;
        height:0.9175rem;
    }
    .shop-info-text{
        width: 2.4rem;
        text-align: left;
    }
    .shop-info-text h4{
        font-size: .1458rem;
        line-height: .167rem;
        color: #666;
        margin-bottom: .0625rem;
        margin-right: .1562rem;
        padding: 0;
        font-weight: normal;
        width: 1.87rem;
    }
    .shop-pices{
        font-size: .125rem;
        color: #999;
        margin-bottom: .0625rem;
    }
    .shop-arithmetic{
        display: inline-block;
        border: 1px solid #eee;
        font-size: 0.16rem;
    }
    .minus,.plus{
        background-color: #fafafa;
        display: inline-block;
        width: .3125rem;
        height: .3125rem;
    }
    .minus i,.plus i,.image-icons{
        display: inline-block;
        width: .3125rem;
        height: .3125rem;
        position: relative;
        vertical-align: middle;
        text-align: center;
        background-image: url("../../assets/images/carts/min.png");
        background-size: .156rem .156rem;
        background-position: 50%;
        background-repeat: no-repeat;
    }
    .minus i{
        opacity: 0.3;
    }
    .plus i{
        background-image: url("../../assets/images/carts/add.png")!important;
    }
    .num{
        text-align: center;
        display: inline-block;
        width: .3125rem;
        height: .3125rem;
    }
    .delete{
        float: right;
        margin-right: .104rem;
        display: block;
    }
    .image-icons{
        background-size: cover;
        background-image: url("../../assets/images/carts/del.png")!important;
    }

</style>