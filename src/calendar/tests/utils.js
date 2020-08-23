import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';
import {DateContext} from '../CalendarWrapper';

export const rend =(component) => render(<DateContext.Provider value={{date: moment(),setDate: jest.fn(),creatingEvent: jest.fn(),setEventCreation: jest.fn()}}>
    { component }
</DateContext.Provider>)