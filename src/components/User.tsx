import { useState } from "react"

interface User {
    uid: string,
    name: string
}

export const User = () => {
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'sevann radhak'
        })
    }
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={login}>
                Login
            </button>

            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}
