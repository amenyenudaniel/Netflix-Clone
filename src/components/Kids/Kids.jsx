import React from "react";
import BoxShort from "../../assets/boxshot.png";
import Gif from "../../assets/download-icon.gif";
import Strange from "../../assets/strange.jpg";
import KidsImg from "../../assets/kids.png";
import Line from "../Line";
import "./style.css";
const Kids = () => {
  return (
    <>
      <div className="app__kids">
        <img src={KidsImg} alt="kids--shows" />
        <div className="kids__content">
          <h1>Create profiles for kids</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <Line />
    </>
  );
};

export default Kids;
