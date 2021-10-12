import React, { Fragment } from 'react'
// import {Button, ConfigProvider} from 'antd'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '@views/login'
import Home from '@views/index'

export default function App() {
    return (
        <Fragment>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/index" component={Home} />
                <Redirect to="/index" />
            </Switch>
        </Fragment>
    )
}
