import React, { Component } from 'react';
import YellCard from '../../yellcard'
import { Avatar } from 'antd';
import './index.less';

interface UserProps {
  userName: string;
  userImage: string;
  userMoto: string;
  blogNum: number;
  tagNum: number;

}

class UserInfo extends Component<UserProps, any>{
  constructor(props: UserProps) {
    super(props);
  }

  render() {
    const {userName, userImage, userMoto, blogNum, tagNum} = this.props
    return(
      <YellCard className={''}>

        <div className="user__top user__container">
          <div className="user__avatar">
            <Avatar
              size={100} 
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <div className="user__name">
            {userName}
          </div>
          <div className="user__moto">
            {userMoto}
          </div>
        </div>

        <div className="user__bottom">
          <div className="tag__icon">
            <div className="user__name">{blogNum}</div>
            <div>博客</div> 
          </div>

          <div className="tag__icon">
            <div className="user__name">{tagNum}</div>
            <div>标签</div> 
          </div>
        </div>

      </YellCard>
    )
  }
}

export default UserInfo