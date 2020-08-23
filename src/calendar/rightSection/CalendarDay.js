import React, { useContext, useCallback} from 'react';
import moment from 'moment'
import {DateContext} from '../CalendarWrapper'
import Cell from './CalendarCell'
import CalendarControls from './CalendarControls'

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


function CalendarDay() {

  return (
    <>
      <CalendarCells />
      <CalendarControls />
    </>
  );
}

export default CalendarDay;
