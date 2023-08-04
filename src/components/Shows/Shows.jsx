import React from "react";
import "./style.css";
import BoxShort from "../../assets/boxshot.png";
import Gif from "../../assets/download-icon.gif";
import Strange from "../../assets/strange.jpg";
import Line from "../Line";
const Shows = () => {
  return (
    <div>
      <div className="app__shows">
        <div className="shows__img">
          <img src={Strange} alt="shows" className="strange" />
          <div className="download">
            <img src={BoxShort} alt="shows" className="shows__smallImg" />
            <div className="shows__title">
              <p>Stranger Things</p>
              <small>Downloading...</small>
            </div>
            <img src={Gif} alt="gif" className="gif" />
          </div>
        </div>

        <div className="shows__content">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
      <Line />
      <div className="watch">
        <h1>
          Watch <br />
          everywhere
        </h1>
        <p>
          Stream unlimited movies and TV shows on your phone, tablets, laptop,
          and TV.
        </p>
      </div>
      <Line />
    </div>
  );
};

export default Shows;
