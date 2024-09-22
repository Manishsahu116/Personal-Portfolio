import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="min-h-screen flex flex-col justify-between p-8 bg-darkBg">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-darkText"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
    </motion.div>

    <div className="flex flex-col md:flex-row justify-center items-center flex-grow">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 max-w-xl flex flex-col justify-center items-center md:items-start text-center md:text-left text-darkText"
      >
        <p className="text-lg mb-6">
          I am a passionate web developer with a Bachelor’s degree in Information Technology from Mumbai University, 
          graduating with a CGPA of 9.3. My expertise lies in creating responsive, user-friendly websites using HTML, 
          CSS, JavaScript, and Bootstrap, with growing proficiency in React. I have experience building full-featured 
          web applications such as a React-based Todo List and a Country Finder app. I am skilled in databases like MySQL, 
          Microsoft SQL Server, and MongoDB, and enjoy leveraging modern tools like Git, Vercel, and Tailwind CSS to enhance 
          the development process.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center"
      >
        <img
          src="/me/character.png"
          alt="About Me"
          className="w-full max-w-xs rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </section>
);

export default About;
