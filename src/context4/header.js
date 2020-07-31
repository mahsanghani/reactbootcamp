import React from "react";
import UserContext from "./usercontext";

function Header() {
  return (
    <header>
      <UserContext.Consumer>
        {(username) => <p>Welcome, {username}!</p>}
      </UserContext.Consumer>
    </header>
  );
}

export default Header
