import React, {useContext, useState, useCallback, useMemo} from 'react';
import useStorage from '../utils/useStorage';
import getSelectedDay from '../utils/getSelectedDay';
import {fillRooms,checkForFreeSlot} from '../utils/';
import {DateContext} from '../CalendarWrapper'

function NewEvent({event}) {
  const [selectedDay]= useStorage('Store.selectedDay','');
  const {date,setEventCreation} = useContext(DateContext);
  const [events, setEvents]= useStorage('Store.events');
  const [form, setForm] = useState({starts:event.starts,ends:Math.min(event.starts+1,24),room:'empty',name:'Event'});
  const [rooms,setRooms]= useStorage('Store.roomAvailability',{});
  const checkAvailability = checkForFreeSlot(rooms);
  const [ error, setError] = useState(false)
  const selectedDate = getSelectedDay(date,selectedDay);
  let starts = parseInt(form.starts);
  let ends = parseInt(form.ends);
  
  const onSave = useCallback(()=>{

            if(starts >=ends || form.room ==='empty'){
              setError(true);
              return
            }

            const currentSelectedDay = getSelectedDay(date,selectedDay);

            const hasFreeSlot = checkAvailability(currentSelectedDay,form.room, starts, form.ends-1);

             if(hasFreeSlot){
              let meet = {...form,starts: starts, ends, room: form.room, created:true};

              events[currentSelectedDay].push(meet);
 
              let allEventsPerDay = events[currentSelectedDay].filter(e => e.ends!== null);
              events[currentSelectedDay]= allEventsPerDay
                setEvents(events);
                setRooms(fillRooms(events))
                setEventCreation(false)
             }else{
               setError(true)
             }

            
  },[date,events,setEvents,setEventCreation,selectedDay,form, checkAvailability, setRooms,starts,ends])
  
  const onCancelCreate = useCallback(()=>{
              const currentSelectedDay = getSelectedDay(date,selectedDay);
              let allEventsPerDay = (events[currentSelectedDay]||[]).filter(e => e.ends !== null);
              events[currentSelectedDay] = allEventsPerDay;
              setEvents(events);
              setEventCreation(false)
  },[events,setEvents,setEventCreation,date,selectedDay]);

  const onChange = useCallback((field)=>{
   
    return ({target:{value}})=>{

      error && setError(false)
      setForm(state=>{
        if(field ==='starts'){
          return ({...state,[field]:Math.min(Math.max(value,1),23)})
        }
        if(field ==='ends'){
          return ({...state,[field]:Math.min(Math.max(value,1),24)})
        }

        return ({...state,[field]:value})
      })}
  },[ setForm, setError,error ]);

const [isTsarevecFree, isArbanasiFree] = useMemo(()=>{
  return [ starts && ends && checkAvailability(selectedDate,'Tsarevets',starts,ends<starts? starts: ends),
  starts && ends && checkAvailability(selectedDate,'Arbanasi',starts,ends<starts? starts: ends)
]
},[ checkAvailability,selectedDate,starts,ends])
console.log(form)
return (
      <div className='flex column newevent blackCell'>
         New Event
         <div>Name<input value={form.name} onChange={onChange('name')}  ></input></div>
         <div>Starts<input  value={starts} type='number' onChange={onChange('starts')} ></input></div>
         <div>Ends
          <input value={ends} type='number'  onChange={onChange('ends')}></input>
        </div>
         <div>Room
         <select name="room" onChange={onChange('room')} value={form.room}>
         <option value="empty">Select room</option>
            {isTsarevecFree && <option value="Tsarevets">Tsarevets</option>}
           { isArbanasiFree && <option value="Arbanasi">Arbanasi</option>}
           
        </select>
         </div>
         <div className='controls'>
            <button className='blackCell' onClick={onCancelCreate}>Cancel</button>
            <button className='secondary' onClick={onSave}>Save</button>
            {error && <div className='error'>Check the start/end time. Fill the room field.</div>}
         </div>
         </div> 
  );
}

export default NewEvent;
