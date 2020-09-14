import React, { Component } from 'react'
import BlogItem from '../../component/blogItem'  
import './index.less'

class Home extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <BlogItem
                creater={'Yellres'}
                releaseDate={'2020-10-26'}
                blogTitle={'学会python统计数据，月入百万不是梦'}
                blogImgUrl={'https://images.pexels.com/photos/3715398/pexels-photo-3715398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            ></BlogItem>
        )
    }
}


export default Home
