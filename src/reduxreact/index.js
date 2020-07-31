import React from "react"
import ReactDOM from "react-dom"
import store from "./reduxreactindex"
import {Provider} from "react-redux"

import App from "../App"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
