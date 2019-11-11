<template>
    <div class="bottom-submit">
        <div class="price-box">
            <span>共1件 金额：</span>
            <strong >1399</strong>
            <span>元</span>
        </div>
        <a href="#/" class="continu">继续购物</a>
        <a href="#/" class="goBuy">去结算</a>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .bottom-submit{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 10000;
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
        display: flex;
    }
    .price-box{
        color: #999;
        text-align: center;
        padding-top: .078rem;
        width: 1.24rem;
        display: inline-block;
    }
    .price-box strong{
        font-size: .208rem;
        color: #ff5722;
        margin-right: .0416em;
        display: inline-block;
    }
    .continu,.goBuy{
        background: #f4f4f4;
        border: 1px solid #f4f4f4;
        display: inline-block;
        color: #3c3c3c;
        width: 1.24rem;
        height: 0.5rem;
        font-size: 0.16rem;
        line-height:0.5rem;
    }
    .goBuy{
        background-color:#ff6700;
        color: white;
    }

</style>