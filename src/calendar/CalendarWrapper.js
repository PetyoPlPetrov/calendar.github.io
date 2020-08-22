import React, {useState, useEffect} from 'react';
import './styles/Common.css';
import './styles/Calendar.css';
import CalendarBar from './leftSection/CalendarBar'
import DetailedTime from './rightSection/DetailedTime'
import moment from 'moment'
import useStorage from './utils/useStorage';
import { fillRooms,fetchData } from './utils/';

export const DateContext = React.createContext();

function CalendarWrapper() {
  const [date,setDate]= useState(moment())
  const [creatingEvent,setEventCreation]= useState(false);
  const [events,setEvents]=useStorage('Store.events',{});
  const [,setRooms] = useStorage('Store.roomAvailability',{});
  useStorage('Store.selectedDay',moment().format('D'));


  useEffect(()=>{

    fetchData().then(response=>{
       moment(response.meetings[0].start).format('hh:mm')
       if(Object.keys(events).length!==0){
         return
       }
       response.meetings.forEach(meet => {
          let meetDate = moment(meet.start);
          let meetDateLabel = meetDate.format('D')+meetDate.format("MMMM")+meetDate.format('Y')

          let event = {
            starts:parseInt(meet.start.substr(meet.start.indexOf('T')+1,5)),
            ends:parseInt(meet.end.substr(meet.start.indexOf('T')+1,5)),
            name: meet.name,
            room:meet.meetingRoom,
            created:true
          }
          if(Array.isArray(events[meetDateLabel])){
            events[meetDateLabel].push(event)
          }else{
            events[meetDateLabel]=[];
            events[meetDateLabel].push(event)

          }
        });
      
        setEvents(events)
        setRooms(fillRooms(events))
    })
  },[events, setEvents, setRooms])

  return (
    <div className="wrapper">
      <DateContext.Provider value={{date,setDate,creatingEvent,setEventCreation}}>
            <CalendarBar />
            <DetailedTime />
      </DateContext.Provider>
      <a className='blackCell' target="_blank" rel="noopener noreferrer" href='https://github.com/PetyoPlPetrov/calendar.github.io/blob/master/README.md'><h3>Github</h3> </a>
    </div>
  );
}

export default CalendarWrapper;
