import React, { useContext } from "react";
import moment from "moment";
import { DateContext } from "../CalendarWrapper";
import useStorage from "../utils/useStorage";

function Cell({ day }) {
  const { date, setEventCreation } = useContext(DateContext);
  const [selectedDay, setSelected] = useStorage("Store.selectedDay", "");
  const [events] = useStorage("Store.events", {});

  let firstDay = parseInt(date.startOf("month").format("d"));
  let currentDay = parseInt(moment().format("D"));
  let cell = day + 1 - firstDay;

  if (day < firstDay) {
    //empty cells
    return <div key={day}></div>;
  }

  const isCurrentDate =
    cell === currentDay && moment().format("MMMM") === date.format("MMMM");

  let currentDate = cell + date.format("MMMM") + date.format("Y");
  const hasSomeEvent = Array.isArray(events[currentDate])
    ? events[currentDate].length > 0
    : false;

  return (
    <div
      className={`centered blackCell cellCircle ${hasSomeEvent ? "hasEvent" : ""} ${
        isCurrentDate
          ? "currentDay"
          : parseInt(selectedDay) === cell
          ? "selectedDay"
          : ""
      }`}
      key={cell}
      onClick={() => {
        setEventCreation(false);
        setSelected(cell);
      }}
    >
      {cell}
    </div>
  );
}

export default Cell;
