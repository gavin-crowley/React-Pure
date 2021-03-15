import React from 'react'
import moment from 'moment'

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <>
            {timeString}
        </>
    )
}

export default Time
