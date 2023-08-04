import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import Line from "../Line";

const Header = () => {
  return (
    <>
      <div className="app__header">
        <div className="overlay1" />

        <nav>
          <img src={Logo} alt="logo" />
          <button type="button">Sign In</button>
        </nav>

        <header>
          <h2>Unlimited movies, TV shows, and more</h2>
          <p className="h6-first">Plans now start at US$2.99/month.</p>
          <p className="h6-second">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="header-input">
            <input type="text" placeholder="Email address" />
            <button>Get Started {">"}</button>
          </div>
          <div className="overlay2" />
        </header>
      </div>
      <Line />
    </>
  );
};

export default Header;
