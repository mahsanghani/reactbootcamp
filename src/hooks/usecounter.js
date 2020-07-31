import {useState} from "react"

function useCounter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    return {count: count, increment: increment}
}

export default useCounter

// initialize state
// create any functions we need for modifying the state
// return whatever we want another component to have access to (count, increment)
