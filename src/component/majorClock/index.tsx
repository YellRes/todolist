import React from 'react'

import padStart from 'lodash/padStart'

const ms2Time = (milliseconds: any) => {
    let time = milliseconds
    const ms: any = milliseconds % 1000
    time = (milliseconds - ms) / 1000
    const seconds: any = time % 60
    time = (time - seconds) / 60
    const minutes: any = time % 60
    const hours: any = (time - minutes) / 60

    const result = padStart(hours, 2, '0') + ':' + padStart(minutes, 2, '0')+ padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
    return result
}



const MajorClock = (props: any) => {
    const {milleisecond = 0} = props
    return <h1>{ms2Time(milleisecond)}</h1>
}

export default MajorClock