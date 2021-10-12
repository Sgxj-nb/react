
import React from 'react'
import {
    SmileOutlined, ShoppingOutlined, AppstoreOutlined, ShopOutlined,
    UserOutlined, AreaChartOutlined, PieChartOutlined, LineChartOutlined
} from '@ant-design/icons'

export default [
    // 欢迎页
    {
        title: '欢迎',
        key: 'welcome',
        path: '/index/welcome',
        icon: <SmileOutlined />
    },
    // 商品
    {
        title: '商品',
        key: 'shop',
        icon: <ShoppingOutlined />,
        children: [
            {
                title: '分类列表',
                key: 'category',
                path: '/index/shop/category',
                icon: <AppstoreOutlined />
            },
            {
                title: '商品管理',
                key: 'product',
                path: '/index/shop/product',
                icon: <ShopOutlined />
            }
        ]
    },
    // 用户
    {
        title: '用户列表',
        key: 'user',
        path: '/index/user',
        icon: <UserOutlined />
    },
    // 图表
    {
        title: '图表',
        key: 'chart',
        icon: <AreaChartOutlined />,
        children: [
            {
                title: '饼状图',
                key: 'bar',
                path: '/index/charts/bar',
                icon: <PieChartOutlined />
            },
            {
                title: '线状图',
                key: 'line',
                path: '/index/charts/line',
                icon: <LineChartOutlined />
            }
        ]
    },
]