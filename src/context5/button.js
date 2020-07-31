import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "./themecontext";

function Button(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button
          onClick={context.toggleTheme}
          className={`${context.theme}-theme`}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
