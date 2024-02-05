import { useEffect, useState } from "react"
import { Day } from "../styles/DayCardStyled.js"

export function DayCard(props) {
    const [state, setState] = useState("")
    
    const day = props.day._d

    useEffect(() => {
        const currentMonth = new Date(props.month + ",01," + props.year)

        if(day.getMonth() !== currentMonth.getMonth()) {
            setState("noPertenceMonth")
            return;
        }

        if(props.dateSelected.find((value) => value.getTime() === day.getTime())) {
            setState("selected")
        } else {
            setState("")
        }
    }, [day, props.month, props.year, props.dateSelected])

    const handleClickDate = () => {
        if(state !== "nonPertenceMonth") {
            if(props.dateSelected.find((value) => value.getTime() === day.getTime())) {
                setState("")
                props.setDateSelected(
                    props.dateSelected.filter((value) => value.getTime() !== day.getTime())
                )
            } else {
                setState("selected")
                props.setDateSelected([...props.dateSelected, day])
            }
        } 
    }

    return <Day className="day-card" state={state} onClick={handleClickDate}>{props.day.format("DD").toString()}</Day>
}