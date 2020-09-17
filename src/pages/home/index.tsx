import React, { Component } from 'react'
import Header from '../header'
import './index.less'

class Home extends Component<any, any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        
        return (
            <div>
                <div className="left__top">
                    <Header></Header>
                </div>
            </div>
        )
    }
}


export default Home
