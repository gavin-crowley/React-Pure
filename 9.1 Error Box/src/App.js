import React from 'react'
import './styles.css'

function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <i className="warning fas fa-exclamation-triangle"></i>
      <p>
        {children}
      </p>
    </div>
  );
}

function App() {
  return (
    <ErrorBox>
      The world is ending
    </ErrorBox>);
}

export default App
