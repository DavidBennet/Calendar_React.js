import { useState } from 'react'
import './App.css'
import moment from 'moment'
import { MonthCard } from './components/MonthCard'

 export function App() {
  const [currentYear, setCurrentYear] = useState("2024");

  const month = [
    "January",
    "Februery",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  moment.updateLocale("pt", {
    month: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
  })

  return (
    <div id="calendar-page">
      <div className="header-page">Ano 2024</div>
      <div className="content">
        {month.map((value) => (
          <MonthCard 
            key={value}
            month={value}
            currentYear={currentYear}
          />
        ))}
      </div>
    </div>
  )
}
