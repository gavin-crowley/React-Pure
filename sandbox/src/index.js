import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'


function FirstChildOnly({ children }) {
    // console.log(React.Children.toArray(children)[0]);
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

// ==========================================================

function ForEachExample({ children }) {
    const items = []
    return (
        <>
            {React.Children.forEach(children, (child) => {
                items.push(child)
            })}
            {/* {console.log(items)} */}
            {items}
        </>
    );
}

function MapExample({ children }) {
    return (
        <>
            {React.Children.map(children, (child) => {
                // console.log(child);
                return child
            })}
        </>
    );
}

function CountExample({ children }) {
    return (
        <>
            {React.Children.count(children)}
        </>
    );
}

function OnlyExample({ children }) {
    return (
        <>
            {React.Children.only(children)}
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

            <ForEachExample>
                <h1>Red</h1>
                <h1>Green</h1>
                <h1>Blue</h1>
                <h1>Yellow</h1>
            </ForEachExample>

            <MapExample>
                <h1>Huey</h1>
                <h1>Duey</h1>
                <h1>Louis</h1>
            </MapExample>

            <CountExample>
                <h1>one</h1>
                <h1>two</h1>
                <h1>three</h1>
            </CountExample>

            <OnlyExample>
                <h1>Only Child</h1>
                {/* <h1>Not Only Child</h1> */}
            </OnlyExample>


        </div>);
}

ReactDOM.render(<App />, document.querySelector('#root'))
