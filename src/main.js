/**
 * Created by 章pc on 2018/11/28.
 */



import Vue from 'vue'
//导入vue路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入vueajax请求插件
import VueResource from 'vue-resource'
Vue.use(VueResource);
// 导入mint-ui组件
import MintUI from 'mint-ui'
 Vue.use(MintUI);
//导入vuex共享各大组件数据
import Vuex from 'vuex'
Vue.use(Vuex);
//导入查看缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
import 'mint-ui/lib/style.min.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import home from './panel/home.vue'
import member from './panel/member.vue'
import shopcart from './panel/shopcart.vue'
import search from './panel/search.vue'
import newslist from './newspanel/newslist.vue'
import newsdetail from './newspanel/newsdetail.vue'
import showimage from './imagepanel/showimage.vue'
import detailimage from './imagepanel/detailimage.vue'
import goodslist from './goods/goodslist.vue'
import goodsdetail from './goods/goodsdetail.vue'
import app from './app.vue'
let store;
store = new Vuex.Store({
    state: {
        car: [] //要永久保存的数据，设计购物车的数据结构 {id:商品的id,count:购买的数量,price:商品的单价,selected:选中的状态}
    },
    mutations: {
        addGoods: function (state, addgoods) {

            let index = state.car.findIndex(item => {
                return item.id === addgoods.id
            });
            console.log(index);
            if (index !== -1) {
                state.car[index].count += addgoods.count;
                console.log(state.car);

            } else {
                state.car.push(addgoods);
                console.log(state.car);
            }
            sessionStorage.setItem('car', JSON.stringify(state.car));

        },
        getcarmsg(state){

            state.car = JSON.parse(sessionStorage.getItem('car')) || [];
            console.log(state.car);
        },
        updatacarcount(state, updatacount){
            state.car.some(item => {
                if (item.id == updatacount.id) {
                    item.count = parseInt(updatacount.count);
                    console.log(item.count);
                    return true
                }
            });
            console.log(state.car);
            sessionStorage.setItem('car', JSON.stringify(state.car));
        },
        updatacarselected(state){
            sessionStorage.setItem('car', JSON.stringify(state.car));
        },
        removegoods(state,goodsid){
            let index = state.car.findIndex(item => {
                return item.id == goodsid
            });
            if(index != -1){
                state.car.splice(index,1);
                sessionStorage.setItem('car', JSON.stringify(state.car));
            }
        }
    },
    getters: {
        badgecount: function (state) {
            let totalcount = 0;
            state.car.forEach(item => {
                totalcount += item.count;
            });
            return totalcount
        },
        selectcount:function (state) {
            let selectcount = 0;
            state.car.forEach(item => {
                if(item.selected){
                    selectcount += item.count;
                }
            });
            return selectcount
        },
        totalprice:function (state) {
            let totalprice = 0;
            state.car.forEach(item => {
                if(item.selected){
                    totalprice += (item.count*item.price);

                }
            });
            return totalprice
        }

    }
});
let router = new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcart',component:shopcart},
        {path:'/search',component:search},
        {path:'/',redirect:'/home'},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsdetail/:id',component:newsdetail},
        {path:'/home/showimage',component:showimage},
        {path:'/home/detailimage/:id',component:detailimage},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsdetail/:id',component:goodsdetail}
    ],
    linkActiveClass:'mui-active'
});
let vm= new Vue({
        el:'#app',
        data:{

        },
        methods:{},
        render:function (createElements) {
            return createElements(app)
        },
    created(){
        this.$store.commit('getcarmsg');
    },
    router,
    store

    });
