import React, {Component} from 'react';
import ControlButton from '../controlbutton'
import MajorClock from '../majorClock'
import SplitTimes from '../splittime'

// interface State {
//     isStarted: Boolean,
//     startTime: any,
//     currentTime: any,
//     splits: [],
// }

class StopTime extends Component<any, any> {
    intervalHandle: any = null

    constructor(props: any) {
        super(props)
        this.state = {
            isStarted: false,
            startTime: 0,
            currentTime: 0,
            splits: []
        }
    }

    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        })
    }

    onStart = () => {
        this.setState({
            isStarted: true,
            startTime: new Date(),
            currentTime: new Date()
        })

        this.intervalHandle = setInterval(() => {
            this.setState({currentTime: new Date()})
        }, 1000 / 60)
    }

    onPause = () => {
        clearInterval(this.intervalHandle)
        this.setState({
            isStarted: false
        })
    }

    onReset = () => {
        this.setState({
            startTime: null,
            currentTime: null,
            splits: []
        })
    }

    render() {
        return (
            <>
         

            <MajorClock 
                milleisecond={this.state.currentTime.getTime()}>
            </MajorClock>

            <ControlButton
                activated={this.state.isStarted}
                onStart={this.onStart}
                onPause={this.onPause}
                onReset={this.onReset}
                onSplit={this.onSplit}>
            </ControlButton>

            <SplitTimes value={this.state.splits}> </SplitTimes>
            </>
        )
    }
}

export default StopTime

