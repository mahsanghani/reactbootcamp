import React, { useState } from "react"

function App(){
    const [count,setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }
//
// export default App
//
//
// function App() {
//     const [ value ] = useState("Yes")
//     console.log(value)
//
//     const person = {
//         name: "Joe",
//         age: 42
//     }
//
//     const { name, age } = person
//
//     return (
//         <div>
//             <h1>Is state important to know? {value}</h1>
//         </div>
//     )
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App
