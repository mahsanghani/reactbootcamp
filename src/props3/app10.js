import React from "react"
import Menu from "./menu"
import Toggler from "./Toggler"
import Favourite from "./favourite"

function App() {
    return (
        <div>
            <Toggler defaultOnValue={true}>
                {({on, toggle}) => {
                    return (
                        <Menu on={on} toggle={toggle}/>
                    )}}
            </Toggler>
            <hr />
            <Favourite />
        </div>
    )
}

export default App
