import React, { useContext, useCallback} from 'react';
import moment from 'moment'
import {DateContext} from '../CalendarWrapper'
import Cell from './CalendarCell'

function CalendarCells(){
  const {date} = useContext(DateContext);
  let days = date.daysInMonth();
  let firstDay = parseInt(date.startOf('month').format('d'));
  const daysInSelectedMonth = days+firstDay

  return  (
    <div className='days'>
    {
      [...Array(daysInSelectedMonth).keys()].map(e => <Cell key={e} day={e} />)
    }
  </div>
  )
}

function Controls(){
  const {date, setDate,setEventCreation} = useContext(DateContext);

  const onPrev = useCallback(()=>{
      setEventCreation(false)
      date.subtract(1,'M');
      setDate(moment({...date}))
  },[date,setDate,setEventCreation]);

  const onNext = useCallback(()=>{
    setEventCreation(false)
    date.add(1, 'M')
    setDate(moment({...date}))
  },[date,setDate,setEventCreation]);

  return <div className='flex controls'>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
  </div>
}

function CalendarDay() {

  return (
    <>
      <CalendarCells />
      <Controls />
    </>
  );
}

export default CalendarDay;
