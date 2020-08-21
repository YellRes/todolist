import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './index.less'

interface Props {

}

interface State {
  isCheck: boolean
}

class Login extends Component<Props, State>{
  
  constructor(props: any) {
    super(props)

    this.state = {
      isCheck: false
    }
  }

  test = () => {
    this.setState({ isCheck: true })
  }

  render () {
    const {isCheck} = this.state
    return (
    <div className={`login_con animate__animated ${isCheck ? 'animate__bounce' : null}`}>
      <div className={ `animate__animated ${isCheck ? 'animate__bounce' : null}`} >
        <Input placeholder="userName" />
        <Input.Password placeholder="input password" />

        <Button type="primary" block onClick={this.test}>login</Button>
      </div>
    </div>
    )
  }
}

export default Login