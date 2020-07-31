import React from "react"
import Header from "./header"
import Footer from "./footer"
import Home from "./home"
import Profile from "./profile"
import Info from "./info";
import ProfileSettings from "./settings";
import {Switch, Route} from "react-router-dom"

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/profile/info">
                    <Info/>
                </Route>
                <Route exact path="/profile/settings">
                    <ProfileSettings/>
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default App
