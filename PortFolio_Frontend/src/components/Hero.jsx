import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

const Hero = () => {
 return ( <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-slate-900 overflow-hidden"
>
  {/* Background Canvas */}
  <div className="absolute inset-0 z-0">
    <HeroCanvas />
    <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-slate-100/20 to-slate-500/90 z-10" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center font-[Inter]">
    
    {/* Heading */}
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      Hii! <span className="text-teal-400">I'm Harshal Teli</span>
    </motion.h1>

    {/* Typing Effect */}
    <motion.div
      className="text-lg md:text-2xl mb-6 flex items-center gap-2 text-slate-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <span className="text-3xl text-white">I’m a</span>
      <span className="font-bold text-4xl text-cyan-400 drop-shadow-lg">
        <ReactTyped
          strings={[
            "Software Developer",
            "Engineer",
            "Full Stack Developer",
            "Problem Solver",
          ]}
          typeSpeed={60}
          backSpeed={30}
          backDelay={1500}
          loop
        />
      </span>
    </motion.div>

    {/* Description */}
    <motion.p
      className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      I'm a passionate full stack developer crafting impactful web applications using modern technologies like{" "}
      <span className=" font-medium">React</span> and{" "}
      <span className=" font-medium">Spring Boot</span>. Dive into my portfolio and witness the blend of creativity and clean code!
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      <a
        href="/Harshal_Teli_Resume.pdf"
        download
        className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
      >
        Download Resume
      </a>
    </motion.div>
  </div>
</section>

  );
};

export default Hero;

