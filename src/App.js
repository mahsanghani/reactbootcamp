import React from "react"
import {useSelector,useDispatch} from "react-redux";
import {increment, decrement} from "./reduxreact/reduxreactindex"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
export default App
// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings

// import {connect} from "react-redux"
// function App(props) {
//     return (
//         <div>
//             <h1>{props.count}</h1>
//             <button onClick={props.decrement}>-</button>
//             <button onClick={props.increment}>+</button>
//         </div>
//     )
// }
// export default connect(state => ({count: state}), {increment, decrement})(App)

// Write the mapStateToProps function from scratch
// Takes the global state from Redux as a parameter
// returns an object where the keys are the name of the prop your component wants,
// and the values are the actual parts of the global state your component wants

// const mapStateToProps = (globalState) => ({count: globalState})

// function mapStateToProps(state) {
//     return {
//         count: state
//     }
// }

// const mapDispatchToProps = {
//     increment: increment,
//     decrement: decrement
// }
//
// export default connect(mapStateToProps, {})(App)

// https://react-redux.js.org/api/connect#connect
