import React from 'react'
import ReactDOM from 'react-dom'

function Envelope(props) {
    const { toPerson, fromPerson } = props.persons
    return (
        <>
            <AddressLabel personDetails={toPerson} />
            <AddressLabel personDetails={fromPerson} />
        </>
    )
}


function AddressLabel(props) {
    console.log(props);
    const { name, address1, address2 } = props.personDetails
    return (
        <>
            <div>{name}</div>
            <div>{address1}</div>
            <div>{address2}</div>
        </>
    )
}


const receiverSender = {
    toPerson: {
        name: 'Mr Receiver',
        address1: '123 Fake St.',
        address2: 'SF, MA 02118'
    },
    fromPerson: {
        name: 'Mr Sender',
        address1: '123 Fake St.',
        address2: 'Boston, MA 02118'
    }
}



ReactDOM.render(<Envelope persons={receiverSender} />, document.querySelector('#root'))
