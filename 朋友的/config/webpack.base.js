const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // assetModuleFilename: 'images/[hash:5][ext][query]'
    },
    // 别名配置
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            '@src': path.resolve('./src'),
            '@serve': path.resolve('./src/serve'),
            '@store': path.resolve('./src/store'),
            '@utils': path.resolve('./src/utils'),
            '@views': path.resolve('./src/views'),
            '@assets': path.resolve('./src/assets'),
            '@components': path.resolve('./src/components'),
        },
    },
    module: {
        // babel相关配置
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env', // 处理ES6新语法兼容              
                            {
                                useBuiltIns: 'usage',
                                corejs: 3,// core-js处理ES6新API兼容
                                targets: {//指定兼容哪些浏览器
                                    'chrome': '58',
                                    'ie': '9'
                                }
                            }  
                        ],
                        '@babel/preset-react', // 处理React兼容性
                    ],
                    cacheDirectory: true,//开启babel缓存
                    plugins: [
                        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], // 处理antd样式   
                        '@babel/plugin-proposal-class-properties', // 处理类属性定义  
                    ],
                },
            },
            {
                //less-loader：将less编译为css，但是不生成单独的css文件，在内存中
                // css-loader：将less编译后的css转换为CommonJS的一个模块
                // style-loader：用于在html文档中创建一个style标签，将样式塞进去
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                // autoprefixer({browsers: ['last 2 version', '>1%', 'not ie < 11', "last 3 iOS versions", "iOS 7",]}),
                                require('postcss-preset-env')({
                                    autoprefixer: {flexbox: 'no-2009'},
                                    stage: 3//兼容程度
                                }),
                                require('postcss-normalize')()//兼容老旧版本的浏览器
                            ]
                        }
                    }
                }, 'less-loader']
            },
            // webpack5中可以使用默认的asset来处理图片，也可以使用url-loader来处理，也可以使用url-loader和file-loader
            // 1、asset/resource 发送一个单独的文件并导出URL，替代file-loader
            // 2、asset/inline 导出一个资源的data URL，替代url-loader
            // 3、asset/source 到处资源的源代码，之前通过使用raw-loader实现
            {
                type: 'asset/resource',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                generator: {
                    filename: 'images/[name].[hash:5][ext]'
                },
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 8 * 1024,  //小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
                //     },
                // },
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'fonts/[base]',
            //     },
            // },
        ]
    },
    //插件配置
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // 以当前文件为模板创建新的html（结构和原来一样，会自动引入打包后的其他文件）
            template: './public/index.html',
        }),
        // 打包出来的css文件夹中会有一个.map结尾的文件，这是一个映射文件，会告诉你源代码中在哪里报错了，最好不要删除
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    // 持久缓存 【性能优化】
    // cache: {
    //     // 1. 将缓存类型设置为文件系统
    //     type: 'filesystem', // 可以在 "memory" 和 "filesystem" 间进行选择
    //     buildDependencies: {
    //       // 2. 将你的 config 添加为 buildDependency，以便在改变 config 时获得缓存无效
    //       config: [__filename],
    //       // 3. 如果你有其他的东西被构建依赖，你可以在这里添加它们
    //       // 注意，webpack、加载器和所有从你的配置中引用的模块都会被自动添加
    //     },
    // },
}