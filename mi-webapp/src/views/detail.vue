<template>
    <div class="product-view-page">
        <div class="detail-content">
            <!--头部开始-->
            <div class="detail-header">
                <div class="dhead-con">
                    <a href="#/" class="dhead-back">
                        <i></i>
                    </a>
                    <a href="#/" class="dhead-share">
                        <i></i>
                    </a>
                </div>
            </div>
            <!--头部结束-->
            <detail-swiper v-if="goods.thumb" :data="goods.thumb" ></detail-swiper>
            <!--商品名称开始-->
            <pro-name v-if="goods.express" :data="goods.express"></pro-name>
            <!--商品介绍-->
            <pro-desc v-if="goods.title" :data="goods.title"></pro-desc>
            <!--商品价格-->
            <pro-price  v-if="goods.price" :data="goods.price"></pro-price>
            <!--底部开始-->
            <div class="detail-footer">
                <div class="footer-content">
                    <a href="main" class="footer-btn">
                        <i class="image-icons1 "></i>
                        <span>首页</span>
                    </a>
                    <a href="#/main/cart" class="footer-btn">
                        <i class="image-icons2"></i>
                        <span>购物车</span>
                    </a>
                    <div class="active-box">
                        <a href="#/main/cart" class="action-box-buyBtn"  @click="addCart">立即抢购</a>
                    </div>
                </div>
            </div>
            <!--底部结束-->
        </div>
    </div>
</template>

<script>
    import productApi from '../apis/productApi'
    import cartApi from '../apis/cartApi'
    import swiper from "../components/detail/swiper";
    import proName from "../components/detail/proName";
    import proPrice from "../components/detail/proPrice";
    import proDesc from "../components/detail/proDesc";
    export default {
        name: "detai",
        components:{
            "detail-swiper":swiper,
            "pro-name":proName,
            "pro-price":proPrice,
            "pro-desc":proDesc,
        },
        data () {
            return {
                goods: {}
            }
        },
        methods: {
            // onClickCart () {
            //     this.$router.push('cart')
            // },
            async addCart () {
                let { id } = this.$route.query
                await cartApi.addCart(this.goods.products.title, id)
            },
            async _initPageData () {
                let { id } = this.$route.query
                let data = await productApi.getProductById(id)
                this.goods = data
            },
        },
        async beforeMount () {
            await this._initPageData()
        }

    }
</script>

<style scoped>
    .product-view-page{
        background: #fff;
        color: #3c3c3c;
    }
    .detail-content{
        padding-bottom: 0.625rem;
        position: relative;
    }
    .detail-header{
        height: 50px;
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    .dhead-con{
        flex-wrap: nowrap;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
    }
    .dhead-back,.dhead-share{
        display: block;
        width: .312rem;
        height: .312rem;
        margin: 0 .104rem;
        color: #ddd;
        background: rgba(0,0,0,.6);
        border-radius: 50%;
    }
    .dhead-back i{
        background:url("../assets/images/detail-img/back.png") no-repeat;
    }
    .dhead-share i{
        background:url("../assets/images/detail-img/share.png") no-repeat;
    }
    .dhead-back i,.dhead-share i{
        display: inline-block;
        width: .312rem;
        height: .312rem;
        transform: scale(.6);
        background-position: 50%;
        background-size: cover;
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
    .detail-footer{
        padding: 0 .083rem .083rem;
        background: transparent;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    .footer-content{
        background-color: hsla(0,0%,100%,.96)!important;
        width: 100%;
        display: flex;
        align-items: center;
        height: 0.52rem;
        border: 1px solid #e5e5e5;
        border-radius: .08rem;
        overflow: hidden;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    }
    .footer-btn{
        position: relative;
        display: block;
        text-decoration: none;
        width: auto;
        margin-left: .26rem;
        color: rgba(0,0,0,.54);
        font-size: 0.12rem;
    }
    .image-icons1 {
        background-image: url("../assets/images/home-img/home1.png");
    }
    .image-icons2 {
        background-image: url("../assets/images/home-img/cart.png");
    }
    .footer-btn i{
        display: block;
        width: .208rem;
        height: .208rem;
        margin: 0 auto .021rem;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
    }
    .active-box{
        margin-right: .167rem;
        margin-left: .208rem;
        text-align: right;
        flex: 1 1 auto;
    }
    .action-box-buyBtn{
        display: inline-block;
        font-size: 0.145rem;
        max-width: 2.08rem;
        overflow: hidden;
        padding: 0 .25rem;
        height: .33rem;
        line-height: .33rem;
        border-radius: 0.167rem;
        background: #ff6700;
        color: #fff;
        text-align: center;
    }

</style>