import React from 'react';
import { Checkbox } from 'antd';
import {
    MenuOutlined
  } from '@ant-design/icons';
import './index.less'

export interface Props {
    checked: boolean;
    taskInfo: string;
}
 
export interface State {
    
}
 
class TaskItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
    }

    dragItem = (e: any) => {
        console.log(e.target)
    }

    render() { 
        const {checked, taskInfo} = this.props
        return ( 
            <div 
                className="taskItem_container" 
                draggable="true"
                onDrag={(e) => this.dragItem(e)} >
                <MenuOutlined />
                <Checkbox 
                    className="taskItem_container_checkBox" 
                    checked={checked}>
                </Checkbox>
                <div 
                    className="taskItem_container_text">
                    {taskInfo}
                </div>
            </div>
         );
    }
}
 
export default TaskItem;