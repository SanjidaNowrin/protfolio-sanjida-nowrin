import React from "react";
import Typed from "react-typed";

import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="row m-0  mt-3 align-items-center">
        <div className="col-md-6 mt-5 mb-5">
          <img
            src="https://i.ibb.co/Jm194FF/20220518-142207-1.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-6 mb-5">
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
