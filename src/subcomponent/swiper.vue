<template>
    <div class="swiper-container">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../image/banner.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../image/banner.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../image/banner.jpg" alt=""></mt-swipe-item>
        </mt-swipe>

    </div>
</template>
<script>
    export default{}
</script>
<style lang="less" scoped>
    .mint-swipe{
        height: 200px;
        width: 100%;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 200px;
    }

</style>