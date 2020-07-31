import React from "react"
import Card from "./card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor="purple" />
            <Card cardColor="green" />
        </div>
    )
}

export default App
