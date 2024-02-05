import moment from "moment"
import { useState, useEffect } from "react"
import { DayCard } from "./DayCard";
import "../styles/MonthCard.css"
import calendarBuild from "./CalendarBuild";

export function MonthCard(props) {
    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    );
  
    const [calendar, setCalendar] = useState([]);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

    useEffect(() => {
        setValue(value.year(props.currentYear))        
        setCalendar(calendarBuild(value))
    }, [value, props.currentYear])
    
    return(
        <div id="month-card">
            <div className="header">{value.format("MMMM")}</div>
            <div className="week-days">
                {weekDays.map((value, index) => (
                    <div className="week-day" key={index}>{value}</div>
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
                                dateSelected={props.dateSelected}
                                setDateSelected={props.setDateSelected}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )    
  
  }
