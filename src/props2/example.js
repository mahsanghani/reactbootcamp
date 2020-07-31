import React from "react"

function Example(props) {
    // console.log(props.name())
    return(
        <div>
            {props.render(true, 42)}
        </div>
    )
    // return <h1>Hi {props.name()}</h1>
}

export default Example
