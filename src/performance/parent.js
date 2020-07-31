import React, {PureComponent} from "react"
import Child from "./child"

export default React.memo(function Parent() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child />
            <Child />
        </div>
    )
})

// class Parent extends PureComponent {
//     render() {
//         console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
//         return (
//             <div>
//                 <p>I'm a Parent Component</p>
//                 <Child />
//                 <Child />
//             </div>
//         )
//     }
// }
