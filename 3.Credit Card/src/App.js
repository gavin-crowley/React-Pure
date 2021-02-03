import React from 'react'
import './styles.css'

function CreditCard({ cardInfo }) {
  const { name, expiration, number, bank } = cardInfo;
  return (
    <div class="card">
      <div class="title">
        <h1>{bank}</h1>
      </div>
      <p class="number">{number}</p>
      <p>
        <span>
          <small>
            Valid <br />
            Thru
          </small>
        </span>
        <span>&nbsp;{expiration}</span>
      </p>
      <p>{name}</p>
    </div>
  );
}

function App() {
  return <CreditCard cardInfo={cardDetails} />
}

const cardDetails = {
  name: 'Gavin Crowley',
  expiration: '02/24',
  number: '5434 7220 1937 4857',
  bank: 'Bank of Georgia',
}

export default App
