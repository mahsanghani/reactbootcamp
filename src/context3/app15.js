import React from "react"

import Header from "./header"
import Button from "./button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} />
                )}
            </ThemeContext.Consumer>

            <Button theme={"monkey"}/>
        </div>
    )
}

export default App
