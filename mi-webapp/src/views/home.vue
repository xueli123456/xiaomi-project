<template>
    <div>
        <mi-header></mi-header>
        <mi-banner></mi-banner>
        <mi-list></mi-list>
        <home-multi></home-multi>
    </div>
</template>

<script>
import header from '../components/header'
import banner from '../components/home-banner'
import list from '../components/home-list'
import multi from '../components/home-multi'
    export default {
        name: "home",
        components:{
            "mi-header":header,
            "mi-banner":banner,
            'mi-list':list,
            'home-multi':multi
        }

    }
</script>

<style scoped>
</style>