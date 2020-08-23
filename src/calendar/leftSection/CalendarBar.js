import React from "react";
import CalendarHeaders from "./CalendarHeaders";
import Hours from "./Hours";

function TimeBar() {
  return (
    <div className="flex column">
      <CalendarHeaders />
      <Hours />
    </div>
  );
}

export default TimeBar;
