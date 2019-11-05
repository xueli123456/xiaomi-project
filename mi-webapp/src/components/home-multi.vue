<template>
    <div>
        <div class="hdivider_line"></div>
        <div class="good-thing" >
            <div class="good-thing-left">
                <a href="" >
                    <img src="../assets/images/home-img/mu1.jpg" alt="">
                </a>
            </div>
            <div class="good-thing-right">
                <a href=""  >
                    <img src="../assets/images/home-img/mu2.jpg" alt="">
                </a>
                <a href="">
                    <img src="../assets/images/home-img/mu3.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="carnival">
            <img src="../assets/images/home-img/carnival.jpg" alt="">
        </div>
        <div class="hdivider_line"></div>
    </div>
</template>

<script>
    export default {
        name: "home-multi"
    }
</script>

<style scoped>
    .hdivider_line{
        height: 0.08rem;
        background-color: rgb(245, 245, 245);
    }
    .good-thing{
        height: 2.64rem;
        width: 3.75rem;
        border-bottom: 0.08rem solid rgb(245, 245, 245);
    }
    .good-thing-left, .good-thing-left img{
        display: inline-block;
        width: 1.86rem;
        height: 2.64rem;
        margin-right: 0.03rem;
        float: left;
    }
    .good-thing-right img{
        display: inline-block;
        width: 1.86rem;
        height: 1.31rem;
    }
    .carnival,.carnival img{
        width: 3.75rem;
        height: 1.45rem;
    }
</style>