import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

/**
 * Challenge:
 *
 * 1. Set up React Router
 * 2. Add Home, About, and Contact pages to this app
 * 3. Add a nav bar to easily navigate to those pages
 */

function App() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>

            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route exact path={"/about"}>
                    <About />
                </Route>
                <Route exact path={"/contact"}>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
