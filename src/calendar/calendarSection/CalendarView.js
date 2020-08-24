import React, { useContext } from "react";
import Weekdays from "./Weekdays";
import CalendarDays from "./CalendarDay";
import NewEvent from "./NewEvent";
import { DateContext } from "../CalendarWrapper";
import useStorage from "../utils/useStorage";
import getSelectedDay from "../utils/getSelectedDay";

function CalendarView() {
  const [selectedDay] = useStorage("Store.selectedDay", "");
  const { creatingEvent, date } = useContext(DateContext);
  const selectedDate = getSelectedDay(date, selectedDay);
  const [events] = useStorage("Store.events", {});

  const event = (events[selectedDate] || []).find((e) => e.ends === null) || {};

  return (
    <div className="flex column">
      <div id="calendarBox">
        <Weekdays />
        <CalendarDays />
      </div>
      {creatingEvent && <NewEvent event={event} />}
    </div>
  );
}

export default CalendarView;
