import React, {PureComponent} from "react"
import GrandChild from "./grandchild"

export default React.memo(function Child(){
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
        <div>
            <p>I'm a Child Component</p>
            <GrandChild />
            <GrandChild />
        </div>
    )
})

// class Child extends PureComponent {
//     render() {
//         console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
//         return (
//             <div>
//                 <p>I'm a Child Component</p>
//                 <GrandChild />
//                 <GrandChild />
//             </div>
//         )
//     }
// }
