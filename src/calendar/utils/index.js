
import data from '../eventsSeed/seed'

export const fillRooms = events => {
    const rooms = {};
    Object.keys(events).forEach(e=>{
      const eventsPerDay = events[e];
      const scheduledEventsperRoomForDay = eventsPerDay.reduce((r,a)=>{
        r[a.room] = r[a.room] || [];
        r[a.room].push(a);
        return r;
      },{})
      rooms[e]=scheduledEventsperRoomForDay;
  });
  return rooms
}

export const fetchData = ()=> new Promise(res=>{
    setTimeout(()=>res(data),0)
  });
  

export function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export const getSelectedHours = (eventsPerDay)=> {   
  let scheduledHours=[];
    eventsPerDay.forEach(element => {
      if(element.ends&&element.starts){
        let rangeHours = range(element.ends- element.starts, element.starts);
        scheduledHours.push(...rangeHours)
      } 
    });
  return scheduledHours
}
export const checkForFreeSlot =(roomsAvalability) => (date,room, starts,ends)=>{
  const usedRooms = roomsAvalability[date] !== undefined? roomsAvalability[date][room] ||[] : []
  const scheduledHours = getSelectedHours(usedRooms);
  const rangePerCurrentEvent = range(ends-starts,starts)

  return !rangePerCurrentEvent.some(e => scheduledHours.includes(e))
}