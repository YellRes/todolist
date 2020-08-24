import React, { Component } from 'react'
import { Input, Button, message } from 'antd'
import './index.less'
import api from '../../api/config'


interface Props {

}

interface State {
  isCheck: boolean,
  userName: string,
  password: string
}

class Login extends Component<Props, State>{
  
  constructor(props: any) {
    super(props)

    this.state = {
      isCheck: false,
      userName: '',
      password: ''
    }
  }

  test = () => {
    const {userName, password} = this.state

    api.login({userName, password})
      .then(res => {
        debugger


        if (res.header && res.header.code === '1000') {
          message.info(res.header.message);
        } else{
          message.error(res.header.message);
        }
      })
  }

  setData = (e: any, type: any) => {
    if (type === 'USER') {
      this.setState({
        userName: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }

  render () {
    const {isCheck} = this.state
    return (
    <div className={`login_con`}>
      <h1>login</h1>
      <div className="login_container">

        <Input placeholder="用户名" onChange={(e) => this.setData(e, 'USER')} />
        <Input.Password placeholder="密码" onChange={(e) => this.setData(e, '')} />

        <Button type="primary" block onClick={this.test}>login</Button>

      </div>
    </div>
    )
  }
}

export default Login