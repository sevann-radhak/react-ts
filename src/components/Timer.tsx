import { useEffect, useRef, useState } from "react"

type timerArgs = {
    milig: number
}

export const Timer = ({ milig }: timerArgs) => {
    const [seg, setSeg] = useState(0)
    const ref = useRef<NodeJS.Timeout>()

    console.log(milig)

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => setSeg(s => s + 1), milig)
    }, [milig])

    return (
        <>
            <h4>Timer: <small>{seg}</small></h4>
        </>
    )
}
