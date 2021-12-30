import { useState } from "react"
import { Timer } from "./Timer"

export const TimerParent = () => {
    const [milig, setMilig] = useState(1000)

    return (
        <>
            <span>Miliseg: {milig}</span>

            <button className="btn btn-outline-success" onClick={() => setMilig(1000)}>
                1000
            </button>

            <button className="btn btn-outline-success" onClick={() => setMilig(2000)}>
                2000
            </button>

            <Timer milig={milig} />
        </>
    )
}
