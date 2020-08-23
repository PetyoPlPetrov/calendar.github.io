import React from "react";
import { fireEvent } from "@testing-library/react";
import CalendarHeaders from "../scheduleSection/ScheduleHeader";
import Weekdays from "../calendarSection/Weekdays";
import moment from "moment";
import { rend } from "./utils";
import NewEvent from "../calendarSection/NewEvent";

describe("Calendar", () => {
  describe("CalendarHeader", () => {
    it("Should render correctly the current weekday", () => {
      const { getByText } = rend(<CalendarHeaders />);
      const currentWeekDay = getByText(moment().format("dddd"));
      expect(currentWeekDay).toBeInTheDocument();
    });
  });

  describe("Calendar weekdays", () => {
    it("Should render correctly the calendar weekdays", () => {
      const { getByText } = rend(<Weekdays />);
      const weekdays = moment.weekdaysShort();
      weekdays.forEach((day) => (day) => expect(day).toBeInTheDocument());
    });
  });

  describe("Creating a new event without errors", () => {
    it("Should create a new event", () => {
      const setEventCreation = jest.fn();
      const { getByText, debug, getByTestId, queryByText } = rend(
        <NewEvent
          event={{ starts: 9, ends: null, created: false, room: null }}
        />,
        { contextProps: { setEventCreation } }
      );
      fireEvent.change(getByTestId("ends"), { target: { value: 10 } });
      fireEvent.change(getByTestId("room"), { target: { value: "Tsarevets" } });
      fireEvent.click(getByText("Save"));
      expect(
        queryByText("Check the start/end time. Fill the room field.")
      ).not.toBeInTheDocument();
      expect(setEventCreation).toHaveBeenCalledWith(false);
    });
  });
});
