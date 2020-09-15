import React, { Component } from 'react'
import BlogItem from '../../component/blogItem'  
import HeaderItem from '../../component/header/headerItem'
import './index.less'

class Home extends Component<any, any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return {
            <HeaderItem
                iconChild=""
                tagName="主页"/>
        }
    }
}


export default Home
