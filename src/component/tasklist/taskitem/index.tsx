import React from 'react';
import { Checkbox } from 'antd';
import {
    MenuOutlined
  } from '@ant-design/icons';
import './index.less'

export interface Props {
    id: number;
    checked: boolean;
    taskInfo: string;
    onDragItem: Function;
    onDragOver: Function;
}
 
export interface State {
    dropItemId: number;
    dragItemId: number;
}
 
class TaskItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            dragItemId: 0,
            dropItemId: 0,
        };
    }

    componentDidMount() {
    }

    dragItem = (e: any, id: number) => {
        // let { dragItemId } = this.state
        // dragItemId = id
        this.props.onDragItem(id)
        // console.log(e.target, id, 'dragStart')
    }

    dragOver = (e: any, id: number) => {
        let {dropItemId} = this.state
        dropItemId = id
        this.props.onDragOver(id)
        // console.log(e.target, id, 'dragOver')
    }

    dropItem = (e: any, id: number) => {
        // console.log(e.target, id, 'dropItem')
    }

    render() { 
        const {checked, taskInfo, id} = this.props
        return ( 
            <div 
                data-id={id}
                className="taskItem_container"
                draggable="true"
                onDragStart={(e) => this.dragItem(e, id)}
                onDragOver={(e) => this.dragOver(e, id)}
                onDrop={(e) => this.dropItem(e, id)}
                >
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