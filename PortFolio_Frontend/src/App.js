import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Skills/>
      <ExperienceSection/>
      <ProjectsSection/>
    </div>
  );
};

export default App;
