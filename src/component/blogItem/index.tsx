import React, { Component } from 'react'
import { Avatar } from 'antd';
import './index.less'

interface BlogProps {
  blogImgUrl: string,
  blogTitle: string,
  releaseDate: string,
  creater: string,
  createrAvater?: string,
  userId?: string,
  tagType?: string
}

interface BlogState {

}

class BlogItem extends Component<BlogProps, any> {
  constructor(props: BlogProps) {
    super(props)
  }

  render() {
    const {blogImgUrl, releaseDate, tagType, blogTitle, creater, createrAvater} = this.props
    return (
      <div className="blogItem">
        <div className="blogItem__img__con">
          <img src={blogImgUrl} className={'blogItem__img'}/>
          <div className={'blogItem__release'}>
            <div>
              <Avatar src={createrAvater}/>
              <span>{creater}</span>
            </div>
            <span>{releaseDate}</span>
          </div>
        </div>
        <div className={'blogItem__content'}>
          <p>{blogTitle}</p>
        </div>
      </div>
    )
  }
}

export default BlogItem
