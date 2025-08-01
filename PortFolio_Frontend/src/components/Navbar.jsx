import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = ["Home","Skills", "Experience", "Projects", "Contact"];

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 60, damping: 12 }}
  className="fixed top-0 left-1 right-1 z-50 bg-white border-b border-gray-200 shadow-sm px-4 py-3"
>
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    {/* Logo */}
    <motion.h1 className="text-3xl font-bold text-black">
      <span className="font-serif text-4xl">H</span><span className="ml-1">arshal.</span>
    </motion.h1>

    {/* Navigation */}
    <nav className="hidden md:flex space-x-8 items-center">
      {navLinks.map((link, i) => (
        <motion.div
          key={link}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={link.toLowerCase()}
            smooth={true}
            duration={500}
            className="text-gray-600 font-medium tracking-wide cursor-pointer group hover:text-black"
          >
            {link}
          </Link>
        </motion.div>
      ))}
    </nav>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ rotate: 180 }}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 py-4 border-t border-gray-200 shadow-sm"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700 font-medium hover:text-blue-800"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
