import React from "react"
import ReactDOM from "react-dom"

import App from "../App"
import {ThemeContextProvider} from "./themecontext"

ReactDOM.render(
    <ThemeContextProvider value={"light"}>
        <App />
    </ThemeContextProvider>,
    document.getElementById("root")
)
