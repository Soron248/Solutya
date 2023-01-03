import React from "react";
import homeCss from "./home.module.css";
import logo from "./images/logo.png";
import arrow from "./images/Vector.png";
import usa from "./images/usa.png";
import srch from "./images/search icon.png";
import redot from "./images/Ellipse 1.png";
import arizona from "./images/Arizona.png";
import leftArrow from "./images/Group 32.png";
import rightArrow from "./images/Frame 1.png";

function home() {
  return (
    <div>
      <section className={homeCss.homeSection}>
        <div className={homeCss.header}>
          <div className={homeCss.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={homeCss.nav}>
            <div className={homeCss.sub2}>
              <p>Sign Up / Sign In</p>
            </div>
            <div className={homeCss.sup}>
              <ul>
                <li>Support</li>
                <li>
                  USD
                  <sub>
                    <img src={arrow} alt="" />
                  </sub>
                </li>
                <li>
                  <span>
                    <img src={usa} alt="" />
                  </span>
                  EN
                  <sub>
                    <img src={arrow} alt="" />
                  </sub>{" "}
                </li>
              </ul>
            </div>
            <div className={homeCss.navmid}>
              <ul>
                <li>HOME</li>
                <li>FEATURES</li>
                <li>PAGES</li>
                <li>TOURS</li>
                <li>CARS</li>
                <li>HOTELS</li>
                <li>FLIGHTS</li>
                <li>
                  <img src={srch} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={homeCss.mid}>
          <div className={homeCss.box}>
            <p>
              <img src={redot} alt="" />
              United State of America
            </p>
            <div>
              <img src={arizona} alt="" />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={homeCss.btn}>
            <button>Book Now</button>
            <p>Choose Tour</p>
          </div>
        </div>
        <span className={homeCss.arrow}>
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </span>
        <div className={homeCss.footer}>
          <div>
            <ul>
              <li>Hotel</li>
              <li>Flight</li>
              <li>Cars</li>
              <li>Packages</li>
              <li>Cruise</li>
              <li>Holiday</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
