import moment from "moment"
import { useState, useEffect } from "react"
import { DayCard } from "./DayCard";

export function MonthCard(props) {
    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    );
  
    const [calendar, setCalendar] = useState([]);
    const weekDays = ["D", "s", "T", "Q", "Q", "S", "S"]
    
    useEffect(() => {
        const startDay = value.clone().startOf("month").startOf("week")
        const endDay = value.clone().endOf("month").endOf("week")
        const day = startDay.clone().subtract(1, "day")
        
        while(day.isBefore(endDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }
    }, [value])
    
    return(
        <div id="month-card">
            <div className="header">{value.format("MMMM")}</div>
            <div className="week-days"></div>
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
