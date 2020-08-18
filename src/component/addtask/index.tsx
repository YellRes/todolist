import React from 'react';
import { Input, Button } from 'antd';
import {
    PlusOutlined,
    // BorderOutlined
  } from '@ant-design/icons';
import './index.less'

export interface Props {
    onAddItem: Function
}
 
export interface State {
    inputValue: ''
}
 
class AddTask extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    inputChange = (e: any) => {

        this.setState({
            inputValue: e.target.value
        })
    }

    addTask = (e: any) => {
        const {inputValue} = this.state;
        this.props.onAddItem(inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() { 
        const { inputValue } = this.state
        return (    
            <div className="add_container">
                <Input
                    prefix={<PlusOutlined />}
                    placeholder="add todo" 
                    value={inputValue}
                    onChange={(e) => this.inputChange(e)}
                    onPressEnter={this.addTask}/>
                <Button
                    type="primary" 
                    className="add_container_btn"
                    onClick={(e) => this.addTask(e)}
                    >Add
                </Button>  
            </div>
        );
    }
}
 
export default AddTask;