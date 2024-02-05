import { useState } from 'react'
import './App.css'
import moment from 'moment'
import { MonthCard } from './components/MonthCard'
import { IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';


 export function App() {
  const [currentYear, setCurrentYear] = useState("2024");
  const [dateSelected, setDateSelected] = useState([]);

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
      <div className="header-page">
        
        <IconButton
          size='small'
          onClick={() => setCurrentYear(currentYear - 1)}
        >
          <KeyboardArrowLeft style={{color: '#f7fee7', fontSize: 40 }}/>
        </IconButton>
        
        {currentYear}
        
        <IconButton
          size='small'
          onClick={() => setCurrentYear(currentYear + 1)}
        >
          <KeyboardArrowRight style={{color: '#f7fee7', fontSize: 40 }}/>
        </IconButton>
        
      </div>
      <div className="content">
        {month.map((value) => (
          <MonthCard 
            key={value}
            month={value}
            currentYear={currentYear}
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
          />
        ))}
      </div>
    </div>
  )
}
