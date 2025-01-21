import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-black p-6">
        {/* Image at the top */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center mb-8"
        >
            <img
                src="/me/MySelf.png" 
                alt="Manish Sahu"
                className="rounded-full w-64 h-64 object-cover filter brightness-65 contrast-100"
            />
        </motion.div>

        {/* Text content below */}
        <div className="text-center">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-3xl font-bold text-white"
            >  <div> Hi, My name is  <span className='text-blue-500'>Manish</span></div> and I'm a
                <Typewriter
                    words={[" Programmer", " Web Developer", " Web Designer"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </motion.h1>
            </div>

            <div className="flex space-x-6 mt-6">
                <a href="https://github.com/Manishsahu116" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white w-8 h-8 hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/manish-sahu-933013220/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white w-8 h-8 hover:text-blue-500" />
                </a>
                <a href="mailto:sahumanish2969@gmail.com">
                    <FaEnvelope className="text-white w-8 h-8 hover:text-blue-500" />
                </a>
                <a href="https://drive.google.com/file/d/1iqu3tzfug05LbQxjkW8SQzpA69fVUSb-/view?usp=sharing" download>
                    <FaFileDownload className="text-white w-8 h-8 hover:text-blue-500" />
                </a>
            </div>      
    </div>
);

export default Hero;
