<template>
    <div class="image-container">
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">

                <a v-for="(item,i) in navbarmsg" :class="['mui-control-item',i==0?'mui-active':'']">
                   {{item}}
                </a>
            </div>
        </div>
        <ul class="imagelist">
        <router-link :to="'/home/detailimage/' + item.id" tag="li" class="imagemsgbox" v-for="item in imagemsg" :key="item.id">
            <img  v-lazy="item.image"  alt="">
            <div class="image-content">
                <p class="title">{{item.title}}</p>
                <p class="content">{{item.content}}</p>
            </div>
        </router-link>
        </ul>
    </div>

</template>
<script>
    import mui from '../lib/mui/js/mui.min'

    export default{
        data:function () {
            return {

                navbarmsg:[],
                imagemsg:[]
            }
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration:0.0005
            });
        },
        methods:{
        getnavbar:function () {
            let navbarmsg = ['摄影器材','明星写真','清纯美女','古典美女','家居装修','性感美女'];
//            let navbarmsg = [{name:'摄影器材',flag:true},{name:'明星写真',flag:false}
//                ,{name:'清纯美女',flag:false},{name:'古典美女',flag:false}
//                ,{name:'家居装修',flag:false},{name:'性感美女',flag:false}];
            this.navbarmsg = navbarmsg;
        },
            getimagemsg:function () {
                let imagemsg = [
                    {
                        id:1,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    } ,{
                        id:2,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    },{
                        id:3,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    },{
                        id:4,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    },{
                        id:5,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    },{
                        id:6,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    },{
                        id:7,
                        image:'../image/test.jpg',
                        title:'标题',
                        content:'阿斯蒂芬啊不放假事发地法第三款福建省的福克斯的' +
                        '积分看了看束带结发上课了复健科萨芬'
                    }


                ];
                this.imagemsg = imagemsg;
            }
        },
        created:function () {
        this.getnavbar();
        this.getimagemsg();
    }

    }
</script>
<style lang="less" scoped>
    *{
        touch-action: pan-y;
    }
    .image-container{

        .imagelist{
        list-style:none;
        padding:0;

        .imagemsgbox{
            margin: 10px;
            box-shadow: 0 0 10px #000;
            height: 400px;
            position:relative;
        background-color:#ccc;
        text-align:center;
            img{
                width: 100%;
                height: 100%;
            }

            img[lazy=loading]{
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .image-content{
                position: absolute;
                bottom:0;
                background-color:rgba(0,0,0,0.4);
                width:100%;
                .title{

                }
                .content{

                }
            }
        }
    }
    }
</style>