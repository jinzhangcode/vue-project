<template>
   <div class="comment-container">
       <h3 class="title">发表评论</h3>
       <hr>
       <textarea placeholder="请输入你需要评论的内容" v-model="addcommentcontent"></textarea>
       <mt-button type="primary" size="large" @click="addcomment" >确认发布</mt-button>

       <div class="comment-box" v-for="(item,i) in commentlist" :key="item.id">
    <p class="comment-title">
        第{{i+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{item.commenttime}}
    </p>
            <p class="comment-content">
              {{item.commentcontent}}
            </p>

       </div>
       <mt-button type="danger" size="large" plain @click="getcommentlist">加载更多</mt-button>
   </div>
</template>
<script>
    export default{
        data(){
            return {
                commentlist:[],
                addcommentcontent:'',

            }
        },
        methods:{
            getcommentlist(){
                let commentlist = [{
                    id:1,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'哈哈哈哈'
                },{
                    id:2,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                },{
                    id:3,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                },{
                    id:4,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                },{
                    id:5,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                },{
                    id:6,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                },{
                    id:7,
                    commenttime:'2018/12/12 10:12:10',
                    commentcontent:'你是我的'

                }
                ];
                commentlist.forEach(item => {

                    this.commentlist.push(item);
                })

            },
            addcomment(){
                if(this.addcommentcontent != ''){
                    let newcomment = {
                        id:this.$route.params.id,
                        commenttime:'2018/12/12 10:10:10',
                        commentcontent:this.addcommentcontent

                    };
                    this.commentlist.unshift(newcomment);
                    this.addcommentcontent = "";
//                    window.localStorage.setItem('comment',JSON.stringify(this.commentlist));

                }else {

                    alert('评论内容不能为空');
                }
            }
        },
        created(){
            this.getcommentlist();

        },



    }
</script>
<style lang="less" scoped>
    .comment-container{
    .mint-button{
        margin-bottom: 10px;
    }
    textarea{
        height: 150px;
        margin:0;
    }
    .comment-box{
    p{
        margin: 0;
    }
        .comment-title{
            background-color: #ccc;
            color:black;
            font-size: 14px;
            line-height: 25px;
        }
        .comment-content{
    font-size: 16px;
            line-height: 35px;
            color:black;
            text-indent: 2em;
        }

    }
    }
</style>