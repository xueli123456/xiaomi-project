<template>
    <div class="footer">
            <router-link  to="/main/home" class="home"  @click="switchTo('/main/home')">
                <div class="foot-con">
                    <img :src="'/main/home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="">
                    <span>首页</span>
                </div>
            </router-link>
            <router-link  to="/main/category" class="category" @click="switchTo('/main/category')">
                <div class="foot-con">
                    <img :src="'/main/category' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="">
                    <span>分类</span>
                </div>
            </router-link>
            <router-link to="/main/cart" class="cart" @click="switchTo('/main/cart')">
                <div class="foot-con">
                    <img :src="'/main/cart' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="">
                    <span>购物车</span>
                </div>
            </router-link>
            <router-link to="/main/user" class="user"  @click="switchTo('/main/category')">
                <div class="foot-con">
                    <img :src="'/main/user' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="">
                    <span>我的</span>
                </div>

            </router-link>
    </div>
</template>

<script>
    export default {
        name: "vfooter",
        data() {
            return {
                tabBarImgArr:[   //图片切换
                    {normal: require('../assets/images/home-img/home1.png'), selected: require('../assets/images/home-img/home.png')},
                    {normal: require('../assets/images/home-img/categroy.png'), selected: require('../assets/images/home-img/categroy1.png')},
                    {normal: require('../assets/images/home-img/cart.png'), selected: require('../assets/images/home-img/cart1.png')},
                    {normal: require('../assets/images/home-img/user.png'), selected: require('../assets/images/home-img/user1.png')},
                ]
            }
        },
        methods:{
            switchTo(path){
                // console.log(this.$router)
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped>
    .footer{
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.52rem;
        background: #fff;
        z-index: 9999;
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
        text-align: center;
        width:3.76rem
    }
    .footer a{
        display: inline-block;
        margin-top: .06rem;
        text-align: center;
        color: #999;
        flex: 1 1 auto;
    }
    .foot-con{
        width: 100%;
    }
    .foot-con img{
        display: block;
        width: 0.21rem;
        margin: 0 auto .05rem;
    }
    .footer a.router-link-active {
        color: #ff6700;
    }

</style>