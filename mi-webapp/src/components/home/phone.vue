<template>
    <div class="home-phone">
        <div class="top-pic">
            <img src="../../assets/images/home-img/phonTop.jpg" alt="">
        </div>
        <div class="top-miao">
            <img src="../../assets/images/home-img/miao.jpg" alt="">
        </div>
        <phone-list :data="data.phone" v-if="data.phone"></phone-list>
        <div class="top-miao">
            <img src="../../assets/images/home-img/fuli.jpg" alt="">
        </div>
        <phone-surprise :data="data.surprise" v-if="data.surprise" ></phone-surprise>
        <div class="top-miao">
            <img src="../../assets/images/home-img/newph.jpg" alt="">
        </div>
        <new-phone :data="data.phone" v-if="data.phone"></new-phone>
    </div>
</template>

<script>
   import phoneList from './phoneList'
   import surprise from './superise'
   import newPhone from './newPhone'
    export default {
        name: "phone",
        components:{
            "phone-list":phoneList,
            "phone-surprise":surprise,
            "new-phone":newPhone
        },
        props:['data']

    }
</script>

<style scoped>
    .home-phone{
        margin-top:0.6rem;
        background-color: rgb(37, 1, 104);
    }
    .top-pic img{
        display: block;
        width: 3.75rem;
        height: 3.99rem;
    }
    .top-miao img{
        display: block;
        width: 3.75rem;
        height: 0.47rem;
    }

</style>