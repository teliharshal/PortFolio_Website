import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";
// import ProjectsDetails from "./Pages/ProjectsDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Skills/>
      <ExperienceSection/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
