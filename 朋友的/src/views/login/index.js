import React from 'react'
import './login.less'
import { Redirect } from 'react-router-dom'
import { generateRandomStr } from '@utils'
import { connect } from 'react-redux'
import { initUserData } from '@store/actions'
import {Input, Button, Form} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'

function Login(props) {
    const onClickLogin = values => {
        const userInfo = {
            ...values,
            isLogin: true,
            userId: generateRandomStr,
            token: `${generateRandomStr}-react-admin-${new Date().getTime()}`
        }
        //在这里应该先将数据交给redux，否则在index会获取不到
        props.initUserData(userInfo)
        props.history.replace('/index')
    }
    console.log(props)
    if (props.userInfo.isLogin) {
        return <Redirect to='/index' />
    }
    return (
        <div className="login-container">
            <section>
                <h1>用户登录</h1>
                <Form
                    onFinish={onClickLogin}
                    name="normal_login"
                    initialValues={{remember: true}}
                >
                <Form.Item
                    name="username"
                    rules={[{required: true,message: '请输入用户名/手机号!'},{max:11,message: '最多为11位!'}]}
                >
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true,message: '请输入密码!'},{min:3,message: '密码不能少于3位!'}]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>登录</Button>
                </Form.Item>
                </Form>
            </section>
        </div>
    )
}

const mapDispathToProps = {
    initUserData
}

export default connect(state => ({userInfo:state.userInfo}), mapDispathToProps)(Login)
