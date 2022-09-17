import React from "react";
import "./FixedIcon.css";
const SocialLinks = () => {
  return (
    <div className="icon-bar">
      <a
        href="https://www.facebook.com/sanjida.nowrin.90"
        className="facebook"
        target="_blank"
        rel="noreferrer"
      >
        Facebook<i className=" fab fa-facebook-square"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://drive.google.com/uc?export=download&id=1gfSmIQTCtvOY3VlPItbiQMCrKs4-hwBs"
        className="resume"
      >
        Resume
        <i className="fas fa-user-circle"></i>
      </a>
      <a
        href="mailto:sanjidanowrin11@gmail.com"
        rel="noopener noreferrer"
        className="email"
        target="_blank"
      >
        Email<i className="fas fa-envelope"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://medium.com/@sanjidanowrin11"
        className="medium"
        target="_blank"
      >
        Medium<i className="fab fa-medium"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/sanjida-islam-nowrin/"
        className="linkedin"
        target="_blank"
      >
        Linkedin<i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/SanjidaNowrin"
        className="github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub<i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
