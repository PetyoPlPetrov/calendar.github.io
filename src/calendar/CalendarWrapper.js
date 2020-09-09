import React, { useState, useEffect } from "react";
import ScheduleBar from "./scheduleSection/ScheduleBar";
import CalendarView from "./calendarSection/CalendarView";
import moment from "moment";

import useStorage from "./utils/useStorage";
import { fillRooms, fetchData } from "./utils/";
import getSelectedDay from "./utils/getSelectedDay";
import usePrev from "./utils/usePrev";

export const DateContext = React.createContext();

function CalendarWrapper() {
  const [date, setDate] = useState(moment());
  const [creatingEvent, setEventCreation] = useState(false);
  const [events, setEvents] = useStorage("Store.events", {});
  const [, setRooms] = useStorage("Store.roomAvailability", {});
  const [day] = useStorage("Store.selectedDay", "");
  const selectedDate = getSelectedDay(date, day);
  const prevSelected = usePrev(selectedDate);
  const prevEventCreation = usePrev(creatingEvent);
  useStorage("Store.selectedDay", moment().format("D"));

  useEffect(() => {
    fetchData().then((response) => {
      moment(response.meetings[0].start).format("hh:mm");
      if (Object.keys(events).length !== 0) {
        return;
      }

      const updatedEvents = response.meetings.reduce((acc, curr) => {
        let meetDate = moment(curr.start);
        let meetDateLabel =
          meetDate.format("D") + meetDate.format("MMMM") + meetDate.format("Y");

        let event = {
          starts: parseInt(curr.start.substr(curr.start.indexOf("T") + 1, 5)),
          ends: parseInt(curr.end.substr(curr.start.indexOf("T") + 1, 5)),
          name: curr.name,
          room: curr.meetingRoom,
          created: true,
        };

        if (Array.isArray(acc[meetDateLabel])) {
          acc[meetDateLabel].push(event);
        } else {
          acc[meetDateLabel] = [];
          acc[meetDateLabel].push(event);
        }
        return acc;
      }, {});

      setEvents(updatedEvents);
      setRooms(fillRooms(updatedEvents));
    });
  }, [events, setEvents, setRooms]);

  useEffect(() => {
    if (prevEventCreation === creatingEvent) {
      return;
    }
    let hasAnEmptyEvent = (events[prevSelected] || []).some(
      (e) => e.ends === null
    );

    if (hasAnEmptyEvent) {
      events[prevSelected] = (events[prevSelected] || []).filter(
        (e) => e.created !== false
      );
      setEvents(events);
      setRooms(fillRooms(events));
    }
  }, [
    creatingEvent,
    prevEventCreation,
    events,
    setEvents,
    setRooms,
    prevSelected,
  ]);

  return (
    <div className="wrapper">
      <DateContext.Provider
        value={{ date, setDate, creatingEvent, setEventCreation }}
      >
        <ScheduleBar />
        <CalendarView />
      </DateContext.Provider>
    </div>
  );
}

export default CalendarWrapper;
