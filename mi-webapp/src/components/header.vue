<template>
    <div class="header">
        <!--搜索框开始-->
        <div class="home-search">
            <div class="home-search-left">
                <img src="../assets/images/home-img/log.png">
            </div>
            <div class="home-search-mid">
                <i></i>
                搜索商品名称
            </div>
            <div class="home-search-right">
                <img src="../assets/images/home-img/user.png" alt="">
            </div>
        </div>
        <!--搜索框结束-->
        <!--导航栏开始-->
        <div class="home-nav">
            <div class="home-nav-con">
                <div class="nav-item">
                    <span>推荐</span>
                </div>
                <div class="nav-item">
                    <span>手机</span>
                </div>
                <div class="nav-item">
                    <span>智能</span>
                </div>
                <div class="nav-item">
                    <span>电视</span>
                </div>
                <div class="nav-item">
                    <span>笔记本</span>
                </div>
                <div class="nav-item">
                    <span>家电</span>
                </div>
                <div class="nav-item">
                    <span>生活周边</span>
                </div>
                <div  class="nav-item-extra"></div>
            </div>
            <div class="home-nav-rig">
                <span></span>
            </div>
        </div>
        <!--导航栏结束-->

    </div>
</template>

<script>
    export default {
        name: "vheader"
    }
</script>

<style scoped>
    .header{
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        z-index: 999;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
        background: #f2f2f2;
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
    .home-search-left img,.home-search-right img{
        display: block;
        width:0.25rem;
    }
    .home-search-right img{
        display: block;
        width:0.21rem;
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
        background: url("../assets/images/home-img/search.png") no-repeat;
        background-size: 0.21rem 0.21rem;
        background-position: 50%;
    }
    .home-nav{
        position: relative;
        overflow: hidden;
        font-size: 0.13rem;
        margin: 0 auto;
    }
    .home-nav-rig{
        position: absolute;
        right: 0;
        top: 0;
        width: .35rem;
        height: .28rem;
        line-height: .28rem;
        background-color: #f2f2f2;
        box-shadow: -15px 0 15px 0 #f2f2f2;
        z-index: 99
    }
    .home-nav-rig span{
        display: inline-block;
        width: 0.21rem;
        height: 0.21rem;
        background-image: url("../assets/images/home-img/top-more.png");
        transition: transform .2s linear;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        margin-top: 0.01rem;
    }
    .home-nav-con{
        overflow-x: auto;
        background: #f2f2f2;
        font-size: .13rem;
        white-space: nowrap;
        z-index: 99;
    }
    .home-nav-con::-webkit-scrollbar{
        display:none
    }
    .nav-item{
        display: inline-block;
        padding: 0 .14rem;
    }
    .nav-item span{
        display: inline-block;
        line-height: 0.28rem;
        color: rgb(116, 116, 116);
        /*border-bottom: 2px solid  rgb(237, 91, 0);*/
    }
    .nav-item-extra{
        padding-right: .4rem;
        display: inline-block;
    }

</style>