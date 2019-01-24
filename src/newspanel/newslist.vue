<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslistmsg">
                <router-link  tag="a" :to="'/home/newsdetail/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.image">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span class="confirmtime">发表时间:{{item.time}}</span>
                            <span class="clicknum">点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>

    export default{
        data:function () {
            return {
                newslistmsg:[]
            }
        }
        ,
        methods:{
//            getresource:function () {
//                this.$http.get('../json/newslist.json').then(function (data) {
//                    console.log(data);
//                },function (err) {
//                    console.log(err);
//                });
//            }
            getnewslist:function () {
                let newslist =  [{
                    title:"的萨克荆防颗粒举案说法加上联机",
                    time:"2018-10-15 12:12:12",
                    click:10,
                    image:"../image/index_icon_13.jpg",
                    id:1
                },
                    {
                        title:"激发司法解释快递费见覅好",
                        time:"2018-10-15 12:12:12",
                        click:12,
                        image:"../image/index_icon_13.jpg",
                        id:2
                    },
                    {
                        title:"放假啊释放时间饭还说大富科技",
                        time:"2018-10-15 12:12:12",
                        click:5,
                        image:"../image/index_icon_13.jpg",
                        id:3
                    }];
                this.newslistmsg = newslist;
            }
        },
        created:function () {
            this.getnewslist();
        }

    }
</script>
<style>
    .mui-media-body{
        font-size: 15px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 5px;
    }
</style>