import React from "react";
import { Route, Redirect } from "react-router-dom";
import routeSetting from './index'


interface Props {
    location?: any
}

class AuthRouter extends React.Component<any, any> {
    render() {
        const pathname = this.props.location.pathname
        const isLogin = localStorage.getItem('token')
        const targetRouter = routeSetting.find(item => {
            return item.path === pathname
        })
        
        // 没有登录过 并且跳转了登录页面
        if (pathname == '/login' && !isLogin) {
            return <Route path={pathname} component={targetRouter?.component} />
        }

        return (
            isLogin ?
        ( <Route exact path={pathname} component={targetRouter?.component} />)
        : ( <Redirect exact to="/login" />)
        )
        

    }
}

export default AuthRouter