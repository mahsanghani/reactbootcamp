import React from "react";

import Header from "./header";
import UserContext from "./usercontext";

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

function App() {
    return (
        <div>
            <Header />
            <main>
                <UserContext.Consumer>
                    {(username) => (
                        <p className="main">No new notifications, {username}! 🎉</p>
                    )}
                </UserContext.Consumer>
            </main>
        </div>
    );
}

export default App
