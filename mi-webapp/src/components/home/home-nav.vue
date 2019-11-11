<template>
    <div>
        <!--导航栏开始-->
        <div class="home-nav">
            <div class="home-nav-rig" @click="show = !show" :class="{tip:show===false}">
                <span></span>
            </div>
            <div class="home-nav-con" v-if="show">
                <div class="nav-item" :key="index" v-for='(item, index) in list' @click="styleItem(item,index)" :class="{blue:i===index}">
                    <span>{{item.name}}</span>
                </div>
                <div  class="nav-item-extra"></div>
            </div>
            <div v-else class="nav-list">
                <div  class="nav-list-title">全部</div>
                <div class="nav-list-nav" >
                    <div class="nav-list-item" :key="index" v-for='(item, index) in list' @click="styleItem(item,index)" :class="{spanStyle:i===index}">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!--导航栏结束-->
        <div class="empty"></div>
        <div  :class="{popupMask:show===false}"></div>
<!--        <recommend v-show="flag==='recommend'" :data="data" v-if="data.banner "></recommend>-->
<!--        <phone v-else-if="flag==='phone'" ></phone>-->
<!--        <Intelligence v-else-if="flag==='Intelligence'" ></Intelligence>-->
        <div :is="flag" v-if="data.banner" :data="data"></div>
    </div>

        <!--<two v-else></two>-->
        <!--</keep-alive>-->
<!--        <keep-alive>-->
<!--            <div :is="flag"></div>-->
<!--        </keep-alive>-->

</template>

<script>
    import recommend from "./recommend";
    import phone from "./phone";
    import Intelligence from './Intelligence'
    export default {
        name: "home-nav",
        data() {
            return{
                flag:"recommend",
                list:[
                    {name:'推荐',flag:'recommend'},
                    {name:'手机',flag:'phone'},
                    {name:'智能',flag:'Intelligence'},
                    {name:'电视',flag:'phone'},
                    {name:'笔记本',flag:'phone'},
                    {name:'家电',flag:'phone'},
                    {name:'生活周边',flag:'phone'},

                ],
                i:0,
                show:true
            }
        },
        props: ['data'],
        methods:{
            styleItem(item,index){
                this.i=index;
                this.flag = item.flag;
                this.show = true
                // this.$emit("flag",this.flag)
            }
        },
        components:{
            recommend,
            phone,
            Intelligence
        }
    }
</script>

<style scoped>
    .home-nav{
        position: fixed;
        overflow: hidden;
        font-size: 0.13rem;
        margin: 0 auto;
        width: 3.75rem;
        top:0.41rem;
        left: 0;
        right: 0;
        z-index: 88;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
        background-color: #f2f2f2;
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
        background-image: url("../../assets/images/home-img/top-more.png");
        transition: transform .2s linear;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        margin-top: 0.03rem;
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
        /**/
    }
    .nav-item-extra{
        padding-right: .4rem;
        display: inline-block;
    }
    .empty{
        height: 0.09rem;
        z-index: -1;
        position: relative;
    }
    .blue span{
        color: rgb(237, 91, 0);
        border-color: rgb(237, 91, 0);
        border-bottom: 2px solid  rgb(237, 91, 0);
    }
    .tip span{
        transform: rotate(180deg);
    }
    .nav-list{
        color: #3c3c3c;
        transition:.3s ease-in-out;
    }
    .nav-list-title{
        padding-top: .05rem;
        padding-left: 0.2rem;
        font-size: 0.14rem;
        text-align: left;
    }
    .nav-list-nav{
        display: flex;
        flex-wrap: wrap;
        width: 3.48rem;
        margin: 0 auto;
        margin-top: 0.18rem;
    }
    .nav-list-nav span{
         margin-bottom: 0.125rem;
         display: inline-block;
         width: 0.76rem;
         height: 0.27rem;
         text-align: center;
         line-height: 0.29rem;
         border: 1px solid #e5e5e5;
         border-radius: 4px;
         font-size: .14rem;
         background-color: #fff;
         margin-right: 0.11rem;
     }
    .nav-list-nav div:nth-child(4) span{
        margin-right:0rem!important;
    }
    .spanStyle span{
        background-color: #fde0d5;
        border-color: #ff6700;
        color: #ff6700;
    }
    .popupMask{
        background-color: rgba(0,0,0,.3);
        z-index: 13;
        position: absolute;
        width: 100%;
        height: 100%;
        top:1.67rem;
    }

</style>