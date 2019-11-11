<template>
    <!--每日精选开始-->
    <div>
        <div class="day-choice" v-for="(item,index) in data" :key="index">
            <div class="choice-title" >
                <img :src="item.src" alt="">
            </div>
            <div class="choice_con">
                <div class="choice_item" v-for="(pitem,pindex) in item.products" :key="pindex">
                    <div class="item-img">
                        <img :src="pitem.pic" alt="">
                        <div class="item-tag">
                            <img :src="pitem.tag" alt="">
                        </div>
                    </div>
                    <div class="item-center">
                        <div class="center_name">{{pitem.title}}</div>
                        <div class="center_brief">{{pitem.des}}</div>
                        <div class="center_price">
                            {{pitem.price}}<span>起</span>
                            <span class="price_old">
                                    <s>￥{{pitem.oldprice}}</s>
                                </span>
                        </div>
                        <div class="center_btn"> 立即购买</div>
                    </div>
                </div>
                <div class="dayMore">
                    <a href="#/">{{item.more}} &gt;</a>
                </div>
            </div>
    </div>

        <div class="re-footer">
            <img src="../../assets/images/home-img/footer.jpg" alt="">
        </div>
    </div>
    <!--每日精选结束-->
</template>

<script>
    export default {
        name: "choice",
        props:['data']
    }
</script>

<style scoped>
    .choice-title img{
        width: 3.75rem;
        height: 2.29rem;
    }
    .choice_con{
        padding: 0 0.065rem;
        width: 100%;
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
    }
    .choice_item:first-child, .choice_item:nth-child(3),.choice_item:nth-child(5) {
        margin-right: .0625rem;
    }
    .choice_item{
        display: inline-block;
        width: 1.78rem;
        margin-top: 0.0347rem;
    }
    .item-img{
        position: relative;
        overflow: hidden;
    }
    .item-img img{
        width: 1.79rem;
        height: 1.458rem;
        display: block;
    }
    .item-tag{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .item-tag img{
        display: inline-block;
        width: 0.52rem;
        height: auto;
    }
    .item-center {
        text-align: center!important;
        padding: .104rem .14rem;
        background-color: #fff;
    }
    .center_name,.center_brief{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .center_name{
        font-size: .145rem;
        color: rgba(0,0,0,.87);
    }
    .center_brief {
        margin-top: .0325rem;
        font-size: .12rem;
        line-height: .156rem;
        color: rgba(0,0,0,.54);
    }
    .center_price {
        font-size: .145rem;
        color: #ea625b;
        height: 0.218rem;
        line-height: 0.218rem;
        position: relative;
        display: inline-block;
        padding-left: .0729em;
    }
    .center_btn{
        width: 1.04rem;
        background: #ea625b;
        border-radius: .026rem;
        text-align: center;
        color: #fff;
        font-size: .125rem;
        padding: .083rem 0;
        font-weight: 700;
        margin: 0 auto;
    }
    .price_old {
        display: inline-block;
        margin: 0 .052rem;
        font-size: .12rem;
        color: rgba(0,0,0,.54);
    }
    .center_price span:first-child{
        font-size: 0.12rem;
    }
    .dayMore{
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 0 auto;
    }
    .dayMore a{
        display: block;
        background: #fff;
        height: 0.52rem;
        line-height: 0.52rem;
        font-size: .1458rem;
        text-align: center;
        color: rgba(0,0,0,.6);
        margin: 0 auto;
    }
    .re-footer img{
       width:3.75rem;
        height: 1.458rem;
    }
</style>