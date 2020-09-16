import React, { Component } from 'react'
import BlogItem from '../../component/blogItem'  
import HeaderItem from '../../component/header/headerItem'
import {
    HomeOutlined,
    TagOutlined,
    FileTextOutlined 
  } from '@ant-design/icons';
import './index.less'

class Home extends Component<any, any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        
        return (

            <div>
                <HeaderItem tagName={"主页"} >
                    <HomeOutlined/>
                </HeaderItem>

                <HeaderItem tagName={"分类"}>
                    <TagOutlined />
                </HeaderItem>

                <HeaderItem tagName={"我的日志"}>
                    <FileTextOutlined />
                </HeaderItem>
            </div>

        )
    }
}


export default Home
