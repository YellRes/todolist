import React from 'react';
import TaskItem from './taskitem/index'

interface taskItem {
    id: number;
    checked: boolean;
    taskInfo: string;    
}

export interface Props {
    
}
 
export interface State {
    taskArr: Array<taskItem>
}
 
class TaskList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {  
            taskArr: [
                {
                    id: 1,
                    checked: false,
                    taskInfo: 'test it'
                },
                {
                    id: 2,
                    checked: true,
                    taskInfo: 'zzy'
                },
                {
                    id: 3,
                    checked: false,
                    taskInfo: '早上锻炼'
                },
            ]
         };
    }

    onDragItem = (e: any) => {
        console.log(e, '拿到了起始id')
    }

    onDragOver = (e: any) => {
        console.log(e, '拿到了拖拽时候的id')
    }


    render() { 
        const { taskArr } = this.state
        return (
            <>
                <div>
                {
                    taskArr.length > 0 
                    ?  (
                        taskArr.map(task => 
                            (<TaskItem 
                                {...task}
                                onDragItem={this.onDragItem}
                                onDragOver={this.onDragOver}
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