<template>
    <div class="header">
        <!--搜索框开始-->
        <div class="home-search">
            <div class="home-search-left">
                <img src="../../assets/images/home-img/log.png">
            </div>
            <div class="home-search-mid">
                <i></i>
                搜索商品名称
            </div>
            <div class="home-search-right">
                <img src="../../assets/images/home-img/user.png" alt="">
            </div>
        </div>
        <!--搜索框结束-->
    </div>
</template>

<script>

    export default {
        name: "vheader",

    }
</script>

<style scoped>
    .header{
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        z-index: 999;
        background: #f2f2f2;
        width: 3.75rem;
    }
    .home-search{
        position: relative;
        max-width: 3.75rem;
        margin: 0 auto;
        height: 0.44rem;
        display: flex;
        align-items: center;
    }
    .home-search-left,.home-search-right {
        margin: 0 0.14rem;
        display: flex;
    }
    .home-search-left img{
        display: block;
        width:0.25rem;
        height: 0.16rem;
    }
    .home-search-right img{
        display: block;
        width:0.21rem;
        height:0.21rem;
    }
    .home-search-mid{
        display: flex;
        align-items: center;
        border: 1px solid #e5e5e5;
        text-align: left;
        width: 2.69rem;
        color: rgba(0,0,0,.3);
        background-color: #fff;
        border-radius: .02rem;
        font-size: 0.16rem;
    }
    .home-search-mid i{
        display: block;
        width: 0.31rem;
        height:0.31rem;
        background: url("../../assets/images/home-img/search.png") no-repeat;
        background-size: 0.21rem 0.21rem;
        background-position: 50%;
    }


</style>