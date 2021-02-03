import React from 'react';
import './styles.css';
import stamp from './stamp.png'


function AddressLabel({ person }) {
  const { name, street, city } = person;
  return (
    <div className="details">
      <div>{name}</div>
      <div>{street}</div>
      <div>{city}</div>
    </div>
  );
}

function Stamp() {
  return (
    <span className="stamp">
      <img className="stamp-img" src={stamp} alt="stamp" />
    </span>
  );
}

function Envelope({ details }) {
  const { toPerson, fromPerson } = details;
  return (
    <>
      <div className="envelope">
        <span className="sender">
          <AddressLabel person={fromPerson} />
        </span>
        <span className="receiver">
          <AddressLabel person={toPerson} />
        </span>
        <Stamp />
      </div>
    </>
  );
}

function App() {
  return (
    <Envelope details={envelopeDetails} />
  );
}

const envelopeDetails = {
  toPerson: {
    name: 'Mrs. Reciever',
    street: '123 Fake St.',
    city: 'San Francisco, CA 94101'
  },
  fromPerson: {
    name: 'Full Name',
    street: '123 Fake St.',
    city: 'Boston, MA 02118'
  }
}

export default App;
