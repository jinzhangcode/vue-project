<template>
<div class="shopcar-container">
    <div class="mui-card" v-for="item in $store.state.car" :key="item.id">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch v-model="item.selected" @change="switchchang()"></mt-switch>
                <img src="" alt="">
                <div class="content_box">
                <p>{{item.title}}</p>
                <div class="priceandnum">
                    <span>￥{{item.price}}</span>
                    <numbox :goodsid="item.id" :goodscount="item.count"></numbox>
                    <a @click.prevent="removegoods(item.id)">刪除</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <div class="text">
                <p>總計（不含運費）</p>
                    <p>
                        已勾選商品<span class="strong">{{$store.getters.selectcount}}</span>件，總價：<span class="strong">￥{{$store.getters.totalprice}}</span>
                    </p>
                </div>
                <mt-button type="danger" size="small">結算</mt-button>
            </div>
        </div>
    </div>
    <div class="wall"></div>
</div>
</template>
<script>

    import numbox from '../subcomponent/numbox.vue'
    export default{

        date(){
            return{
                value:'',
                carmsgs:null
            }
        },
        methods:{

            switchchang(){
                this.$store.commit('updatacarselected');
            },
            removegoods(goodsid){
                this.$store.commit('removegoods',goodsid)
            }

        },
        mounted(){



        },
        created(){


        },
        components:{
            numbox
        }
    }
</script>
<style lang="less" scoped>
    .shopcar-container{
        .mui-card{
            .mui-card-content-inner{
                display: flex;
                justify-content:space-between;
                .priceandnum{
                display: flex;
                }
                .strong{
                    color:red;
                }
            }
        }
    .wall{
        height: 100px;
    }
    }
</style>