import React from 'react';

export interface Props {
    
}
 
export interface State {
    num: number,
    isAble: boolean
}
 
class Count  extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            num: 60,
            isAble: false
        };
    }

    sendMes = () => {

    }

    render() { 
        const { num, isAble } = this.state;
        return ( 
            <div onClick={this.sendMes} className="send_mes">
                {isAble ? num : '发送验证码' }
            </div>
         )
    }
}
 
export default Count;