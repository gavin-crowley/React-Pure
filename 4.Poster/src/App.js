import React from 'react'
import './styles.css'

function Poster({ posterInfo }) {
  const { title, text, image } = posterInfo;
  return (
    <div>
      <img class="image" src={image} alt="react" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return <Poster posterInfo={posterDetails} />
}

const posterDetails = {
  title: 'React',
  text: 'The best thing since jQuery, probably.',
  image: "http://spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png"
}

export default App
