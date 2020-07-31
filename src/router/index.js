import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// render() {
//     return (
//         <RouterContext.Provider
//             children={this.props.children || null}
//             value={{
//                 history: this.props.history,
//                 location: this.state.location,
//                 match: Router.computeRootMatch(this.state.location.pathname),
//                 staticContext: this.props.staticContext
//             }}
//         />
//     );
// }
