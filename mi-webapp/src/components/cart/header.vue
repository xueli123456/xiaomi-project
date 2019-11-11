<template>
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
</template>

<script>
    export default {
        name: "vheader"
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
        background: url("../../assets/images/home-img/catg-back.png") no-repeat;
        background-size: contain;
    }
    .catg-nav-title {
        width: 72%;
    }
    .catg-nav-operation {
        display: block;
        width: .32rem;
        height: .32rem;
        background: url(../../assets/images/home-img/search.png) no-repeat;
        right: .1rem;
        background-size: contain;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
    }
</style>