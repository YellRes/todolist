import React, { Component } from 'react';
import './index.less';

interface headerItemProps {
  tagName: string
}

class HeaderItem extends Component<headerItemProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { children, tagName } = this.props

    return (
      <div className={'headerItem__container'}>

        <span className={'headerItem_left'}>
          {children}
        </span>

        <span className={'headerItem_right'}>
          {tagName}
        </span>
        
      </div>
    )
  }
}

export default HeaderItem