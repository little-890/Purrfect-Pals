import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:prashantchotu2000@gmail.com">
          Prashantchotu2000@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/prashant-shukla-a1b731267/">
          User Name: Prashant shukla
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/little-890">
          prashant shukla(little-890)
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/kaxhie_x/">
          @little_shukla_20
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+917477267849">
          +91 7477267849
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
