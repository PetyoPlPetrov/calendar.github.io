import React from "react";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleBody from "./ScheduleBody";

function ScheduleBar() {
  return (
    <div id="leftPane" className="flex column">
      <ScheduleHeader />
      <ScheduleBody />
    </div>
  );
}

export default ScheduleBar;
