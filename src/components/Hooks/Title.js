import React from "react";

const Title = ({ before, after }) => {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center my-40">
      <h6 className="textColor text-uppercase about-outline ">{before}</h6>
      <h6 className="secondText position-absolute text-uppercase fw-bold mb-0">
        {after}
      </h6>
    </div>
  );
};

export default Title;
