import { useState } from "react"
import { Day } from "../styles/DayCardStyled.js"

export function DayCard(props) {
    const [state, setState] = useState("")

    

    const handleClickDate = () => {
        if(state === "") {
            setState("selected")
        } else if("selected") {
            setState("")
        }
    }

    return <Day className="day-card" state={state} onClick={handleClickDate}>{props.day.format("DD").toString()}</Day>
}