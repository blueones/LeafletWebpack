const path = require('path')
const CopyWebpackPlugin=require('copy-webpack-plugin')
//const CleanWebpackPlugin=require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    devServer:{
        contentBase: './dist',
        //hot:true,
        open:true,
        overlay:true
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins:[
        new CopyWebpackPlugin([{from:'./index.html',to:'index.html'}])
        //new CleanWebpackPlugin(['dist'],{beforeEmit:true})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
};