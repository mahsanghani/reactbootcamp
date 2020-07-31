import React from "react";
import {HOC} from "./HOC/hoc"
import {propHOC} from "./HOC/prophoc"
import {favnum} from "./HOC/favnum";

function App(props) {
    console.log(props)
    return(
        <div>{props.favnum}</div>
    )
}

const HOC2 = favnum(App)
export default HOC2
