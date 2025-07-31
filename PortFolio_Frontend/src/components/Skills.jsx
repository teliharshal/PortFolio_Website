// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const Skills = () => {
  return (
   <section id="skills" className="relative bg-slate-200 py-20 px-4 overflow-hidden">
  {/* Background Canvas
  <div className="absolute inset-0 z-0">
    <HeroCanvas />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-200 z-10" />
  </div> */}

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.h2
       className="text-4xl font-bold text-gray-800 mb-12"
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
    >
      My Tech Stack
    </motion.h2>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-sky-400"
        >
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-16 h-16 mb-4 object-contain"
          />
          <span className="text-indigo-800 font-semibold">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>

</section>
  );
};

export default Skills;
