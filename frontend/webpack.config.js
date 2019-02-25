var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('babel-polyfill');

module.exports = {
    entry: ['babel-regenerator-runtime', './src/index.js'],
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js" 
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
            }
      ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css'
        })
    ]

}