import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StopTime from '../../../component/stopTime'
import './index.less'

class StopWatch extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <StopTime/>

    )
  }
}


export default  StopWatch