import React, { useContext, useState, useCallback, useMemo } from "react";
import useStorage from "../utils/useStorage";
import getSelectedDay from "../utils/getSelectedDay";
import { fillRooms, checkForFreeSlot } from "../utils/";
import { DateContext } from "../CalendarWrapper";

function NewEvent({ event }) {
  const [selectedDay] = useStorage("Store.selectedDay", "");
  const { date, setEventCreation } = useContext(DateContext);
  const [events, setEvents] = useStorage("Store.events", {});
  const [form, setForm] = useState({
    starts: event.starts,
    ends: Math.min(event.starts + 1, 24),
    room: "empty",
    name: "Event",
  });
  const [rooms, setRooms] = useStorage("Store.roomAvailability", {});
  const checkAvailability = checkForFreeSlot(rooms);
  const [error, setError] = useState(false);
  const selectedDate = getSelectedDay(date, selectedDay);
  let starts = form.starts === "" ? "" : parseInt(form.starts);
  let ends = form.ends === "" ? "" : parseInt(form.ends);

  const onSave = useCallback(() => {
    if (form.room === "empty") {
      setError(true);
      return;
    }

    const currentSelectedDay = getSelectedDay(date, selectedDay);

    const hasFreeSlot = checkAvailability(
      currentSelectedDay,
      form.room,
      starts,
      form.ends - 1
    );

    if (hasFreeSlot) {
      let meet = {
        ...form,
        starts: starts,
        ends,
        room: form.room,
        created: true,
      };
      if (!events[currentSelectedDay]) {
        // TODO mock useStorage to avoid that 'if' per testing purposes
        events[currentSelectedDay] = [];
      }
      events[currentSelectedDay].push(meet);

      let allEventsPerDay = events[currentSelectedDay].filter(
        (e) => e.ends !== null
      );
      events[currentSelectedDay] = allEventsPerDay;
      setEvents(events);
      setRooms(fillRooms(events));
      setEventCreation(false);
    } else {
      setError(true);
    }
  }, [
    date,
    events,
    setEvents,
    setEventCreation,
    selectedDay,
    form,
    checkAvailability,
    setRooms,
    starts,
    ends,
  ]);

  const onCancelCreate = useCallback(() => {
    const currentSelectedDay = getSelectedDay(date, selectedDay);
    let allEventsPerDay = (events[currentSelectedDay] || []).filter(
      (e) => e.ends !== null
    );
    events[currentSelectedDay] = allEventsPerDay;
    setEvents(events);
    setEventCreation(false);
  }, [events, setEvents, setEventCreation, date, selectedDay]);

  const onChange = useCallback(
    (field) => {
      return ({ target: { value } }) => {
        error && setError(false);
        setForm((state) => {
          const futureStart =
            value === "" ? "" : Math.min(Math.max(value, ""), 23);
          const futureEndsWhenStartChanged = Math.min(
            Math.max(value, value === "" ? "" : parseInt(value) + 1),
            24
          );
          if (field === "starts") {
            return {
              ...state,
              [field]: futureStart,
              ["ends"]: futureEndsWhenStartChanged,
            };
          }
          const newEnds =
            value === "" ? "" : Math.min(Math.max(value, starts + 1), 24);
          if (field === "ends") {
            return { ...state, [field]: newEnds };
          }

          return { ...state, [field]: value };
        });
      };
    },
    [setForm, setError, error, starts]
  );

  const [isTsarevecFree, isArbanasiFree] = useMemo(() => {
    return [
      (starts || starts === 0) &&
        ends &&
        checkAvailability(
          selectedDate,
          "Tsarevets",
          starts,
          ends < starts ? starts : ends
        ),
      (starts || starts === 0) &&
        ends &&
        checkAvailability(
          selectedDate,
          "Arbanasi",
          starts,
          ends < starts ? starts : ends
        ),
    ];
  }, [checkAvailability, selectedDate, starts, ends]);

  return (
    <div className="flex column down blackCell">
      <h3 className="up">New Event</h3>
      <div>
        Name<input value={form.name} onChange={onChange("name")}></input>
      </div>
      <div>
        Starts
        <input
          data-testid="start"
          value={starts}
          onChange={onChange("starts")}
          className={`${form.starts === "" ? "errorField" : ""}`}
        ></input>
      </div>
      <div>
        Ends
        <input
          data-testid="ends"
          value={ends}
          onChange={onChange("ends")}
          className={`${form.ends === "" ? "errorField" : ""}`}
        ></input>
      </div>
      <div>
        Room
        <select
          data-testid="room"
          name="room"
          onChange={onChange("room")}
          value={form.room}
        >
          <option value="empty">
            {!isTsarevecFree && !isArbanasiFree ? "No room" : "Select room"}
          </option>
          {isTsarevecFree && <option value="Tsarevets">Tsarevets</option>}
          {isArbanasiFree && <option value="Arbanasi">Arbanasi</option>}
        </select>
      </div>
      <div className="flex controls down">
        <button className="blackCell" onClick={onCancelCreate}>
          Cancel
        </button>
        <button className="primary" onClick={onSave}>
          Save
        </button>
      </div>
      {error && <div className="error">Choose a room.</div>}
    </div>
  );
}

export default NewEvent;
