import moment from "moment"
import { useState, useEffect } from "react"
import { DayCard } from "./DayCard";
import "../styles/MonthCard.css"

export function MonthCard(props) {
    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    );
  
    const [calendar, setCalendar] = useState([]);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
    
    const calendarBackup = [];

    useEffect(() => {
        const startDay = value.clone().startOf("month").startOf("week")
        const endDay = value.clone().endOf("month").endOf("week")
        const day = startDay.clone().subtract(1, "day")
        
        while(day.isBefore(endDay, "day")) {
            calendarBackup.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }

        setCalendar(calendarBackup)

    }, [value])
    
    return(
        <div id="month-card">
            <div className="header">{value.format("MMMM")}</div>
            <div className="week-days">{weekDays.map((value) => (
                <div className="week-day">{value}</div>
            ))}</div>
            {
                calendar.map((week) => (
                    <div className="week" key={week}>
                        {week.map((day) => (
                            <DayCard 
                                key={day._d.getTime() + props.month}
                                day={day}
                                month={props.month}
                                year={props.currentYear}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )    
  
  }
