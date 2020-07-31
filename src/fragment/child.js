import React from "react"
import Grandchild from "./grandchild"

function Child() {
    return (
        <div>
            <h1>I'm the Child component</h1>
            <Grandchild />
        </div>
    )
}

export default Child
