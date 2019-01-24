<template>
<div class="numbox-container">
            <div class="mui-numbox" data-numbox-min="1"  data-numbox-step="1">
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" @change="numchange" ref="numbox" :value="goodscount" />
                <!-- "+"按钮，点击可增大当前数值 -->
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>
</div>
</template>
<script>
    import mui from '../lib/mui/js/mui.min.js'
    export default{

        data(){
            return{}
        },
        methods:{

            numchange(){
                let goodsid= this.goodsid;
                let count = this.$refs.numbox.value;
                console.log('goodsid----'+ goodsid + '-----count----' + count );
                this.$store.commit('updatacarcount',{
                    count:count,
                    id:goodsid
                })
            }
        },
        beforeMount(){

        },
        mounted(){
            mui('.mui-numbox').numbox()


        },
        props:['goodsid','goodscount'],
        created(){
            console.log(this.goodscount);


        }
    }
</script>
<style>

</style>