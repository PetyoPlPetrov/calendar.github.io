import React from 'react';
import { fireEvent } from '@testing-library/react';
import CalendarHeaders from '../leftSection/CalendarHeaders';
import Weekdays from '../rightSection/Weekdays';
import moment from 'moment';
import {rend} from './utils';
import NewEvent from '../rightSection/NewEvent';

describe('Calendar', ()=>{

  describe('CalendarHeader', ()=>{

    it('Should render correctly the current weekday', () => {
      const { getByText } = rend(<CalendarHeaders />);
      const currentWeekDay =getByText(moment().format('dddd'))
      expect(currentWeekDay).toBeInTheDocument();
    });
  
  });

  describe('Calendar weekdays', ()=>{
    it('Should render correctly the calendar weekdays',()=>{
      const { getByText } = rend(<Weekdays />);
      const weekdays = moment.weekdaysShort();
      weekdays.forEach(day=>day=> expect(day).toBeInTheDocument())
    })
  })

  // describe('New Event',()=>{
  //     it('Should create a new event', ()=>{
  //       const { getByText, debug, getByTestId } = rend(<NewEvent event={{starts:9, ends:null, created:false, room:null}} />);
  //       fireEvent.onChange(fireEvent('ends'),{target:{value: 10}});

  //     })
  // })

})
