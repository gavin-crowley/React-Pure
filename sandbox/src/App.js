import React from 'react'
import './styles.css'

function Email({ email }) {
  const { sender, subject, date, message } = email;
  return (
    <div class="single-email">
      <input class="checkbox" type="checkbox" />
      <i class="fa fa-thumb-tack"></i>
      <div>
        <div class="title-date">
          <span>{sender}</span>
          <span>{subject}</span>
          <span>{date}</span>
        </div>
        <p class="message">
          {message}
        </p>
      </div>
    </div>
  );
}

function App() {
  return <Email email={emailDetails} />
}

const emailDetails = {
  sender: 'React Newsletter',
  subject: 'React Newsletter - Issue 36',
  date: "Jul 15",
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat! Dolor quas quod nobis quidem autem, aliquid dolore incidunt.'
}

export default App
