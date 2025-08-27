import ReactDOM from "react-dom/client"
import { useState, useActionState, useOptimistic } from "react"
import { useFormStatus } from "react-dom"
import { updateNameInDB } from "./api"

function App() {
    const [state, actionFunction, isPending] = useActionState(
        updateName,
        {
            error: null,
            name: JSON.parse(localStorage.getItem("name")) || "Anonymous user"
        }
    )

    const [optimisticName, setOptimisticName] = useOptimistic(state.name)

    async function updateName(prevState, formData) {
        setOptimisticName(formData.get("name"))
        try {
            const newName = await updateNameInDB(formData.get("name"))
            return { name: newName, error: null }
        } catch (error) {
            return { error, name: prevState.name }
        }
    }

    return (
        <>
            <p className="username">
                Current user: <span>{state.name}</span>
            </p>

            {isPending && <p>Loading...</p>}

            <form action={actionFunction}>
                <input
                    type="text"
                    name="name"
                    required
                />
                <button type="submit">Update</button>
                {!isPending && state.error && <p className="error">{state.error.message}</p>}
            </form>
        </>
    )
}

function MyButton({children, ...rest}) {
    const {pending} = useFormStatus()
    return (
        <button {...rest}>{ pending ? "Submitting..." : children }</button>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)