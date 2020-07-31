import React from "react"

export function propHOC(component) {
    const Component = component
    return function(props) {
        return (
            <Component anotherProp={"xyz"} {...props} />
        )
    }
}
