import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => (
   <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-black px-6 text-white">
    {/* Profile Image */}
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="overflow-hidden shadow-lg mb-6"
    >
        <img
            src="/me/MySelf.png"
            alt="Manish Sahu"
            className="w-48 h-48 object-cover"
        />
    </motion.div>

    {/* Intro Text */}
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-center"
    >
        Hi, my name is <span className="text-blue-500">Manish</span>
    </motion.h1>

    <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="text-xl mt-2 text-gray-300 text-center"
    >
        I'm a{" "}
        <span className="text-blue-400 font-semibold">
            <Typewriter
                words={["Programmer", "Web Developer", "Web Designer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </span>
    </motion.p>

    {/* Social Icons */}
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="flex space-x-6 mt-8"
    >
        <a href="https://github.com/Manishsahu116" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-8 h-8 hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/manish-sahu-933013220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 hover:text-blue-500 transition duration-300" />
        </a>
        <a href="mailto:sahumanish2969@gmail.com">
            <FaEnvelope className="w-8 h-8 hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://drive.google.com/file/d/1fadDXcrOqIMujEVl7oEEg0pOgqbZcSD_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FaFileDownload className="w-8 h-8 hover:text-blue-500 transition duration-300" />
        </a>
    </motion.div>
</div>

);

export default Hero;
