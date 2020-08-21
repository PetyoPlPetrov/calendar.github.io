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

  const onSave = useCallback(()=>{

            if(parseInt(form.starts) >=parseInt(form.ends) || form.room ==='empty'){
              setError(true);
              return
            }

            const currentSelectedDay = getSelectedDay(date,selectedDay);

            const hasFreeSlot = checkAvailability(currentSelectedDay,form.room, form.starts, form.ends-1);

             if(hasFreeSlot){
              let meet = {...form,starts: parseInt(form.starts), ends: parseInt(form.ends), room: form.room, created:true};

              events[currentSelectedDay].push(meet);
 
              let allEventsPerDay = events[currentSelectedDay].filter(e => e.ends!== null);
              events[currentSelectedDay]= allEventsPerDay
                setEvents(events);
                setRooms(fillRooms(events))
                setEventCreation(false)
             }else{
               setError(true)
             }

            
  },[date,events,setEvents,setEventCreation,selectedDay,form, checkAvailability, setRooms])
  
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
      setForm(state=>({...state,[field]:value}))}
  },[ setForm, setError,error ]);

const [isTsarevecFree, isArbanasiFree] = useMemo(()=>{
  return [checkAvailability(selectedDate,'Tsarevets',parseInt(form.starts),parseInt(form.ends)<parseInt(form.starts)? parseInt(form.starts): parseInt(form.ends)),
  checkAvailability(selectedDate,'Arbanasi',parseInt(form.starts),parseInt(form.ends)<parseInt(form.starts)? parseInt(form.starts): parseInt(form.ends))
]
},[form, checkAvailability,selectedDate])
console.log(isTsarevecFree, isArbanasiFree)

  return (
      <div className='flex column newevent'>
         New Event
         <div>Name<input value={form.name} onChange={onChange('name')}  ></input></div>
         <div>Starts<input  value={form.starts} type='number' onChange={onChange('starts')} ></input></div>
         <div>Ends
          <input value={Math.min(form.ends,24)} type='number'  onChange={onChange('ends')}></input>
        </div>
         <div>Room
         <select name="room" onChange={onChange('room')} value={form.room}>
         <option value="empty">Select room</option>
            {isTsarevecFree && <option value="Tsarevets">Tsarevets</option>}
           { isArbanasiFree && <option value="Arbanasi">Arbanasi</option>}
           
        </select>
         </div>
         <div className=' controls'>
            <button onClick={onCancelCreate}>Cancel</button>
            <button onClick={onSave}>Save</button>
            {error && <div className='error'>Check the start/end time. Fill the room field.</div>}
         </div>
         </div> 
  );
}

export default NewEvent;
