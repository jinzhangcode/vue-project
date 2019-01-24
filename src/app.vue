<template>
<div>
    <mt-header title="vue项目" fixed ></mt-header>
    <div class="app-container">
        <transition>
            <router-view></router-view>
        </transition>

    </div>
    <div class="fooler">
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item1" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/member">
                <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/shopcart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="carbadge">{{$store.getters.badgecount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
            <!--<nav class="mui-bar mui-bar-tab">-->
                <!--<router-link class="mui-tab-item" to="/home">-->
                <!--<span class="mui-icon mui-icon-home"></span>-->
                <!--<span class="mui-tab-label">首页</span>-->
                    <!--</router-link>-->

                <!--<router-link to="/member" class="mui-tab-item">-->
                    <!--<span class="mui-icon mui-icon-email"></span>-->
                    <!--<span class="mui-tab-label">会员</span>-->
                <!--</router-link>-->
                <!--<router-link to="/stopcar"  class="mui-tab-item">-->
                    <!--<span class="mui-icon mui-icon-contact">-->

                        <!--<span class="mui-badge">9</span>-->
                    <!--</span>-->
                    <!--<span class="mui-tab-label">购物车</span>-->
                <!--</router-link>-->
                <!--<router-link to="/search" class="mui-tab-item">-->
                    <!--<span class="mui-icon mui-icon-gear"></span>-->
                    <!--<span class="mui-tab-label">搜索</span>-->
                <!--</router-link>-->
                <!--</nav>-->
    </div>
</div>
</template>
<script>
export default{
    data(){

    return{
    }
    },


}

</script>
<style>
    body{
        background-color: #fff;
    }
.app-container{
    padding-top: 40px;
}
    .v-enter
    {
        transform: translateX(100%);
        position: absolute;
        opacity: 0;
    }
.v-leave-to{
    transform: translateX(-100%);
    opacity: 0;
    position: absolute;
}
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>