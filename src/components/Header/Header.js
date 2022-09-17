import React, { useEffect, useState } from "react";
import "./Header.css";

import { HashLink } from "react-router-hash-link";
const Header = ({ toggleTheme, theme }) => {
  const navLinks = [
    { path: "#about", display: "About" },
    { path: "#skills", display: "Skills" },
    { path: "#projects", display: "Projects" },
    { path: "#blogs", display: "Blogs" },
    { path: "#services", display: "Services" },
    { path: "#contact", display: "Contact Me" },
  ];

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <nav
      className={
        isSticky
          ? "navbar navbar-expand-lg navbar-light header-shrink "
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <div className="container">
        <h1 className="navbar-brand logo" href="#">
          Sanjida
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((item, index) => (
              <li
                as={HashLink}
                key={index}
                className="nav-item ps-4 text-uppercase"
              >
                <a
                  className="nav-link active menu-item"
                  aria-current="page"
                  href={item.path}
                >
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
          <div className="light-mode text-uppercase">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>
                  Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>
                  Light
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
