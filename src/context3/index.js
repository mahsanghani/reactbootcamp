import React from "react"
import ReactDOM from "react-dom"

import App from "../App"
import ThemeContext from "./themeContext"

// ThemeContext.Provider & ThemeContext.Consumer

ReactDOM.render(
    <ThemeContext.Provider value={"light"}>
        <App />
    </ThemeContext.Provider>,
    document.getElementById("root")
)
