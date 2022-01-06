import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import React, {useState} from 'react';


const Kalendar=()=>{
  const [date , setDate] = useState(new Date());
  const onChange = date => {
      setDate(date);
  }
  return (
    <div className="App">
      <h1>Calendar</h1>
      <Calendar 
      showWeekNumbers 
      onChange={onChange} 
      value={date}
      />
      {date.toString()}
      
    </div>
  );
}

export default Kalendar;
