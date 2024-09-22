import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-darkGray text-darkText shadow-lg p-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/me/MySelf.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#about" className="hover:text-blue-500 text-white">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 text-white">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <HiX className="w-8 h-8 text-white" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center mt-4 space-y-4 md:hidden bg-slate-900"
        >
          <li><a href="#about" className="hover:text-blue-500 text-white" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 text-white" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 text-white" onClick={toggleMenu}>Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
