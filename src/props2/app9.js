import React from "react";
import Example from "./example";

function App() {
    return (
        <div>
            <Example
                render={function (bool, number) {
                    return (
                        <div>
                            <h1>{number}</h1>
                            <h1>{bool ? "true" : "false"}</h1>
                        </div>
                    );
                }}
            />
        </div>
    );
}

// function App() {
//   return (
//     <div>
//       <Example
//         render={function (number) {
//           return <h1>{number >= 0 ? "Positive" : "Negative"}</h1>;
//         }}
//       />
//     </div>
//   );
// }
//
// function App() {
//   return (
//     <div>
//       <Example
//         render={function (isDaytime) {
//           return <h1>{isDaytime ? "Good day" : "Good evening"}, Bob!</h1>;
//         }}
//       />
//     </div>
//   );
// }

export default App;
