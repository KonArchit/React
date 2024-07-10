import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
    return (
        <div>
            <h1>Custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit the website'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>visit Google</a>
)
const anotheruser = " Studying from HC sir"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit the website',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    // Myapp()
    // <App />
)
