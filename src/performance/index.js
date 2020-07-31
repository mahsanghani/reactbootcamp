import React from "react"
import ReactDOM from "react-dom"
import App from "../App"

ReactDOM.render(<App />, document.getElementById("root"))

// ===
// Primitive types (strings, numbers, booleans)
// console.log("Hi" === "Hi")

// Complex types (array, object)
// console.log({name: "Joe"} === {name: "Joe"})

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr1 === arr2)

const state = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

const state2 = {
    favNumber: 42,
    name: "Bob",
    address: {
        street: "123 Main Street",
        city: "Nowhere, PA",
        zip: 12345
    }
}

// console.log(state.favNumber === state2.favNumber)
// console.log(state.name === state2.name)
// console.log(state.address === state2.address)

const person = {
    name: "Sarah"
}

const anotherPerson = {
    name: "Sarah"
}

console.log(anotherPerson === person)
