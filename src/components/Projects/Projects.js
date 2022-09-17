import React from "react";
import "./Projects.css";
import Title from "./../Hooks/Title";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useProjects from "./../Hooks/useProjects";
const Projects = ({ theme }) => {
  let { projects } = useProjects();

  let navigate = useNavigate();
  return (
    <div className="container mb-4" id="projects">
      <Title before="Projects" after="My Latest Work" />
      <div className="row m-0 container mt-4">
        {projects.map((project) => {
          return (
            <div className="col-md-4 gx-5 mb-5" key={project.id}>
              <div className="card shadow mx-auto border-0 card-round">
                <div className="p-3 imgDiv">
                  <img
                    src={project.banner}
                    className="card-img-top card-round"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title project-title">{project.name}</h4>
                  <p className="card-text text-white lightColor">
                    {project.desc}
                  </p>
                  <button
                    className="btn btn p-0 project-btn"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    Details
                    <BsFillArrowRightCircleFill className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
