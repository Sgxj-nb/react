import React, {useState} from 'react'
import {Button, Modal} from 'antd'
import {connect} from 'react-redux'
import screenfull from 'screenfull'
import {formatTime} from '@utils'
import {withRouter} from 'react-router-dom'
import routes from '../router/routes'
import '@assets/styles/header.less'
import {removeUserInfo} from '@store/actions'
import {FullscreenOutlined, FullscreenExitOutlined, ExclamationCircleOutlined} from '@ant-design/icons'

const {confirm} = Modal

function Header(props) {
  const [isFullScreen, setFullScreen] = useState(false)
  //全屏切换
  const onScreenFull = () => {
    screenfull.toggle()
    setFullScreen(!isFullScreen)
  }
  //退出登录
  const logout = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定要退出登录吗？',
      cancelText: '取消',
      okText: '确定',
      okType: 'danger',
      onOk() {
        removeUserInfo()
        window.location.reload()
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  //获取当前头部标题
  const getHeaderTitle = () => {
    let title = ''
    let routeKey = props.location.pathname.split('/').reverse()[0]
    routes.forEach(item => {
      //如果有children并且是个数组
      if (item.children && item.children instanceof Array) {
        let tmp = item.children.find(ele => ele.key === routeKey)
        if (tmp) title = tmp.title
      } else {
        if (routeKey === item.key) title = item.title
      }
    })
    return title
  }
  console.log(getHeaderTitle())
  return (
    <header className="header-main-container">
      <div className="header-top-content">
        <Button size="small" onClick={onScreenFull}>{isFullScreen?<FullscreenOutlined />:<FullscreenExitOutlined />}</Button>
        <span className="username">欢迎{props.userInfo.username||'您'}</span>
        <Button type="link" size="small" onClick={logout}>退出登录</Button>
      </div>
      <div className="header-bottom-content">
        <div className="header-route-title">{getHeaderTitle()}</div>
        <div className="header-right-other">
          {formatTime(new Date()).split(' ')[0]}
          <img src="https://api.map.baidu.com/images/weather/day/qing.png" alt="天气信息" />
          晴&nbsp;  温度：2°
        </div>
      </div>
    </header>
  )
}

const mapDispatchToProps = {
  removeUserInfo
}

// 在非路由组件中想要使用路由组件的api，需要借助withRouter
export default connect(state => ({userInfo:state.userInfo}), mapDispatchToProps)(withRouter(Header))

/* 
下面是装饰器的写法:

@connect(state => ({userInfo:state.userInfo}), mapDispatchToProps)
@withRouter

function Header() {
  return (
    <div>header</div>
  )
}

export default Header
*/