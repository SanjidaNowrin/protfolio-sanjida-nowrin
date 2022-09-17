import React, { useEffect, useState } from "react";
import useProjects from "./../Hooks/useProjects";
import { useParams } from "react-router-dom";
import "./Details.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillCaretRightFill } from "react-icons/bs";
const Details = ({ theme }) => {
  const [details, setDetails] = useState([]);
  let { detailId } = useParams();
  let { projects } = useProjects();
  useEffect(() => {
    const projectDetails = projects.find((p) => p.id === detailId);
    setDetails(projectDetails);
  }, [details, projects]);
  console.log(details);
  const { name, summary, images, client, server, live, technologies } =
    details || {};
  return (
    <div class="card border-0 shadow container detailsCard p-3 cardSize">
      <div class="card-body">
        <div className="row gx-5">
          <div className="col-md-6">
            <Slider
              autoplay
              autoplaySpeed={3000}
              dots
              initialSlide={2}
              infinite
              customPaging={(i) => {
                return (
                  <div>
                    <img
                      src={images[i]}
                      alt="https://i.ibb.co/k3FmrJ5/b2.png"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        border: "2px solid #917EEE",
                        padding: "4px",
                      }}
                    />
                  </div>
                );
              }}
              dotsClass="slick-dots custom-indicator"
            >
              {images?.map((item) => (
                <div>
                  <img
                    src={item}
                    alt=""
                    style={{
                      width: "100%",
                      height: "70vh",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-6 infoSection">
            <h3 className="project-title">{name}</h3>
            {summary?.map((s) => (
              <div className="mt-4 mb-1 text-white">
                <BsFillCaretRightFill className=" arrowColor" /> {s}
              </div>
            ))}
            {/* links */}
            <h5 className="project-title mt-4">Technologies:</h5>
            {/* technologies */}
            <div className="row m-0 ">
              {technologies?.map((tech) => (
                <div className="col-lg-3 col-md-6 col-sm-12 mb-2 mt-3">
                  <button
                    type="button"
                    className="w-100 h-100 btn btn-outline-light btn-sm"
                  >
                    {tech}
                  </button>
                </div>
              ))}
            </div>
            <div className="d-flex flex-wrap mt-4">
              <a
                href={client}
                rel="noreferrer"
                target="_blank"
                className="btn btn btnBg me-4 mb-1"
              >
                <i className="fab fa-github me-2"></i>
                Github Client Link
              </a>
              <a
                href={server}
                target="_blank"
                rel="noreferrer"
                className="btn btn btnBg me-4 mb-1"
              >
                <i className="fab fa-github me-2"></i>
                Github Server Link
              </a>
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="btn btn btnBg me-4  mb-1"
              >
                <i className="fas fa-external-link-square-alt me-2"></i>
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
