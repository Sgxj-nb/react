import React from 'react'
import {Button, Layout} from 'antd'
import {getStorageVal} from '@utils/local'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { removeUserInfo } from '@store/actions'
import SiderMenu from '@components/SiderMenu'
import Header from '@components/Header'
import Welcome from '../welcome'
import Category from '../shop/Category'
import Product from '../shop/Product'
import User from '../user'
import Bar from '../bar'
import Line from '../bar/Line'
import './index.less'

const {Footer, Sider, Content} = Layout

function Home(props) {
    console.log(props)
    const token = getStorageVal('token')
    !token && props.history.replace('/login')

    const logout = () => {
        props.removeUserInfo()
    }
    if (!token) {
        return <Redirect to='/login' />
    } else {
        return (
            <Layout className="home-main-container">
                <Sider className="sider-container">
                    <SiderMenu />
                </Sider>
                <Layout>
                    <Header />
                    <Content className="content-container">
                        <Switch>
                            <Route path="/index/welcome" component={Welcome} />
                            <Route path="/index/shop/category" component={Category} />
                            <Route path="/index/shop/product" component={Product} />
                            <Route path="/index/user" component={User} />
                            <Route path="/index/charts/bar" component={Bar} />
                            <Route path="/index/charts/line" component={Line} />
                            <Redirect to="/index/welcome" />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center'}}>后台管理系统</Footer>
                </Layout>
            </Layout>
        )
    }
}

const mapDispathToProps = {
    removeUserInfo
}

export default connect(state => ({userInfo:state.userInfo}), mapDispathToProps)(Home)


/* 
这里是使用装饰器语法加工后的形式
@connect(state => ({userInfo:state.userInfo}), mapDispathToProps)

function Home(props) {
    return (
        <div>
            HOME
        </div>
    )
}
export default function

------------------------------------


@demo
class myClass {}
function demo(target) {
    target.a = 1
}

上面的代码就等价于
class myClass {}
function demo(target) {
    target.a = 1
}
myClass = demo(myClass)
*/