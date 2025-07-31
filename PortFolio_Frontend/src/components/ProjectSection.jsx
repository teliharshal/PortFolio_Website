import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Flipkart Clone",
    description:
      "A MERN stack e-commerce app with product filtering, cart, checkout, admin dashboard, and user roles.",
    detailed:
      "Features include authentication, product CRUD, secure admin panel, wishlist, cart logic, and order tracking. Payment gateway integration in progress.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "/images/flipkart.png",
    liveLink: "#",
    github: "https://github.com/teliharshal/flipkart-clone",
  },
  {
    title: "Employee Management System",
    description:
      "A real estate web platform that converts 2D layouts into immersive 3D scenes using Three.js.",
    detailed:
      "Built with Three.js and React, this app lets users view 2D property layouts as fully navigable 3D spaces. Includes camera controls, light mapping, and mobile-friendly views.",
    tech: ["React", "Tailwind", "Spring Boot", "SQL"],
    image: "/images/Employee.png",
    liveLink: "#",
    github: "https://github.com/teliharshal/propsphere",
  },
  {
    title: "Joblisting Website",
    description:
      "Modern job platform with scroll snapping, AOS animations, and interactive 3D hero.",
    detailed:
      "Used fullPage.js for snapping, framer-motion for animations, and Three.js for hero visuals. Optimized for performance and accessibility.",
    tech: ["React", "Tailwind", "Spring Boot", "SQL"],
    image: "/images/Joblisting_Website.png",
    github: "https://github.com/teliharshal/creative-portfolio",
  },
  {
    title: "Creative Portfolio",
    description:
      "Developer portfolio with smooth scroll animations and creative 3D effects.",
    detailed:
      "Portfolio with fullPage.js, framer-motion transitions, and an interactive Three.js hero background. Mobile and performance optimized.",
    tech: ["React", "Tailwind", "Spring Boot", "SQL"],
    image: "/images/Portfolio.png",
    github: "https://github.com/teliharshal/creative-portfolio",
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-slate-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl border border-transparent hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3 text-sm">{project.description}</p>
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
              <div className="flex justify-between items-center text-sm mt-auto">

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white max-w-2xl w-full rounded-lg p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
              >
                ×
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 mb-4">{selectedProject.detailed}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4 text-sm">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
