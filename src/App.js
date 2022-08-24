import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import FixedIcon from "./components/FixedIcon/FixedIcon";

function App() {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <About theme={theme} toggleTheme={toggleTheme} />
      <Blogs theme={theme} toggleTheme={toggleTheme} />
      <Services theme={theme} toggleTheme={toggleTheme} />
      <Contact theme={theme} toggleTheme={toggleTheme} />
      <FixedIcon />
    </>
  );
}

export default App;
