import React from 'react';
import TaskItem from './taskitem/index'

interface taskItem {
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
                    checked: false,
                    taskInfo: 'test it'
                },
                {
                    checked: true,
                    taskInfo: 'zzy'
                },
                {
                    checked: false,
                    taskInfo: '早上锻炼'
                },
            ]
         };
    }

    hoverTask = (ev: any) => {
        console.log(ev.clientX, ev.clientY)
    }
    render() { 
        const { taskArr } = this.state
        return (
            <>
                <div onDragOver={(ev) => this.hoverTask(ev)}>
                {
                    taskArr.length > 0 
                    ?  (
                        taskArr.map(task => 
                            (<TaskItem {...task}></TaskItem>))
                    )
                    : null
                }
                </div>
            </>
        )
    }
}
 
export default TaskList;