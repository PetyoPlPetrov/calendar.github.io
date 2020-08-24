import React from "react";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleBody from "./ScheduleBody";

function ScheduleBar() {
  return (
    <div className="flex column schedule">
      <ScheduleHeader />
      <ScheduleBody />
    </div>
  );
}

export default ScheduleBar;
