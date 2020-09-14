import React, { Component } from 'react'
import './index.less'

interface BlogProps {
  blogImgUrl: string,
  blogTitle: string,
  releaseDate: string,
  creater: string,
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
    const {blogImgUrl, releaseDate, tagType, blogTitle, creater} = this.props
    return (
      <div className="blogItem">
        <img src={blogImgUrl} className={'blogItem__img'}/>
        <div className={'blogItem__release'}>
          {creater}
          {releaseDate}
        </div>
        <div className={'blogItem__content'}>
          <p>{blogTitle}</p>
        </div>

      </div>
    )
  }
}

export default BlogItem
