import React from "react";
import testiCss from "./testimonial.module.css";
import text from "./TestiImages/text.png";
import pic1 from "./TestiImages/pic1.png";
import pic2 from "./TestiImages/pic2.png";
import pic3 from "./TestiImages/pic3.png";
import star from "./TestiImages/star.png";
import grayDot from "./TestiImages/grayDot.png";
import redot from "./TestiImages/redot.png";
import blog1 from "./TestiImages/blog1.png";
import blog2 from "./TestiImages/blog2.png";
import blog3 from "./TestiImages/blog3.png";
import footer from "./TestiImages/footer.png";
import { FiMail } from "react-icons/fi";

const Testimonial = () => {
  return (
    <section className={testiCss.testiSection}>
      <div className={testiCss.testiText}>
        <h1>Testimonials and Review</h1>
        <img src={text} alt="" />
      </div>

      <div className={testiCss.testiImage}>
        <div>
          <img src={pic1} alt="" />
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
        <div>
          <img src={pic3} alt="" />
        </div>
      </div>

      <div className={testiCss.testiCard}>
        <div>
          <img src={star} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <h4>Shirly Smith</h4>
          <h5>CUSTOMER</h5>
        </div>
        <div>
          <img src={star} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <h4>Kevin Martin</h4>
          <h5>CUSTOMER</h5>
        </div>
        <div>
          <img src={star} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <h4>Jecchica Brown</h4>
          <h5>CUSTOMER</h5>
        </div>
      </div>
      <div className={testiCss.dot}>
        <img src={redot} alt="" />
        <img src={grayDot} alt="" />
        <img src={grayDot} alt="" />
      </div>

      <div className={testiCss.blog}>
        <div className={testiCss.blogText}>
          <h1 style={{ fontSize: "48px", marginTop: "80px" }}>
            Recent Blog Posts
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#645E5E",
              wordSpacing: "5px",
              letterSpacing: "1px",
              marginBottom: "42px",
            }}
          >
            Latin literature from 45 BC, making it over 2000 years old
          </p>
        </div>
        <div className={testiCss.blogCard}>
          <img src={blog1} alt="" />
          <img src={blog2} alt="" />
          <img src={blog3} alt="" />
        </div>
      </div>

      <div className={testiCss.news}>
        <div style={{ color: "white" }}>
          <h1>Newsletter</h1>
          <p>Sign Up to receive the best offer</p>
        </div>
        <input type="text" placeholder="Destination" />
        <input type="mail" placeholder="Email" />
        <button>
          <FiMail style={{ fontSize: "25px", color: "white" }} />
        </button>
      </div>

      <div style={{ width: "100%", height: "285px" }}>
        <img src={footer} alt="" style={{ width: "100%", height: "285px" }} />
      </div>
    </section>
  );
};

export default Testimonial;
