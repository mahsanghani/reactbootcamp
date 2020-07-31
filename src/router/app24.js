import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";

function App() {
    const [page, setPage] = useState("home");

    function swapPages(newPage) {
        setPage((prevPage) => newPage);
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/about" render={() => <About />} />
            </Switch>
            <Switch>
                <Route exact path="/" render={() => <h1>Home Page!</h1>} />
                <Route exact path="/about" render={() => <h1>About Page!</h1>} />
            </Switch>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route exact path={"/about"}>
                    <About />
                </Route>
            </Switch>

            <nav>
                <button onClick={() => swapPages("home")}>Home</button>
                <button onClick={() => swapPages("about")}>About</button>
            </nav>
            {
                page === "home" ?
                    <h1>Home Page</h1> :
                    <h1>About page</h1>
            }
        </div>
    );
}

export default App;
