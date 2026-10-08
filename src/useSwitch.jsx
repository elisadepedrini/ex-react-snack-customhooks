import { useState } from "react"

export default function useSwitch() {

    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        setIsOn((prev) => !prev)
    }



    return [isOn, toggle]
}