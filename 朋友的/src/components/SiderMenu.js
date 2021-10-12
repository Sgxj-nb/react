import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import '@assets/styles/sidermenu.less'
import routes from '../router/routes'
import logo from '@assets/images/logo.png'

const {SubMenu, Item} = Menu
class SiderMenu extends Component {
  //根据路由树生成菜单列表
  generateMenus = menus => {
    return menus.map(item => {
      if (!item.children) {
        return <Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.title}</Link>
        </Item>
      } else {
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {this.generateMenus(item.children)}
        </SubMenu>
      }
    })
  }

  render() {
    return (
      <div>
        <header className="sidermenu-container">
          <img src={logo} />
          <h1>后台管理</h1>
        </header>
        <Menu 
          mode="inline" 
          theme="dark"
          /* 以商品的路由为例，this.props.location.pathname.split('/')值为：['', 'index', 'shop', 'product']
          所以我们需要截取前两位 */
          defaultOpenKeys={this.props.location.pathname.split('/').splice(2)}
          defaultSelectedKeys={this.props.location.pathname.split('/').reverse()[0]}>
          {this.generateMenus(routes)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(SiderMenu)

