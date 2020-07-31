import React from "react";
import Header from "./header";
import Home from "./home";
import ServicesList from "./serviceslist";
import ServiceDetail from "./servicedetail";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route exact path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App
