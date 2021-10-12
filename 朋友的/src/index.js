import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/reset.less'
import store from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('app')
)