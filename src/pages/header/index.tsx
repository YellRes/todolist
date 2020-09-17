import React, { Component } from 'react';
import HeaderItem from '../../component/header/headerItem';
import UserInfo from '../../component/header/userInfo'
import YellCard from '../../component/yellcard'
import header from './setting'
import './index.less'

class HeaderComponent extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      userName: 'Yellres',
      userImage: 'dsd',
      userMoto: '种一棵树最好的时间是十年前，其次是现在',
      blogNum: 10,
      tagNum: 10
    }
  }

  render() {
    const { userName, userImage, userMoto, blogNum, tagNum } = this.state
    return (
      <YellCard>
        <div className={'header__container'}>
          <div className={'header__title'}>
            Yellres's Blog
          </div>

          <div className={'header__content'}>
            {
              header.headerSetting.map((item: any) => {
                return (
                  <HeaderItem tagName={item.tagName}>
                      <item.component/>
                  </HeaderItem>
                )
              })
            }
          </div>
          
        </div>

        <UserInfo
          userName={userName} 
          userImage={userImage} 
          userMoto={userMoto} 
          blogNum={blogNum} 
          tagNum={tagNum}
          >
        </UserInfo>
      
      </YellCard>
    )
  }

}

export default HeaderComponent