import { Modal} from 'antd';

import React from 'react';
import TaskItem from './taskitem/index'
import AddTask from '../addtask/index'
import {
    ExclamationCircleOutlined
  } from '@ant-design/icons';

const { confirm } = Modal;
let currentId: number
let dragOverId: number

interface taskItem {
    id: number;
    checked: boolean;
    taskInfo: string;    
}

export interface Props {

}
 
export interface State {
    taskArr: Array<any>
}
 
class TaskList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  
            taskArr: [
                {
                    id: 1,
                    checked: false,
                    taskInfo: 'test it',
                },
                {
                    id: 2,
                    checked: true,
                    taskInfo: 'zzy',

                },
                {
                    id: 3,
                    checked: false,
                    taskInfo: 'ztr',
                },
            ]
         };
    }

    onDragItem = (e: any) => {
        currentId = e
    }

    onDragOver = (e: any) => {
        console.log(e, '拿到了拖拽时候的id')
        let {taskArr} = this.state
        let delIndex:number = 0 
        let addIndex:number = 0
        taskArr.forEach((item, index) => {
            if (item.id === currentId) {
                delIndex = index
            }

            if (item.id === e) {
                addIndex = index
            }
        })
        let result = taskArr[Number(delIndex)]

        taskArr.splice(delIndex, 1)
        taskArr.splice(addIndex, 0, result)


        this.setState({taskArr})
    }

    onAddItem = (e: any) => {
        const {taskArr} = this.state
        const taskItem = {
            id: taskArr.length + 1,
            taskInfo: e,
            checked: false
        }

        taskArr.push(taskItem)

        this.setState({taskArr})
    }

    onDelItem = (e: any) => {
        const that = this

        confirm({
            title: '确定删除?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk() {
                const {taskArr} = that.state
                const result = taskArr.filter(item => item.id !== e)
                that.setState({taskArr: result})
            },
            onCancel() {
            },
          });
        
    }


    // 点击按钮
    onCheckedChange = (e: any) => {
        const {taskArr} = this.state
        taskArr.forEach(item => {
            if (item.id === e) {
                item.checked = !item.checked
            }
        })

        this.setState({taskArr})
    }


    render() { 
        const { taskArr } = this.state
        return (
            <>
                  <AddTask onAddItem={this.onAddItem}/>

                <div>
                {
                    taskArr.length > 0 
                    ?  (
                        taskArr.map((task, index) => 
                            (<TaskItem 
                                id={task.id}
                                checked={task.checked}
                                taskInfo={task.taskInfo}
                                onDragItem={this.onDragItem}
                                onDragOver={this.onDragOver}
                                onDelItem={this.onDelItem}
                                onCheckedChange={this.onCheckedChange}
                                >
                            </TaskItem>)
                            )
                    )
                    : null
                }
                </div>
            </>
        )
    }
}
 
export default TaskList;