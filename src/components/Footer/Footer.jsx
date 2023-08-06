import React from "react";
import "./style.css";
import World from "../../assets/world.svg";
const Footer = () => {
  return (
    <>
      <div className="app__footer">
        <a href="#">Questions? Contact us.</a>
        <div className="footer__links-container">
          <div className="footer__links">
            <a href="#">FAQ</a>
            <a href="#">Media Center</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Speed Test</a>
          </div>

          <div className="footer__links">
            <a href="#">Help Center</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
            <a href="#">Legal Notices</a>
          </div>

          <div className="footer__links">
            <a href="#">Account</a>
            <a href="#">Jobs</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
            <a href="#">Only on Netflix</a>
          </div>
        </div>
        <div className="world">
          <img src={World} alt="icon" className="svgW" />
          <select name="aaa" id="">
            <option value="">English</option>
          </select>
        </div>
        <small>Netflix Ghana</small>
      </div>
    </>
  );
};

export default Footer;
