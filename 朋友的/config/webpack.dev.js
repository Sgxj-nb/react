const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    // 模式
    mode: 'development',
    // 调试工具
    devtool: 'inline-source-map',
    // 开发服务器
    devServer: {
        contentBase: false, // 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        compress: true, // 启用gzip压缩
        inline: true, // 设置为true，当源文件改变时会自动刷新页面
        hot: true, // 模块热更新，取决于HotModuleReplacementPlugin
        // host: '127.0.0.1', // 设置默认监听域名，如果省略，默认为“localhost”
        // port: 8080, // 设置默认监听端口，如果省略，默认为“8080”,
        open: true, // 默认打开浏览器进入页面
    },
    // 插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        nodeEnv: 'development',
        moduleIds: 'named',
    },
    // 要设置target: 'web'才会有热更新效果
    target: 'web',
    //优化配置
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    comments: false,
                    compress: {
                        unused: true,
                        // drop_console: true,
                        drop_debugger: true,
                        dead_code: true
                    }
                },
                parallel: true,//使用多进程并发运行以提高构建速度
            })
        ]
    },
})