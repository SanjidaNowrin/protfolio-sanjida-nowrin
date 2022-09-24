import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FixedIcon from "./components/FixedIcon/FixedIcon";
import ScrollToTop from "react-scroll-to-top";
import Animation from "./components/Animation/Animation";
import Home from "./components/Header/Home";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("");
  // theme set
  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Animation theme={theme} />
        <ScrollToTop
          style={{ backgroundColor: "var(--primary-color)", top: "550px" }}
          smooth
          component={
            <p className="text-orange-500 mt-1 text-white">
              <i className="fas fa-angle-double-up fa-lg"></i>
            </p>
          }
        />
        {/* scroll bar end */}
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/home"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route path="/projects/:detailId" element={<Details />} />
        </Routes>
        <FixedIcon />
      </BrowserRouter>
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
