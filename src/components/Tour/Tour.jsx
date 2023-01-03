import React from "react";
import tourCss from "./Tour.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import leftArrow from "../Home/images/Group 32.png";
import rightArrow from "../Home/images/Frame 1.png";
import card from "./Timgaes/card.png";
import dest from "./Timgaes/dest.png";
import story from "./Timgaes/story.png";
import pic1 from "./Timgaes/pic1.png";
import pic2 from "./Timgaes/pic2.png";
import pic3 from "./Timgaes/pic3.png";
import pic4 from "./Timgaes/pic4.png";

function Tour() {
  return (
    <div>
      <section className={tourCss.tourSection}>
        <div className={tourCss.check}>
          <div className={tourCss.input}>
            <div>
              <span>
                <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                Going to
              </span>{" "}
              <br />
              <input
                className={tourCss.location}
                type="text"
                placeholder="Location here"
              />
            </div>
            <div>
              <span>
                <FiUserCheck style={{ marginRight: "5px" }} />
                Check in
              </span>{" "}
              <br />
              <input
                className={tourCss.date}
                type="date"
                placeholder="dd/mm/yy"
              />
            </div>
            <div>
              <span>
                <FiUserX style={{ marginRight: "5px" }} />
                Check out
              </span>{" "}
              <br />
              <input
                className={tourCss.date}
                type="date"
                placeholder="dd/mm/yy"
              />
            </div>
            <div>
              <span>
                <FiUser style={{ marginRight: "5px" }} />
                Travelers
              </span>{" "}
              <br />
              <input
                className={tourCss.date}
                type="text"
                placeholder="Travelers"
              />
            </div>
            <div>
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className={tourCss.text}>
          <div>
            <h1>Most Popular Tours</h1>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          <p className={tourCss.rightText}>
            View All Tour{" "}
            <span className={tourCss.arrow}>
              <img src={leftArrow} alt="" />
              <img src={rightArrow} alt="" />
            </span>
          </p>
        </div>

        <div className={tourCss.card}>
          <img src={card} alt="" />
        </div>

        <div className={tourCss.text2}>
          <h1>Top Destinations</h1>
          <div>
            <p className={tourCss.p1}>
              Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
            </p>
            <p className={tourCss.p2}>View All Destinations</p>
          </div>
        </div>

        <div className={tourCss.card2}>
          <img src={dest} alt="" />
        </div>

        <div className={tourCss.text3}>
          <h1>Interesting Stories</h1>
          <p>Watch and be inspired</p>
        </div>

        <div className={tourCss.card3}>
          <img src={story} alt="" />
        </div>

        <div className={tourCss.card4}>
          <div className={tourCss.image}>
            <div>
              <img src={pic1} alt="" />
            </div>
            <div>
              <img src={pic2} alt="" />
            </div>
            <div>
              <img src={pic3} alt="" />
            </div>
            <div>
              <img src={pic4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tour;
