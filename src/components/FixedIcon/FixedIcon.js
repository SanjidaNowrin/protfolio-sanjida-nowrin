import React from "react";
import "./FixedIcon.css";
const SocialLinks = () => {
  return (
    // <div className="fixed-icon d-lg-flex flex-column position-fixed">
    //   <ul>
    //     {links.map(({ id, child, href, style, download }) => (
    //       <li
    //         key={id}
    //         className={
    //           "d-flex justify-content-between align-items-center w-100 h-50 set-icons"
    //         }
    //       >
    //         <a
    //           href={href}
    //           className="d-flex justify-content-between align-items-center w-full text-white"
    //           download={download}
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           {child}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
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
        download={true}
        rel="noreferrer"
        href="https://drive.google.com/uc?export=download&id=1gfSmIQTCtvOY3VlPItbiQMCrKs4-hwBs"
        className="resume"
        target="_blank"
      >
        Resume
        <i class="fas fa-user-circle"></i>
      </a>
      <a
        href="mailto:sanjidanowrin11@gmail.com"
        rel="noopener noreferrer"
        className="email"
        target="_blank"
      >
        Email<i class="fas fa-envelope"></i>
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
