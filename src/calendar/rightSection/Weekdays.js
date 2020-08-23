import React from "react";
import moment from "moment";

function Weekdays() {
  const weekdayshort = moment.weekdaysShort();

  return (
    <div className="weekdays">
      {weekdayshort.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}

export default Weekdays;
