import React, {useContext, useCallback} from 'react';
import {DateContext} from '../CalendarWrapper'
import useStorage from '../utils/useStorage';
import { getSelectedHours,checkForFreeSlot } from '../utils/';
import getSelectedDay from '../utils/getSelectedDay';

const Line = ({ hour })=>{
  const {date,setEventCreation} = useContext(DateContext);
  const [events, setEvents]=useStorage('Store.events',{});
  const [selectedDay]=useStorage('Store.selectedDay','');
  const selectedDate = getSelectedDay(date,selectedDay);
  const eventsPerDay = (events[selectedDate]||[])
  const [rooms]= useStorage('Store.roomAvailability',{});

  const scheduledHours = getSelectedHours(eventsPerDay);
  const hasScheduledMeet = scheduledHours.includes(hour);

  const isStartOfMeet = eventsPerDay.some(e => e.starts===hour && e.created === true);
  const selectedMeets = eventsPerDay.filter(e=> e.starts === hour);
  const checkAvailability = checkForFreeSlot(rooms);

  const hasFreeSlot = checkAvailability(selectedDate,'Arbanasi',hour,hour+1) || checkAvailability(selectedDate,'Tsarevets',hour,hour+1)

  const onCreateEvent = useCallback(()=>{
      setEventCreation(true);
      const allEventsPerDay =  events[selectedDate]||[]
      events[selectedDate] = [...allEventsPerDay,{starts:hour,ends: null, room: null, created:false}]
      setEvents(events)
  },[setEventCreation,events,selectedDate,setEvents, hour]);

  return <div
        className={`line ${hasScheduledMeet && 'hasScheduledMeet'}`}
        onClick={hasFreeSlot?onCreateEvent:null}>
      { isStartOfMeet && selectedMeets.filter(e => e.created).map(selectedMeet=>{
        return <p key={selectedMeet.name+selectedMeet.room}>{`${selectedMeet.name}, Room: ${selectedMeet.room}: ${selectedMeet.starts}:00 - ${selectedMeet.ends}:00`}</p>
      })}
    </div>
}
function Hours() {
  return (
          <div className='flex column hours'>
                  {
                      [...Array(24).keys()].slice(1).map(e => {
                        return <div className='flex' key={e}>
                                    <div className='blackCell'>{`${e>9?e:'0'+e}:00`}</div>
                                    <Line hour={e}/>
                        </div>
                      })
                  }
                  
          </div>

  );
}

export default Hours;
