import React from 'react'
import ReactDOM from 'react-dom'

function AddressLabel(props) {
    const { name, address1, address2 } = props.personDetails
    return (
        <>
            <div>{name}</div>
            <div>{address1}</div>
            <div>{address2}</div>
        </>
    )
}


const person = {
    name: 'Full Name',
    address1: '123 Fake St.',
    address2: 'Boston, MA 02118'
}


ReactDOM.render(<AddressLabel personDetails={person} />, document.querySelector('#root'))
