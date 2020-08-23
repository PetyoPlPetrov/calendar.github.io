import React, { useState, useEffect } from "react";
import "./styles/Common.css";
import "./styles/Calendar.css";
import CalendarBar from "./leftSection/CalendarBar";
import DetailedTime from "./rightSection/DetailedTime";
import moment from "moment";
import useStorage from "./utils/useStorage";
import { fillRooms, fetchData } from "./utils/";

export const DateContext = React.createContext();

function CalendarWrapper() {
  const [date, setDate] = useState(moment());
  const [creatingEvent, setEventCreation] = useState(false);
  const [events, setEvents] = useStorage("Store.events", {});
  const [, setRooms] = useStorage("Store.roomAvailability", {});
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

  return (
    <div className="wrapper">
      <DateContext.Provider
        value={{ date, setDate, creatingEvent, setEventCreation }}
      >
        <CalendarBar />
        <DetailedTime />
      </DateContext.Provider>
      <a
        className="blackCell"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/PetyoPlPetrov/calendar.github.io/blob/master/README.md"
      >
        <h3>Github</h3>{" "}
      </a>
    </div>
  );
}

export default CalendarWrapper;
