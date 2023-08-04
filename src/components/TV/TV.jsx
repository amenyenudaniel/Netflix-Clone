import React from "react";
import "./style.css";
import TVImage from "../../assets/tv.png";
import Line from "../Line";
const TV = () => {
  return (
    <>
      <div className="TV">
        <div className="tv-content">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <img src={TVImage} alt="TV" className="image" />
      </div>
      <Line />
    </>
  );
};

export default TV;
