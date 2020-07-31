import React from "react";

export function HOC(component) {
    const Component = component
    return function(props) {
        return(
            <Component {...props} />
        )
    }
}
