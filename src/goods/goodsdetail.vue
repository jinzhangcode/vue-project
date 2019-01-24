<template>
    <div class="goodsdetail-container">


        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <!--@before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"-->
            <div class="redball" v-show="flag" ref="ball"></div>

        </transition>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper></swiper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsdetail.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p class="price">市场价：<span class="old-price">￥{{goodsdetail.oldprice}}</span>&nbsp;销售价：<span class="sell-price">￥{{goodsdetail.oldprice}}</span></p>
                    <div class="changenum"><span>购买数量：</span><div class="mui-numbox" data-numbox-min="1" :data-numbox-max="goodsdetail.num" data-numbox-step="1">
                    <!-- "-"按钮，点击可减小当前数值 -->
                    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                    <input class="mui-numbox-input" type="number" />
                    <!-- "+"按钮，点击可增大当前数值 -->
                    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                </div>
                    </div>
                    <p class="btn-group"><mt-button type="primary" size="small">立即购买</mt-button><mt-button type="danger" size="small" @click="fallball">加入购物车</mt-button></p>
                </div>
            </div>

        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p class="goodsid">商品编号：{{goodsdetail.isdc}}</p>
                    <p class="save">库存情况：{{goodsdetail.num}}件</p>
                    <p class="uptime">上架时间：2015-04-20&nbsp;01:12:02</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>

                <mt-button type="danger" size="large"  plain>商品评论</mt-button>
            </div>
        </div>
        <div class="wall"></div>
        <!--<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">-->


        <!--</transition>-->

    </div>
</template>
<script>
    import swiper from '../subcomponent/swiper.vue'
    import mui from '../lib/mui/js/mui.min.js'

    export default{
        data(){
            return {
            goodsdetail:null,
                flag:false
            }
        },
        methods:{
            getgoodsdetail(){
                let goodslist = [
                    {
                        id:1,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:2,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:3,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:4,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:5,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:6,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    },
                    {
                        id:7,
                        title:'华为（HUAWEI）荣耀6plus16G双4G版',
                        oldprice:2155,
                        nowprice:1999,
                        num:65,
                        isdc:'154538645ddes'
                    }
                ];
               let currentid = this.$route.params.id ;
                goodslist.forEach(item => {
                    if(item.id == currentid ){
                        this.goodsdetail = item;
                    }
                })
            },
           fallball(){
                let count = mui('.mui-numbox').numbox().getValue();
                let addgoods = {
                    id:this.goodsdetail.id,
                    price:this.goodsdetail.nowprice,
                    count:count,
                    selected:false,
                    title:this.goodsdetail.title
                };
                this.$store.commit('addGoods',addgoods);
                mui('.mui-numbox').numbox().setValue(1);
            this.flag=!this.flag;
            console.log(this.flag)
    },
   beforeEnter(el){
        console.log("beforeEnter");
               el.style.transform="translate(0,0)";
   },
            enter(el,done){
       console.log("enter");
       el.offsetWidth;
        let ballposition = this.$refs.ball.getBoundingClientRect();
        let carposition = document.getElementById("carbadge").getBoundingClientRect();
        let xDist = carposition.left - ballposition.left;
        let yDist = carposition.top - ballposition.top;
                el.style.transition="all 1s ease";
                el.style.transform = `translate(${xDist}px,${yDist}px)`;

    done();
            },
            afterEnter(el){
                this.flag = !this.flag;
            }

        },
        mounted(){
            mui('.mui-numbox').numbox();
        },
        created(){
            this.getgoodsdetail();

        },
        components:{
            swiper
        }
    }
</script>
<style lang="less" scoped>
.goodsdetail-container{
    .mui-card{
    .changenum{
        margin: 5px 0;
    }
    .btn-group{
        .mint-button--primary{
            margin-right: 5px;
        }
    }
.mui-card-footer{
    display: block;
    .mint-button--primary{
        margin: 5px 0;
    }
}
    }
.wall{
    height: 100px;
}
.redball{
    width: 15px;
    height: 15px;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    z-index:999;
    top:390px;
    left: 150px;
    opacity:1;
}
}
</style>