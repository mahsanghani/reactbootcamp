import React, {Component} from "react"
import {withToggler} from "./withToggler";
import {useToggler} from "./usetoggler"

// class Menu extends Component {
//     state = {
//         show: true
//     }
//
//     toggleShow = () => {
//         this.setState(prevState => {
//             return {
//                 show: !prevState.show
//             }
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button>
//                 <nav style={{display: this.state.show ? "block" : "none"}}>
//                     <h6>Signed in as Coder123</h6>
//                     <a>Your Profile</a>
//                     <a>Your Repositories</a>
//                     <a>Your Stars</a>
//                     <a>Your Gists</a>
//                 </nav>
//             </div>
//         )
//     }
// }

// function Menu(props){
//         return (
//             <div>
//                 <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
//                 <nav style={{display: props.on ? "block" : "none"}}>
//                     <h6>Signed in as Coder123</h6>
//                     <a>Your Profile</a>
//                     <a>Your Repositories</a>
//                     <a>Your Stars</a>
//                     <a>Your Gists</a>
//                 </nav>
//             </div>
//         )
//     }

function Menu(props) {
    const [show, toggle] = useToggler(true)

    return (
        <div>
            <button onClick={toggle}>{show ? "Hide" : "Show"} Menu </button>
            <nav style={{display: show ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    )
}

export default withToggler(Menu, {defaultOnValue: true})
