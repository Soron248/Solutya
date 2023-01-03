import React from "react";
import footCss from "./footer.module.css";
import logo from "../Home/images/logo.png";
import { FiCheckCircle } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <section className={footCss.footSection}>
      <div className={footCss.detail}>
        <div
          style={{
            width: "358px",
            borderBottom: "1px solid red",
          }}
        >
          <img src={logo} alt="" />
          <p style={{ width: "288px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={footCss.detailCom}>
          <h2>Company</h2>
          <p>About us</p>
          <p>Company Blogs</p>
          <p>Work with Us</p>
          <p>Meet the team</p>
        </div>
        <div className={footCss.detailCom}>
          <h2>Explore</h2>
          <p>Accountb</p>
          <p>Legel</p>
          <p>Contact</p>
          <p>Privecy Policy</p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <input type="mail" placeholder="Email Address" />
          <br />
          <button>Subscribe</button>
          <p style={{ fontSize: "14px" }}>
            <FiCheckCircle style={{ marginRight: "10px" }} /> I agree to all
            terms and condition
          </p>
        </div>
      </div>

      <div className={footCss.contact}>
        <h4 style={{ marginBottom: "30px" }}>
          <FiPhoneCall style={{ color: "red", marginRight: "10px" }} /> + 880
          1611 66 4965
        </h4>
        <h4 style={{ marginBottom: "30px" }}>
          <FiMail style={{ color: "red", marginRight: "10px" }} />{" "}
          solutya@gmail.com
        </h4>
        <h4>
          <FaMapMarkerAlt style={{ color: "red", marginRight: "10px" }} /> Usman
          center, Uttara-12
        </h4>
      </div>

      <div style={{ position: "relative", height: "150px", width: "100%" }}>
        <div className={footCss.foot}>
          <footer>
            <div
              style={{
                width: "161px",
                height: "154px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FiArrowDown style={{ fontSize: "50px" }} />
            </div>

            <div className={footCss.footright}>
              <div style={{ width: "500px" }}>
                <FiFacebook
                  style={{ color: "black", fontSize: "25px", margin: "0 20px" }}
                />
                <FiTwitter
                  style={{ color: "black", fontSize: "25px", margin: "0 20px" }}
                />
                <FiInstagram
                  style={{ color: "black", fontSize: "25px", margin: "0 20px" }}
                />
              </div>
              <p
                style={{
                  width: "300px",
                  color: "#2E2E2F",
                  marginRight: "-100px",
                }}
              >
                @ All Copyright 2022, Solutya
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
