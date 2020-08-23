import React from "react";
import "./calendar/styles/index.css";
import CalendarWrapper from "./calendar/CalendarWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header flex centered">
        <CalendarWrapper />
      </header>
    </div>
  );
}

export default App;
