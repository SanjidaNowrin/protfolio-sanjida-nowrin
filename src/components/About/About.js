import React from "react";
import Typed from "react-typed";

import "./About.css";
const About = ({ theme, toggleTheme }) => {
  return (
    <div className="container" id="about">
      <div className="row m-0  align-items-center">
        <div className="col-md-6 mt-5 mb-5">
          {theme ? (
            <img
              src="https://i.ibb.co/nQmjJRd/final.png"
              className="img-fluid"
              alt=""
            />
          ) : (
            <img
              src="https://i.ibb.co/54Yr169/20220518-142207-1.png"
              className="img-fluid"
              alt=""
            />
          )}
        </div>
        <div className="col-md-6 mb-5 about-background">
          <p className="nameTitle mb-2">
            Hey, I'm Sanjida Islam Nowrin!
            <img
              alt="hi"
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="30px"
            ></img>
          </p>
          <div className="mb-4">
            <Typed
              className="typed-text"
              strings={[
                "Web Developer",
                "Web Designer",
                "React Developer",
                "Programmer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </div>

          <p className=" text-secondary">
            I am a Full Stack web developer, experience with web applications
            and building websites.I can do pixel-perfect website design and am
            also experienced in the web development section. Full and fresh hand
            code is my power. Client satisfaction is my first priority.
            <br /> <br />I have extensive experience in HTML, CSS,
            Javascript,RectJs,NodeJs,MongoDB. I am trying to gain confidence
            using my potential in the field of “Web Development”.
          </p>
          <button type="button" className="btn border-0 aboutResume mt-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1gfSmIQTCtvOY3VlPItbiQMCrKs4-hwBs"
              className="resumeTitle text-uppercase"
            >
              Resume
              <i className="fas fa-download"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
