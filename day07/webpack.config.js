//webpack采用common.js写法
//let path = require('path');//path是node内置的
//console.log(path.resolve('./dist'));//会转换成绝对路径
let HtmlWebpackPlugin = require('html-webpack-plugin');//需要引入打包插件

//高版本需要该插件
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    /*entry:"./src/main.js",//webpack打包的入口文件，会自动查找依赖进行打包
    output: {
        path:path.resolve('./dist'),//打包后的文件存放的地方,必须是绝对路径
        filename: "bundle.js"//打包后输出文件的文件名
        //--dirname:node内置的，绝对路径名字
    },
    mode:'development'*/
    mode:'development',
    //模块的解析规则
    //将所有的js语法进行转移，使用的是babel-loader,排除掉node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                //顺序是从右往左的，先使用css-loader
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                //顺序是从右往左的，先使用css-loader
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/,
                //8k以下的转成Base64
                use: ["url-loader?limit=8192"]
            },
            {
                test: /\.vue$/,
                //8k以下的转成Base64
                use: ["vue-loader"]
            }
        ]
    },
    //配置插件
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',//使用的模板
            //filename: 'login.html'//产出的文件名字(尽量不会改，会影响webpack-dev-server的默认打开页面index.html)
        }),
        new VueLoaderPlugin()
    ]
}