import React from 'react';
import logo from './logo.svg';
// import './App.css';

import CalendarWrapper from './calendar/CalendarWrapper';



 function App() {

 

  return (
    <div className="App">
      <header className="App-header flex centered">
      {false &&  <img src={logo} className="App-logo" alt="logo" />}  
      <CalendarWrapper />
      </header>
    </div>
  );
}

export default App;
