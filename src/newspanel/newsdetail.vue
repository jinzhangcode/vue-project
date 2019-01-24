<template>
    <div class="detailnews-container">

        <h3 class="title">{{detailnews.title}}</h3>
        <p class="subtitle">
            <span class="time">发表时间：{{detailnews.time}}</span>
            <span class="click_num">点击{{detailnews.click}}次</span>
        </p>
        <hr>
        <div class="newscontent">
           {{detailnews.content}}

        </div>
        <comment></comment>


    </div>

</template>
<script>
    import comment from '../subcomponent/comment.vue'
    export default{
        data:function () {
            return{
                detailnews:{}

            }

        },
        methods:{
            getdetailnews:function () {
                console.log(this.$route.params.id);
                let detailnews =  {};
                let detailnewslist =[{
                    title:"的萨克荆防颗粒举案说法加上联机",
                    time:"2018-10-15 12:12:12",
                    click:10,
                    image:"../image/index_icon_13.jpg",
                    content:`由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
                    自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目` ,
                    id:1
                },
                    {
                        title:"激发司法解释快递费见覅好",
                        time:"2018-10-15 12:12:12",
                        click:12,
                        image:"../image/index_icon_13.jpg",
                    content:`由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
                    自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目`,
                        id:2
                    },
                    {
                        title:"放假啊释放时间饭还说大富科技",
                        time:"2018-10-15 12:12:12",
                        click:5,
                        image:"../image/index_icon_13.jpg",
                        content:`由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
                    自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目。
            由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。
            自 6 月初开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件，
            于本周发布了 0.2.0 版本。本文介绍如何从零开始构建一个使用 Mint UI 的 Vue 项目`,
                        id:3
                    }];
                detailnewslist.forEach(item => {
                    if(item.id == this.$route.params.id){

                        detailnews = item;
                    }
                });
                this.detailnews = detailnews;

            }

        },
        created:function () {
            this.getdetailnews();
        },
        components:{
            comment
        }


    }
</script>
<style lang="less" scoped>
    .detailnews-container{
        background-color: white;
        padding:0 5px;
    margin-bottom:100px;
        .title{
            font-size: 18px;
            text-align: center;
            line-height: 30px;
            color: red;
        }
    .subtitle{
        display: flex;
        justify-content:space-between;
        font-size: 13px;
    }
    }
</style>