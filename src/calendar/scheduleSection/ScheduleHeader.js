import React, { useContext } from "react";
import { DateContext } from "../CalendarWrapper";
import moment from "moment";
import useStorage from "../utils/useStorage";

function ScheduleHeader() {
  const [selectedDay] = useStorage("Store.selectedDay", "");
  const { date } = useContext(DateContext);
  const currentMonth = date.format("MMMM");
  let currentDay = moment().format("D");

  date.set("date", selectedDay || currentDay);

  let currentYear = date.format("Y");
  let currentWeekDay = date.format("dddd");

  return (
    <div className="header">
      <h1 className="flex centered blackCell">{`${
        selectedDay || currentDay
      } ${currentMonth} ${currentYear}`}</h1>
      <h2 className="flex centered blackCell"> {currentWeekDay}</h2>
    </div>
  );
}

export default ScheduleHeader;
