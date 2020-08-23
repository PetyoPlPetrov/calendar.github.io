import React, { useContext, useCallback } from "react";
import moment from "moment";
import { DateContext } from "../CalendarWrapper";

function CalendarControls() {
  const { date, setDate, setEventCreation } = useContext(DateContext);

  const onPrev = useCallback(() => {
    setEventCreation(false);
    date.subtract(1, "M");
    setDate(moment({ ...date }));
  }, [date, setDate, setEventCreation]);

  const onNext = useCallback(() => {
    setEventCreation(false);
    date.add(1, "M");
    setDate(moment({ ...date }));
  }, [date, setDate, setEventCreation]);

  return (
    <div className="flex controls">
      <button className="blackCell button" onClick={onPrev}>
        Prev
      </button>
      <button className="blackCell button" onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default CalendarControls;
