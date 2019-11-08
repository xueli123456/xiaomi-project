<template>
    <div>
        <header>
            <div class="catg-nav">
                <a href="#" class="catg-back">
                    <span></span>
                </a>
                <div class="catg-nav-title">购物车</div>
                <div class="catg-nav-operation">
                    <a href="#">
                        <i></i>
                    </a>
                </div>
            </div>
        </header>
        <div class="no-login">
            <a href="#">
                <span>登录后享受更多优惠</span>
                <em>去登录</em>
            </a>
        </div>
        <div class="no-goods">
            <a href="#">
                <span>购物车还是空的</span>
                <em>去逛逛</em>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        // methods:{
        //     user(){
        //         // eslint-disable-next-line no-console
        //         console.log("hah")
        //     }
        // }
    }
</script>

<style scoped>
    .catg-nav {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        align-items: center;
        height: 50px;
        background: #f2f2f2;
        color: #666;
        display: flex;
        width:3.75rem;
        font-size: 0.16rem;
    }
    .catg-back {
        display: inline-block;
        width: .31rem;
        margin: 0 .1rem;
        height: 0.26rem;

    }
    .catg-back span{
        display: inline-block;
        width: 0.26rem;
        height: 0.26rem;
        background: url("../assets/images/home-img/catg-back.png") no-repeat;
        background-size: contain;
    }
    .catg-nav-title {
        width: 72%;
    }
    .catg-nav-operation {
        display: block;
        width: .32rem;
        height: .32rem;
        background: url(../assets/images/home-img/search.png) no-repeat;
        right: .1rem;
        background-size: contain;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
    }
    .no-login a{
        margin-top:0.5rem;
        height: 0.54rem;
        padding: 0 .29rem 0 .16rem;
        position: relative;
        color: #3c3c3c;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .no-login span{
        font-size: .16rem;
        color: rgba(0,0,0,.87);
        display: block;
        text-align: left;
    }
    .no-login em{
        font-style: normal;
        font-size: .125rem;
        text-align: right;
    }
    .no-login a:after{
        content: "";
        position: absolute;
        right: .167rem;
        top: 51%;
        width: .08rem;
        height: .08rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0,-50%,0) rotate(135deg);
    }
    .no-goods{
        background: #ebebeb;
        padding: 0.1rem;
    }
    .no-goods a{
        font-size: .125rem;
        text-align: center;
    }
    .no-goods em{
        display: inline-block;
        border: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        height: .24rem;
        line-height: .24rem;
        padding: 0 .125rem;
        color: rgba(0,0,0,.87);
        font-style: normal;
    }
    .no-goods span{
        display: inline-block;
        line-height: .41rem;
        background: url(../assets/images/carts/no-goods.png) no-repeat 0;
        background-size: auto 100%;
        padding: 0 .08rem 0 .5rem;
        color: rgba(0,0,0,.27);
    }

</style>