import React, {Component} from "react"
import {withToggler} from "./withToggler";
import {useToggler} from "./usetoggler"

// class Favourite extends Component {
//     state = {
//         isFavourited: false
//     }
//
//     toggleFavourite = () => {
//         this.setState(prevState => {
//             return {
//                 isFavourited: !prevState.isFavourited
//             }
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h1>
//                     <span
//                         onClick={this.props.toggle}
//                     >
//                         {this.props.on ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         )
//     }
// }

// function Favourite(props) {
//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h1>
//                     <span
//                         onClick={props.toggle}
//                     >
//                         {props.on ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         )
//     }

// function Favourite(props) {
//     return (
//         <Toggler render={
//             ({on, toggle}) => (
//                 <div>
//                     <h3>Click heart to favorite</h3>
//                     <h1>
//                         <span
//                             onClick={toggle}
//                         >
//                             {on ? "❤️" : "♡"}
//                         </span>
//                     </h1>
//                 </div>
//             )
//         }/>
//     )
// }

function Favorite(props) {
    const [isToggledOn, toggle] = useToggler()

    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span
                    onClick={toggle}
                >
                    {isToggledOn ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    )
}

const superchargedfavouritecomponent = withToggler(Favourite, {defaultOnValue: false})
export default superchargedfavouritecomponent
