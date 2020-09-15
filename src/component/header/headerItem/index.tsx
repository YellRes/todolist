import React, { Component } from 'react';

interface headerItemProps {
  iconChild?: HTMLElement,
  tagName: string
}

class HeaderItem extends Component<headerItemProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { iconChild, tagName } = this.props

    return (
      <div className={'headerItem__container'}>

        <div className={'headerItem_left'}>
          {iconChild}
        </div>

        <div className={'headerItem_right'}>
          {tagName}
        </div>
        
      </div>
    )
  }
}

export default HeaderItem