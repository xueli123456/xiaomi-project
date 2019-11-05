<template>
    <div>
        <router-view></router-view>
        <xm-footer></xm-footer>
    </div>
</template>

<script>
    import footer from '../components/footer'
    export default {
        name: 'xmain',
        components:{
            'xm-footer':footer
        }
    }
</script>

<style scoped>
</style>