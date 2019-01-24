/**
 * Created by 章pc on 2018/11/28.
 */

const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
const vuetemplatecomplier = require('vue-template-compiler');
const { VueLoaderPlugin } = require('vue-loader');
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
       new VueLoaderPlugin()

    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {
                test:/\.(jpg|png|jpeg|gif)$/,use:'url-loader?limit=20000&name=[hash:8]-[name].[ext]'
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'
            },
            {
                test:/\.js$/,use:'babel-loader',exclude:/node_modules/
            },
            {
                test:/\.vue$/,use:"vue-loader"
            }
            // {
            //     test:/\.scss$/,use:['style-loader','css-loader','sass-loader']
            // }
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }


}