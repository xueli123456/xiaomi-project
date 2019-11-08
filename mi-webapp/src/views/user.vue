<template>
    <div class="user">
        <header>
            <div class="header-con">
                <div class="header-con-img">
                    <img src="../assets/images/user-img/us-my.png" alt="">
                </div>
                <div class="header-name">登录/注册</div>
            </div>
        </header>
        <div class="order">
            <div class="order-cite">我的订单</div>
            <div class="order-all">
                <a href="">全部订单</a>
            </div>
        </div>
        <ul class="order-pack">
            <li>
                <a href="#">
                    <div class="pack-icon icon1"></div>
                    <span>待付款</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="pack-icon icon2"></div>
                    <span>待收货</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="pack-icon icon3"></div>
                    <span>退换修</span>
                </a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="us-items">
            <li class="i-member">
                <a href="#/">会员中心</a>
            </li>
            <li class="i-disc">
                <a href="#/">我的优惠</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="us-items">
            <li class="i-server">
                <a href="#/">服务中心</a>
            </li>
            <li class="i-mihome">
                <a href="#/">小米之家</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="us-items">
            <li class="i-fcode">
                <a href="#/">我的F码</a>
            </li>
            <li class="i-super">
                <a href="#" >礼物码兑换</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="us-items">
            <li class="i-res">
                <a href="#" >设置</a>
            </li>
        </ul>
        <div class="ui-line"></div>
    </div>
</template>

<script>
    export default {
        name: "user",
    }
</script>

<style scoped>
    header{
        background: url(../assets/images/user-img/us-bg.png) center 0 #f37d0f;
        background-size: auto 100%;
        padding: .167rem 0;
    }
    .header-con{
        display: flex;
        align-items: center;
    }
    .header-con-img{
        margin: 0 .08rem 0 .167rem;
        width: .5rem;
        height: .5rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0,0%,100%,.4);
        text-align: center;
    }
    .header-con-img img{
        width: .442rem;
        height: .442rem;
    }
    .header-name{
        color: #fff;
        font-size: .125rem;
        text-align: left;
    }
  .order{
        background-color: #fff;
        height: .406rem;
        border-bottom: 1px solid rgba(0,0,0,.15);
        color: rgba(0,0,0,.54);
        position: relative;
        padding-right: .29rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .order-cite{
        font-size: .145rem;
        padding: 0 0 0 .167rem;
        color: rgba(0,0,0,.87);
    }
    .order-all a{
        font-size: .125rem;
        color: rgba(0,0,0,.87);
    }
    .order:after,.us-items li:after{
        content: "";
        position: absolute;
        right: .167rem;
        top: 50%;
        width: .095rem;
        height: .095rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0,-50%,0) rotate(135deg);
    }
    .order-pack{
        padding: 0 .41rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .order-pack li{
        align-content: space-between;
        position: relative;
        padding: .208rem 0;
        display: flex;
    }
    .icon1{
        background: url(../assets/images/user-img/us-mony.png) no-repeat center 0;
    }
    .icon2{
        background: url(../assets/images/user-img/us-cart.png) no-repeat center 0;
    }
    .icon3{
        background: url(../assets/images/user-img/us-xiu.png) no-repeat center 0;
    }
    .pack-icon{
        width: .25rem;
        height: .25rem;
        margin: 0 .055rem;
        margin-bottom: 0.055rem;
        background-size: 100% auto;
    }
    .order-pack span{
        color: rgba(0,0,0,.87);
    }
    .ui-line{
        height: .105rem;
        background: #f5f5f5;
        overflow: hidden;
        clear: both;
    }
    .i-disc{
        background:url(../assets/images/user-img/us-dis.png) no-repeat 0.18rem;
    }
    .i-member{
        background: url(../assets/images/user-img/us-vip.png) no-repeat 0.18rem;
    }
    .i-server{
        background: url(../assets/images/user-img/us-heart.png) no-repeat 0.18rem;
    }
    .i-mihome{
        background: url(../assets/images/user-img/us-home.png) no-repeat 0.18rem;
    }
    .i-fcode{
        background: url(../assets/images/user-img/us-fcode.png) no-repeat 0.18rem;
    }
    .i-res{
        background: url(../assets/images/user-img/us-she.png) no-repeat 0.18rem;
    }
    .i-super{
        background: url(../assets/images/user-img/user-li.png) no-repeat 0.18rem;
    }
    .us-items li{
        position: relative;
        color: rgba(0,0,0,.54);
        border-bottom: 1px solid rgba(0,0,0,.15);
        background-size: .25rem auto;
    }
    .us-items a{
        padding-right: .29rem;
        padding-left: 0.58rem;
        height: 0.54rem;
        display: -webkit-box;
        color: rgba(0,0,0,.87);
        font-size: 0.145rem;
        -webkit-box-align: center;
    }
    .us-items li:not(:first-child):before {
        content: "";
        position: absolute;
        left: 0;
        top: -2px;
        height: 3px;
        background: #fff;
        width: 0.58rem;
    }
    .us-items li:last-child {
        border-bottom-color: #fff;
    }
    .user{
        margin-bottom: 0.4rem;
    }

</style>