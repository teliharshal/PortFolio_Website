import {useState} from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
        <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-slate-200 dark:bg-gray-900 text-black dark:text-white transition-all duration-500 min-h-screen">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Hero />
        <Skills/>
        <ExperienceSection/>
        <ProjectsSection/>
        <Contact/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
