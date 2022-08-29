import React, { useEffect, useState } from "react";
import Title from "../Hooks/Title";
import "./Skills.css";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("./Data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  console.log(skills);
  return (
    <div className="container mt-3 mb-5" id="skills">
      <Title before="Skills" after="Skills" />
      <div className="row m-0 gx-5">
        {skills.map((skill) => {
          const { id, img, style, title } = skill;
          return (
            <div className="col-lg-2 col-md-3" key={id}>
              <div
                className="border-0 skillsCard mt-5  "
                style={{ boxShadow: `${style}` }}
              >
                <div className="card-body">
                  <img src={img} className="img-fluid mx-auto d-block" alt="" />
                  <h5 className="text-center skill-title">{title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
