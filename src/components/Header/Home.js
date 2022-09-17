import React from "react";
import About from "./../About/About";
import Skills from "./../Skills/Skills";
import Blogs from "./../Blogs/Blogs";
import Services from "./../Services/Services";
import Contact from "./../Contact/Contact";
import Projects from "./../Projects/Projects";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div id="home">
      <About theme={theme} toggleTheme={toggleTheme} />
      <Skills theme={theme} toggleTheme={toggleTheme} />
      <Projects theme={theme} toggleTheme={toggleTheme} />
      <Blogs theme={theme} toggleTheme={toggleTheme} />
      <Services theme={theme} toggleTheme={toggleTheme} />
      <Contact theme={theme} toggleTheme={toggleTheme} />
      <MessengerCustomerChat pageId="107809488459639" appId="737179020713512" />
    </div>
  );
};

export default Home;
