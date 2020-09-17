import React, { Component } from 'react';
import './index.less' 

class YellCard extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() { 
    const { children } = this.props
    return ( 
      <div className={'card__container'}>
        {children}
      </div>
    )
  }
}
 
export default YellCard;