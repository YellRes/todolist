import React, { Component } from 'react'
import './index.less'

interface BlogProps {
  blogImgUrl: string,
  releaseDate: string,
  userId: string,
  creater: string,
  tagType: string
}

interface BlogState {

}

class BlogItem extends Component<BlogProps, any> {
  constructor(props: BlogProps) {
    super(props)
  }

  render() {
    const {blogImgUrl, releaseDate, tagType} = this.props
    return (
      <div className="blog_container">
        
      </div>
    )
  }
}

export default BlogItem
