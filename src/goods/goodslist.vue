
<template>
    <div class="goodslist-container">
        <div v-for="item in goodslist " :key="item.id"  @click="godetail(item.id)" tag="div" class="goods-box">
            <img src="../image/test.jpg" alt="">
            <p class="title">{{item.title}}</p>
    <p class="price"><span class="nowprice">￥{{item.nowprice}} </span>
        <span class="oldprice">￥{{item.oldprice}}</span></p>
    <p class="num"><span >热卖中</span> <span>剩{{item.num}}件</span></p>

    </div>
    </div>
</template>
<script>
    export default{

        data(){
            return {
                goodslist:[]
            }
        },
        methods:{
            getgoodslist(){
                let goodslist = [
                    {
                        id:1,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:2,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:3,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:4,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:5,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:6,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    },
                    {
                        id:7,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        nowprice:2155,
                        oldprice:1999,
                        num:65
                    }
                ];
                this.goodslist = goodslist;
            },
            godetail(id){
                this.$router.push('/home/goodsdetail/' + id);
            }
        },
        created(){
            this.getgoodslist();
        }
    }
</script>
<style lang="less" scoped>
    .goodslist-container{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding:5px;
        box-sizing:border-box;
        .goods-box{
            width: 49%;
            height: 300px;

        img{
            height: 200px;
            width: 100%;
        }
            .num{
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>