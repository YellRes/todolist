import React from 'react';
import { Checkbox } from 'antd';
import {
    MenuOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
import './index.less'

export interface Props {
    id: number;
    taskIsDone: boolean;
    taskName: string;
    onDragItem: Function;
    onDragOver: Function;
    onDelItem: Function;
    onCheckedChange: Function;
    onDragEnd: Function;
    onDropEnd: Function;
}
 
export interface State {
    dropItemId: string;
    dragItemId: number;
}
 
class TaskItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            dragItemId: 0,
            dropItemId: '',
        };
    }

    componentDidMount() {
    }

    dragItem = (e: any, id: number) => {
        // let { dragItemId } = this.state
        // dragItemId = id
        this.props.onDragItem(id)
    }

    dragOver = (e: any, id: number) => {
        // let {dropItemId} = this.state
        // dropItemId = id
        this.props.onDragOver(id)
    }

    dropItem = (e: any, id: number) => {
    }

    delItem = (e: any, id: number) => {
        this.props.onDelItem(id)
    }

    checkedChange = (e: any, id: number) => {
        this.props.onCheckedChange(id)
    }

    dragEnd = (e: any, id: number) => {
        this.props.onDragEnd(id)
    }

    drop = (e: any, id: number) => {
        this.props.onDropEnd(id)
    }

    render() { 
        const {taskIsDone, taskName, id} = this.props
        return ( 
            <div 
                data-id={id}
                className="taskItem_container"
                draggable="true"
                onDragStart={(e) => this.dragItem(e, id)}
                onDragOver={(e) => this.dragOver(e, id)}
                onDragEnd={(e) => this.dragEnd(e, id)}
                onDrop={(e) => this.drop(e, id)}
                >
                <MenuOutlined />
                <Checkbox 
                    className={`taskItem_container_checkBox ${taskIsDone ? 'text_dec' : null}`}
                    
                    onChange={(e) => this.checkedChange(e, id)}
                    checked={taskIsDone}>
                        {taskName}
                </Checkbox>

                <div className="del_icon" onClick={(e) => this.delItem(e, id)}>
                    <DeleteOutlined />
                </div>
            </div>
         );
    }
}
 
export default TaskItem;