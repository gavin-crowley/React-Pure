import React from 'react'
import moment from 'moment'

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <td class="age">
            <span className="time">
                {timeString}
            </span>
        </td>
    )
}

export default Time
