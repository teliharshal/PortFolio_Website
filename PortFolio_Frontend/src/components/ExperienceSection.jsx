// src/components/ExperienceSection.jsx
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Numetry Technologies",
    role: "Software Developer Intern",
    duration: "Jan 2025 – Jun 2025",
    location: "Pune, Maharashtra",
    points: [
      "Developed full-stack e-commerce platform using React.js, Node.js, Express.js, MongoDB, improving engagement by 30%",
      "Implemented JWT authentication and cart functionality, reducing checkout time by 25%",
      "Integrated RESTful APIs with frontend components to display real-time data",
      "Maintained version control and collaborated using Git and GitHub in a team environment."
    ],
  },
  {
    company: "NetLeap IT Training",
    role: "Full-stack Intern",
    duration: "Dec 2023 – Jan 2024",
    location: "Nashik, Maharashtra",
    points: [
      "Developed and deployed responsive landing pages and product detail components using HTML, CSS, and JavaScript.",
      "Collaborated in team of 5 to develop responsive web app",
      "Reduced API bugs by 20% via input validation and error handling",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-4 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto text-center relative z-10 mb-10">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl p-8 text-left border border-transparent hover:border-sky-400 shadow-md hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-1">
                {exp.role}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 italic mb-3">
                <span>{exp.company}</span>
                <span className="text-gray-400">|</span>
                <span>{exp.duration}</span>
                <span className="text-gray-400">|</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
