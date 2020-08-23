import React from "react";
import '@testing-library/jest-dom/extend-expect';	
import { render } from "@testing-library/react";
import moment from "moment";
import { DateContext } from "../CalendarWrapper";

export const rend = (component, { contextProps } = {}) =>
  render(
    <DateContext.Provider
      value={{
        date: moment(),
        setDate: jest.fn(),
        creatingEvent: jest.fn(),
        setEventCreation: jest.fn(),
        ...contextProps,
      }}
    >
      {component}
    </DateContext.Provider>
  );
