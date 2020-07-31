import React from "react"

export function favnum(component) {
    const Component = component
    return function(props) {
        return (

            <Component favnum={"99"} {...props} />
        )
    }
}
