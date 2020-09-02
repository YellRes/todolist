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
        debugger
        return (
            isLogin ?
        ( <Route component={targetRouter?.component} />)
        : ( <Redirect to="/login"/>)
        )

    }
}

export default AuthRouter