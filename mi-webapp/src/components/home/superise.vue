<template>
    <div>
        <div class="surprise-con">
            <a href="#/" v-for="(item,index) in data" :key="index" class="surprise">
                <img :src="item.src" alt="">
            </a>
        </div>
        <div class="sup-di">
            <img src="../../assets/images/home-img/gui.jpg" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: "superise",
        props:['data']
    }
</script>

<style scoped>
    .surprise img{
        display: block;
        height: 1.4rem;
        width: 1.25rem;
    }
    .surprise{

        float: left;
    }
    .surprise-con{
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(37, 1, 104);
    }
    .sup-di img{
        width:3.75rem;
        height: 0.7rem;
        display: block;
    }
</style>