import React from "react";
import "./Footer.css";
const Footer = ({ theme }) => {
  let year = new Date().getFullYear();
  return (
    <div>
      <h6 className="mt-5 mb-4 text-center text-white themeColor">
        &copy; Copyright {year} || Designed By Sanjida Islam || All Rights
        Reserved
      </h6>
    </div>
  );
};

export default Footer;
