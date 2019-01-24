<template>
    <div class="detailimage-container">
        <h3 class="title">很美的落地大书柜&nbsp;&nbsp;可以放超多的图书吧</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <!--缩略图-->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!--内容-->
    <div class="content"></div>

        <!--评论-->
    </div>
</template>
<script>
    export default{
        data(){

            return {
                id:this.$route.params.id,
                slide1:[

                ]
            }
        },
        methods:{

            getlist(){
                let imgmsglist1 = [ {
                    src:'../image/1.jpg'
                }, {
                    src:'../image/1.jpg'
                }, {
                    src:'../image/1.jpg'
                }, {
                    src:'../image/1.jpg'
                }, {
                    src:'../image/1.jpg'
                }];
                let imgmsglist2 = [ {
                    src:'../image/2.jpg'
                }, {
                    src:'../image/2.jpg'
                }, {
                    src:'../image/2.jpg'
                }, {
                    src:'../image/2.jpg'
                }, {

                    src:'../image/2.jpg'

                }];
                let imgmsglist3 = [ {
                    src:'../image/3.jpg'
                }, {
                    src:'../image/3.jpg'
                }, {
                    src:'../image/3.jpg'
                }, {
                    src:'../image/3.jpg'
                }, {

                    src:'../image/3.jpg'

                }];
                let imgmsglist4 = [ {
                    src:'../image/4.jpg'
                }, {
                    src:'../image/4.jpg'
                }, {
                    src:'../image/4.jpg'
                }, {
                    src:'../image/4.jpg'
                }, {

                    src:'../image/4.jpg'

                }];
                let list = [];
                switch (this.id){
                    case 1 : list = imgmsglist1;
                    break;
                    case 2 : list = imgmsglist2;
                        break;
                    case 3 : list = imgmsglist3;
                        break;
                    case 4 : list = imgmsglist4;
                        break;
                    default:list = imgmsglist1;
                    break;
                }
                list.forEach((item)=>{
                    item.w=600;
                    item.h=400;
                    item.msrc=item.src;
                } );
                this.slide1 = list;
        },
            handleClose(){
                console.log('close event');
            }

    },
        created(){
            this.getlist();

        }

    }
</script>
<style lang="less" scoped>
    .detailimage-container{
    div{
    .my-gallery{
        display: flex;
        flex-wrap: nowrap;
    }
    }

    }

</style>