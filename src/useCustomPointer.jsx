import { useEffect, useState } from "react"

export default function useCustomPointer(content) {

    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {

        const handleMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', handleMove)

        return () => window.removeEventListener('mousemove', handleMove)
    })

    const customPointer = () => {

    }

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                pointerEvents: "none",
            }}
        >
            {content}
        </div>
    )
}