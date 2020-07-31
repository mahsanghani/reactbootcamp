import React, {Component} from "react"
import Parent from "./parent"

function GrandParent(props) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

function areEqual(prevProps, nextProps){
    /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}

// class GrandParent extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         if (nextProps.count === this.props.count) {
//             return false
//         }
//         return true
//     }
//     render() {
//         console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
//         return (
//             <div>
//                 <p>I'm a GrandParent Component</p>
//                 <Parent />
//                 <Parent />
//             </div>
//         )
//     }
// }

export default React.memo(GrandParent, areEqual)
