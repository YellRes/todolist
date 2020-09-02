import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import './index.less'
import api from '../../api/config'


interface Props {
  history: any,
}

interface State {
  isCheck: boolean,
  userName: string,
  password: string,
  isLogin: boolean
}

class Login extends Component<Props, State>{

  constructor(props: any) {
    super(props)

    this.state = {
      isCheck: false,
      isLogin: true,
      userName: '',
      password: ''
    }
  }

  test = () => {
    const {userName, password} = this.state

    api.login({userName, password})
      .then((res :any) => {
        if (res.header && res.header.code === '1000') {
          message.success(res.header.message);
          this.props.history.push({
            pathname: '/taskList',
            query: {
              userId: res.body.userId
            }
          })
          localStorage.setItem('token', res.body.token)
        } else{
          message.error(res.header.message);
        }
      })
  }

  register = () => {
    this.setState({
      isLogin: false
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
    const {isCheck, isLogin} = this.state
    return (
    <div className={`login_con`}>
      <div className="login_container">
      <h1>{isLogin ? '登录' : '注册' }</h1>

      <Form>

        <Form.Item>
          <Input placeholder="用户名" onChange={(e) => this.setData(e, 'USER')} />
        </Form.Item>

        <Form.Item>
          <Input.Password placeholder="密码" onChange={(e) => this.setData(e, '')} />
        </Form.Item>

        {
          !isLogin ?
          <Form.Item>
            <Input.Password placeholder="再次输入密码" onChange={(e) => this.setData(e, '')} />
          </Form.Item> : null
        }


        <Button type="primary" block onClick={this.test}>登录</Button>
        <div>或</div>
        <Button type="primary" block onClick={this.register}>注册</Button>
      </Form>
      </div>
    </div>
    )
  }
}

export default Login