import React from 'react'
import './styles.css'


function FirstChildOnly({ children }) {
  console.log(React.Children.toArray(children)[0]);
  return (
    <>
      {React.Children.toArray(children)[0]}
    </>
  );
}

function LastChildOnly({ children }) {
  const length = React.Children.toArray(children).length;
  return (
    <>
      {React.Children.toArray(children)[length - 1]}
    </>
  );
}

function Head({ children, number }) {
  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (i > number - 1) return
        return child
      })}
    </>
  );
}

function Tail({ children, number }) {
  const length = React.Children.toArray(children).length;

  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (i < length - number) return
        return child
      })}
    </>
  );
}

function App() {
  return (
    <div>
      <FirstChildOnly>
        <h1>First</h1>
        <h1>Second</h1>
      </FirstChildOnly>

      <LastChildOnly>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Second</h1>
        <h1>Second</h1>
        <h1>Last</h1>
      </LastChildOnly>

      <Head number={3}>
        <h1>one</h1>
        <h1>two</h1>
        <h1>three</h1>
        <h1>four</h1>
        <h1>five</h1>
        <h1>six</h1>
        <h1>seven</h1>
        <h1>eight</h1>
        <h1>nine</h1>
        <h1>ten</h1>
      </Head>

      <Tail number={4}>
        <h1>a</h1>
        <h1>b</h1>
        <h1>c</h1>
        <h1>d</h1>
        <h1>e</h1>
      </Tail>


    </div>);
}

export default App
