import React, { useContext, useCallback} from 'react';
import moment from 'moment'
import {DateContext} from '../CalendarWrapper'
import Cell from './CalendarCell'


function CalendarControls(){
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
      <button className='blackCell' onClick={onPrev}>Prev</button>
      <button className='blackCell' onClick={onNext}>Next</button>
  </div>
}

export default CalendarControls;
