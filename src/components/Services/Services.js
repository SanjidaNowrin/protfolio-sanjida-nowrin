import React from "react";
import "./Services.css";
import Title from "./../Hooks/Title";

const Services = () => {
  return (
    <div className="container" id="services">
      <Title before="Services" after="Services" />
      <div className="service-row mt-5">
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="far fa-object-group "></i>
            </div>
            <h3>MERN DEVELOPMENT</h3>
            <p className="fw-bolder text-muted">
              I can design a responsive website with clean and optimized code.
            </p>
          </div>
        </div>
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fas fa-code"></i>
            </div>
            <h3>FRONTEND DEVELOPMENT</h3>
            <p className="fw-bolder text-muted">
              Qualified web design and attractive effects which catches
              visitor’s Eye.
            </p>
          </div>
        </div>
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="ri-server-fill"></i>
            </div>
            <h3>BACKEND DEVELOPMENT</h3>
            <p className="fw-bolder text-muted">
              Build more secure and fast API with node js and express js for
              development backend.
            </p>
          </div>
        </div>
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fas fa-desktop "></i>
            </div>
            <h3>RESPONSIVE DESIGN</h3>
            <p className="fw-bolder text-muted">
              I can build a website more user friendly and more.bootstrap and
              custom Media Query.
            </p>
          </div>
        </div>
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fas fa-tools "></i>
            </div>
            <h3>BUGS FIXING</h3>
            <p className="fw-bolder text-muted">
              If your website have also problem such like that you may knock me.
            </p>
          </div>
        </div>
        <div className="service-column">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fas fa-database "></i>
            </div>
            <h3>API DEVELOPMENT</h3>
            <p className="fw-bolder text-muted">
              Build more secure and fast API with node js and express js for
              development backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
