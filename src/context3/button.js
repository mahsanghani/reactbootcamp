import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}

// function Button(props) {
//   return (
//       <ThemeContext.Consumer>
//           {theme => (
//               <button className={`${theme}-theme`}>Switch Theme</button>
//           )}
//       </ThemeContext.Consumer>)
// }

export default Button;
