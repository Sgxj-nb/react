const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


module.exports = merge(baseWebpackConfig, {
    // 模式
    mode: 'production',
    // 调试工具
    devtool: 'hidden-source-map',
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash].js',
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ids.HashedModuleIdsPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    // 代码分离相关
    optimization: {
        nodeEnv: 'production',
        runtimeChunk: {
            name: 'manifest',
        },
        minimizer: [new CssMinimizerPlugin()],//生产环境下压缩css，开发环境下将optimization.minimize 设置为 true即可
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    }
})