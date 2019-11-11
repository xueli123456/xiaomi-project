<template>
    <div class="detail-pro-disc">
        <div class ="pro-disc-con">
            <div class="pro-disc-box">
                <span style="color:#ff4a00">{{data.title}}</span>
                {{data.desc}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pro-desc",
        props:['data']
    }
</script>

<style scoped>
    .pro-disc-con, .pro-name-foot,.pro-price{
        background: #fff;
        text-align: left;
    }

    .pro-disc-con{
        padding: 0 .167rem;
    }
    .pro-disc-box{
        line-height: 0.20rem;
        color: rgba(0,0,0,.54);
        font-size:0.126rem;
    }
</style>