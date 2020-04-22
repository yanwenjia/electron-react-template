import React from 'react';
import Enter from '../container/enter'
import Test from '../container/test'
// 路由使用 history模式
// import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
// 路由采用 hash模式
import { HashRouter, Switch, Route, Link  } from 'react-router-dom'
/**
 * Route 属性exact 严格匹配
 * BrowserRouter 自带 history 属性 直接props.history使用
 * Route path属性没有时 component 作为404 组件
 * Switch  从上到下依次匹配 只匹配一个
 */
function Routers(props) {
    return (
        <div>
            <HashRouter>
                <Switch >
                    <Route exact path="/" component={Enter} />
                    <Route path="/test" component={Test} />
                    {/* <Basic /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
                <a href="#/test">路由里面</a>
                <Link to="/">首页</Link>
                <Link to="/test">测试</Link>
            </HashRouter>
        </div>

    )
}

export default Routers;