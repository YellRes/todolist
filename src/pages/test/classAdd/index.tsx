import React, { Component } from 'react';

interface State {
  count: number
}

export default class Counter extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    }
  }

  addCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1 
    })
  }

  isNewAlert = () => {
    const { count } = this.state
    setTimeout(() => {
      alert('点击了' + this.state.count)
    }, 3000)
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>点击了{count}</p>
        <button onClick={this.addCount}>点击</button>
        <button onClick={this.isNewAlert}>显示弹框</button>
      </div>
    )
  }
}