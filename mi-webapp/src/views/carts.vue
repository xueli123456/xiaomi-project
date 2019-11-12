<template>
    <div class="cart-content">
        <cart-header></cart-header>
        <cart-empty></cart-empty>
        <div class="newadd-list" v-if="list">
            <a class="newadd-item" v-for="(partdata,i) in list " :key="i">
                <div  :class="redbac"><input type="checkbox" v-model="flag" @change="clickme" :class="redbac"></div>
                <div class="newadd-img">
                    <img :src="partdata.pZQImg">
                </div >
                <div class="newadd-bottom">
                    <p>{{partdata.pName}}</p>
                    <div class="newadd-price">售价：<span>{{partdata.pPrice}}</span></div>
                    <div class="newadd-change">
                        <div class="num"><span class="min">—</span> <span>1</span> <span class="add">+</span></div>
                        <span class="newadd-del"></span>
                    </div>
                </div>
            </a>
        </div>
        <div class="guess-top">
            <img src="../assets/images/carts/like.jpg" alt="">
        </div>
        <div class="goodlist" v-if="data.shops">
            <a :href="'#/main/detail/'+u.pId" class="good-item" :key="i" v-for="(u,i) in data.shops[0].products" >
               <img :src="u.pZQImg">
                <div class="good-tip">
                    <p>{{u.pName}}</p>
                    <span>￥{{u.pPrice}}</span>
                </div>
            </a>
        </div>

    </div>
</template>

<script>
    import cartApi from "../apis/cartApi";
    import header from '../components/cart/header';
    import empty from '../components/cart/empty';
    import { mapGetters } from 'vuex'
    export default {
        name: "cart",
        components:{
            "cart-header":header,
            "cart-empty":empty,
            // "cart-guess":guess,
            // "cart-list":cartList,
            // "cart-footer":cartFooter
        },
        computed: {
            ...mapGetters({
                cartInfo: 'GETCART'
            })
        },
        data(){
            return{
              redbac:"check",
              flag:true,
              data:[],
              buydata:"",
              partdata:"",
              list:[]
            }
        },
        methods:{
            clickme(){
                if(this.flag){
                    this.redbac="check"
                }
                else {
                    this.redbac="white"
                }
            },
            async _initCartyData() {
                let data = await cartApi.getCarData();
                console.log(data);
                this.data=data;

                for(let i=0;i<this.cartInfo.length;i++){
                    this.data.shops.forEach((shop)=>{
                        shop.products.forEach((product)=>{
                            if(product.pId==this.cartInfo[i]){
                                // this.partdata = product;
                                this.list.push(product)
                            }
                        })
                    })
                }
            },
            updatadata(a){
                this.buydata=a
                console.log(this.buydata)
                // alert(this.buydata)
            }
        },
         beforeMount() {
             this._initCartyData()
             // this.$cart.$on("ca",this.updatadata)

        },

    }
</script>

<style scoped>
    .white{
        padding: 0rem .15rem;
        line-height: 1rem;

        background-size: .2rem .2rem;
    }
  .newadd-item{
      width: .2rem;
      display: flex;
      margin: .13rem 0;
  }
  .check {
      padding: 0rem .15rem;
      line-height: 1rem;

      background-size: .2rem .2rem;
  }
  .check input{
     opacity: 0;
  }
  .white input{
      opacity: 0;
  }
  .newadd-img img{
      width: .91rem;
      height: .92rem;
  }
  .newadd-bottom{
      width: 2.3rem;
      margin-left: .2rem;
  }
  .newadd-bottom p{
      width: 1.6rem;
      font-size: .155rem;
  }
  .newadd-price{
      color: #999999;
  }
  .num{
      display: flex;
      text-align: center;
      line-height: .3rem;
      border: .01rem solid #EEEEEE;
      font-size: .16rem;
  }
   .add,.min{
     background-color: #FAFAFA;
  }
  .num span{
      display: inline-block;
      width: .3rem;
  }
  .newadd-change {
     display: flex;
      width: .32rem;
      height: .32rem;
  }
  .newadd-del{
      margin-left: .75rem;
  }
  .newadd-del img{
     width: .3rem;
      height: .3rem;
  }
 .cart-content {
   margin-bottom:0.7rem;
 }
.cart-center{
 display: flex;
    height: .54rem;
    line-height: .54rem;
    margin: 0 .15rem;
    justify-content: space-between;
}
.cart-center div{
font-size: .17rem;
}
.cart-center a{
    font-size: .125rem;
    position: relative;
    margin-right: .18rem;
    color: #777777;
}
.cart-center a:after{
    content: "";
    position: absolute;
    right: -.1rem;
    top: 50%;
    width: .1rem;
    height: .1rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.cart-null{
    height: .61rem;
    line-height: .61rem;
    background-color: #EBEBEB;
    text-align: center;

}
.cart-null span{
    display: inline-block;
    line-height: .4rem;
    /*background: url("../assets/ima/m10.png") no-repeat 0;*/
    background-size: auto 100%;
    color: rgba(0,0,0,.27);
    padding-left: .4rem;
    font-size: .125rem;
    margin-left: -.4rem;
}
.cart-null em{
    display: inline-block;
    line-height: .26rem;
    font-size: .125rem;
    font-style: normal;
    width: .64rem;
    height: .26rem;
    border: .01rem solid #C8C8C8;
    margin-left: .1rem;
}
.youlike img{
    height: .625rem;
}
 .goodlist{
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
 }
 .good-item{
     width: 1.86rem;
     font-size: .145rem;
     color: #3C3C3C;
 }
.good-item img{
    width: 1.856rem;
    height: 1.856rem;
    display: block;
}
.good-tip p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 1.58rem;
}
 .good-tip{
     padding: .09rem .12rem;
 }
 .good-tip span{
     color: #ff6700;
     font-size: .16rem;
 }
    .guess-top{
        width:3.75rem;
    }
    .guess-top img{
        width:3.75rem;
        height: 0.625rem;
    }
</style>