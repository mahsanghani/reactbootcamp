import React from "react"
import {Link, Switch, Route, useRouteMatch} from "react-router-dom"

import Settings from "./settings"
import Info from "./info"

function Profile() {
    const {path, url} = useRouteMatch()

    // https://reacttraining.com/blog/react-router-v5-1/#useroutematch

    // {
    //     path: "/user",
    //     url: "/user",
    //     isExact: true,
    //     params: {}
    // }

    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile Info</Link></li>
                <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/info`}>
                    <Info/>
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile
