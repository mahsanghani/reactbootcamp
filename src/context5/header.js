import React, { Component } from "react";
import { ThemeContextConsumer } from "./themecontext";

function Header(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <header className={`${context.theme}-theme`}>
          <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
