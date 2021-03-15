import React from 'react'
import ReactDOM from 'react-dom'

function Dialog({ children }) {
    return (
        <>
            { children}
        </>
    )
}

const Title = () => {
    return (
        <div>Title</div>
    );
}

const Body = () => {
    return (
        <div>Body</div>
    );
}

const Footer = () => {
    return (
        <div>Footer</div>
    );
}

function App() {
    return (
        <Dialog>
            <Title />
            <Body />
            <Footer />
        </Dialog>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'))