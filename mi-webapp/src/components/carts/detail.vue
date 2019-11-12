<template>
    <div class="detail-content">
        <div class="im1"><img :src="detaildata.pZQImg"></div>
        <div class="buynow">
            <div class="s1">预约中</div>
            <div class="pro-name-right">
                <span class="proname-text">距结束</span>
                <span class="hour">08</span>
                <span class="spe">:</span>
                <span class="minut">45</span>
                <span class="spe">:</span>
                <span class="second wh">05</span>
            </div>
        </div>
        <div class="pro-name-foot">
            <img  src="../../assets/images/detail-img/title.png" alt="">
            <span>{{detaildata.pName}}</span>
        </div>
        <div class="describe"><span>「11月11日0点再次开售，加99元得立式风冷无线充，分期享6期免息」</span>5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 40W有线闪充+30W无线闪充+10W无线反充，4000mAh长续航 / 4800万全焦段三摄 / 超振感横向线性马达 / VC液冷散热 / 高色准三星AMOLED屏幕 / 多功能NFC</div>
        <!--商品价格-->
        <div class="pro-price">
            <div  class="price cur-price">{{detaildata.pPrice}}</div>
<!--            <div class="price origin-price">{{data.origin}}</div>-->
        </div>
<!--        <div class="price">￥</div>-->
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
                    <a href="#/main/cart" class="action-box-buyBtn" @click="cpp">立即抢购</a>
                </div>
            </div>
        </div>
        <!--底部结束-->
    </div>
</template>

<script>
    import cartApi from "../../apis/cartApi";
    export default {
        name: "detail",
        data() {
            return {
                data: [],
                detaildata:[],
                id:""
            }
        },

        methods: {
            async _initCarifyData() {
                let data = await cartApi.getCarData();
                console.log(data);
                this.data = data
                let a = this.$route.params.id;
                this.id=a;
                console.log(a)
                if (this.data.shops) {
                    this.data.shops.forEach((shop) => {
                        shop.products.forEach((product) => {
                            if (product.pId == a) {
                                this.detaildata = product;
                                console.log(this.detaildata)
                            }
                        })
                    })
                }
            },
            cpp(){
                // this.$cart.$emit("ca", this.detaildata.pId)
                this.$store.dispatch('INITCART',this.id)
            }

        },
        beforeMount() {
            this._initCarifyData()

        }
    }
</script>

<style scoped>
 .detail-content{
     margin-bottom: .55rem;
 }
 .im1 img{
    width: 3.75rem;
     height: 4.12rem;
     display: block;
    }
  .buynow{
      display: flex;
      justify-content: space-between;
      height: .5rem;
      line-height: .5rem;
      padding: 0rem .2rem;
      background-color: #F56600;
      color: white;
  }
  .s1{
      font-size: .167rem;
  }
  .s2{
      font-size: .125rem;
  }
 .tittle{
     height: .47rem;
 }
 .describe{
     height: .9rem;
 }
.price{
    height: .35rem;
}
 .tittle{
     font-size: .20rem;
     line-height: .6rem;
     text-align: center;
 }
 .describe {
     color: #777777;
     margin: .05rem .14rem;
     text-align: left;
 }
 .describe span{
     color: #FF4A00;
 }
.price{
    color: #ff6700;
    margin: .05rem .14rem;
    font-size: .25rem;
}
 .cur-price{
     color: #ff6700;
     font-size: .25rem;
     padding-left: .15rem!important;

 }
 .cur-price:before{
     font-size: .19rem;
     /**/
 }
 .origin-price{
     margin-left: .083rem;
     color: rgba(0,0,0,.54);
     font-size: .125rem;
     text-decoration: line-through;
 }
 .pro-price{
     padding: .167rem .167rem;
     text-align: left;
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
 .buyit a{
     display: inline-block;
     text-align: center;
     margin-left: .3rem;
     color: #717172;
 }
 .buyit a span{
     display: block;
 }
 .buyit a img{
     width: .2rem;
     height: .2rem;
     margin-top: .1rem;
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
     background-image: url("../../assets/images/home-img/home1.png");
 }
 .image-icons2 {
     background-image: url("../../assets/images/home-img/cart.png");
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
 .pro-name-right{
     text-align: right;
     font-size: .12rem;
 }
 .proname-text,.spe{
     margin: 0 .026rem;
 }
 .pro-name-foot{
     padding: .167rem .167rem 0;
     line-height: 0.315rem;
     font-size: 0.208rem;
     text-align: left;
 }
 .pro-name-foot img{
     width: 0.455rem;
     height: 0.218rem;
     margin-right: .05rem;
 }
 .pro-name-left{
     min-width: 0.52rem;
     text-align: left;
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
 .pro-name-foot{
     padding: .167rem .167rem 0;
     line-height: 0.315rem;
     font-size: 0.208rem;
     text-align: left;
 }
 .pro-name-foot img{
     width: 0.455rem;
     height: 0.218rem;
     margin-right: .05rem;
 }

</style>