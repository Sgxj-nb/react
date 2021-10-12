# webpack5-react

#### 介绍
使用webpack5.x + babel7.x + react17.x + antd4.x搭建的一个自定义react开发化境


#### 安装教程

`npm install`    安装依赖

#### 使用说明

1.  `npm run build`  进行打包，eslint-commit文件夹是关于eslint配置和代码质量管控流程的配置

2.  本项目默认没有安装eslint和测试，如果需要可以在根目录下的eslint-commit文件夹里面查看，关于eslint的依赖包需要自己下载

3. eslint相关：
    (1)、  eslint所需依赖包命令：首先安装eslint   `npm i -D eslint`
    (2)、  初始化并生成配置文件.eslintrc.js,各初始化参数可以先随便选，后面再做修改：`./node_modules/.bin/eslint --init`
    (3)、  安装对babel和react的支持：`npm i -D babel-eslint eslint-plugin-react eslint-plugin-react-hooks`
    (4)、  引入Airbnb规则：`npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y`
    (5)、  配置eslint，详情见根目录下的eslint-commit-test文件夹下的：.eslintrc.js或者.eslintrc2.js

4. 配置代码质量管控流程：
    (1)、安装依赖：`npm install lint-staged @commitlint/cli @commitlint/config-conventional -D`
    (2)、提交的规范配置代码在：eslint-commit-test----->commit.json里面，最后把他放在  `package.json`  中即可

5. 单元测试：
    (1)、安装jest依赖：`npm install jest-environment-enzyme ts-jest@next enzyme enzyme-adapter-react-17 enzyme-to-json  @types/enzyme @types/enzyme-adapter-react-17 @types/enzyme-to-json -D `
    (2)、应该是在根目录下新建test文件夹存放的，不过我为了方便，统一放在`eslint-commit-test`文件夹下，主要是：jest相关

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
