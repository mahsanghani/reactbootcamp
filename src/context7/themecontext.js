import React, { useState, Component } from "react";
const ThemeContext = React.createContext();

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 *
 */

/**
 * Convert this ThemeContextProvider into a functional component that uses hooks
 * Tip: Use the browser dev tools if you run into a bug that isn't clear from the Scrimba console logs
 */

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark")

    function toggleTheme() {
        setTheme(prevTheme => {
            return prevTheme === "light" ? "dark" : "light"
        })
    }

    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

// class ThemeContextProvider extends Component {
//   state = {
//     theme: "dark",
//   };
//
//   toggleTheme = () => {
//     this.setState((prevState) => {
//       return {
//         theme: prevState.theme === "light" ? "dark" : "light",
//       };
//     });
//   };
//
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

export { ThemeContextProvider, ThemeContext };
