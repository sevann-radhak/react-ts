import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = (num: number = 1): void => {
        setCounter(counter + num)
    }

    return (
        <div className="mt-5">
            <h3>Counter: {counter} </h3>

            <button className="btn btn-outline-primary mt-2" onClick={() => increment()}>
                +1
            </button>

            <button className="btn btn-outline-primary mt-2" onClick={() => increment(2)}>
                +2
            </button>

            <button className="btn btn-outline-primary mt-2" onClick={() => increment(5)}>
                +5
            </button>

            <button className="btn btn-outline-danger mt-2" onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
