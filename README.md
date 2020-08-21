# Calendar

This repository will present a calendar/event schedule application. The boilerplate is create-react-app.The calendar is built from scrach in plain css using css grid and flexbox. Chromium just landed its flexbox gap property, so here we are. The plain css also have variables, we dont need preprocessor for that case. Look at /calendar/styles/Calendar.css

## Setting up the project

1. Clone the repository on master branch(it is the default one)

   - the library source code is located into `src` folder

1. To **install dependencies** execute in the terminal `npm install`

It can be accessed  directly in https://petyoplpetrov.github.io/calendar.github.io/

## Project structure

```
    - project root
        - calendar
            - mock data seed
            - left view with hours 
            - right view with calendar and event creation 
            - styles
            - utils
            - tests***

```



## Usage
1. From the data seed the Calendar is populated with scheduled events.
2. Creating events with the following properties - start time, end time, room, meet name. 2 events on the same time in the same room cannot exist.


## Constraints
1. The application works with whole hours - every meet can starts/ends on 8:00, 9:00 etc... It cannot currently use part-time as 09:15
2. There is no proper error messages and warnings for the event creation.
3. The event start time is read only field. If one needs to change he start time it should press `cancel` and start over with the event creation.
4. The event ends is numeric field - with min - max value 0 - 24. You better use the scroll to set the value.
4. When day or month are changed, the event creation form is reset and closed. One must start over.


## Authors

- **Petyo Petrov**