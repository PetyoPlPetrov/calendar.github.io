# Calendar

This repository will present a calendar/event schedule application. The boilerplate is create-react-app. The calendar is built from scrach in plain css using css grid and flexbox. There is a mobile version.
Supported create and delete functionality.

## Setting up the project

1. Clone the repository on master branch(it is the default one)

   - the library source code is located into `calendar/src` folder

1. To **install dependencies** execute in the terminal `npm install`

It can be accessed directly in https://petyoplpetrov.github.io/calendar.github.io/

## Project structure

```
    - project root
        - calendar
            - mock data seed
            - left view with hours and selected date info
            - right view with calendar and event creation form
            - styles
            - utils
            - tests

```

## Usage

1. From the data seed the Calendar is pre-populated with scheduled events.
2. Creating events with the following properties - start time, end time, room, meet name. 2 events on the same time in the same room cannot exist.
3. Basic calendar functionality with current date and currently selected date.

## Constraints

1. The application works with whole hours - every meet can starts/ends on 8:00, 9:00 etc... It cannot currently use part-time as 09:15
2. There is no proper error messages and warnings for the event creation.
3. When day or month are changed, the event creation form is reset and closed. One must start over.
4. There is no prompt dialog before removing the event.

## Interesting facts

Chromium just landed its flexbox gap property, so decided to use it. All the event schedule data is saved in the sesion storage.
The session storage is used to store the selection, so you may refresh the page.

## Authors

- **Petyo Petrov**
