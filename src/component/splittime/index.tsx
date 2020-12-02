import React from 'react'
import MajorClock from '../majorClock/index'

const SplitTimes = (props: any) => {
    const {value = []} = props

    return value.map((v: any, k: any) => (
        <> <MajorClock key={k} milliseconds={v}/> </>
    ))
}

export default SplitTimes