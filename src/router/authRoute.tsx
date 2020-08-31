import React from "react";
import { Route, Redirect } from "react-router-dom";
import routeSetting from './index'
import Login from '../component/login'


interface Props {
    location?: any
}

class AuthRouter extends React.Component<Props> {
    render() {
        const pathname = this.props.location.pathname
        const isLogin = localStorage.getItem('token')
        const targetRouter = routeSetting.find(item => {
            return item.path === pathname
        })

        if (pathname === "/") {
            return <Route exact path='/login' component={Login} />
          }

        if (isLogin) {
            if (pathname === '/login') {
                return <Route exact path='/login' component={Login} />
            } else {
                return (
                    <Route exact path={pathname} component={targetRouter?.component}/>
                )
            }
        } else {

            return     <Route exact component={Login} />
        }

    }
}

export default AuthRouter