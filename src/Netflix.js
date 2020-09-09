import React, { useEffect, useState } from "react";
import "./calendar/styles/index.css";
import "./calendar/styles/Netflix.css";

const Netflix = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, []);
  return (
    <div
      className="container"
      style={{ ...(!visible ? { display: "none" } : {}) }}
    >
      <a href="#animals" className="item">
        <img src="https://placeimg.com/640/480/animals" alt="Animals" />
      </a>
      <a href="#architecture" className="item">
        <img
          src="https://placeimg.com/640/480/architecture"
          alt="Architecture"
        />
      </a>
      <a href="#nature" className="item">
        <img src="https://placeimg.com/640/480/nature" alt="Nature" />
      </a>
      <a href="#people" className="item">
        <img src="https://placeimg.com/640/480/people" alt="People" />
      </a>
      <a href="#tech" className="item">
        <img src="https://placeimg.com/640/480/tech" alt="Tech" />
      </a>
    </div>
  );
};
export default Netflix;
