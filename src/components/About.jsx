import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="min-h-screen flex flex-col justify-between p-8 bg-darkBg">
    {/* Heading at the top */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-darkText"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
    </motion.div>

    {/* Content in the center (text and image) */}
    <div className="flex flex-col md:flex-row justify-center items-center flex-grow">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 max-w-xl flex flex-col justify-center items-center md:items-start text-center md:text-left text-darkText"
      >
        <p className="text-lg mb-6">
          I’m a passionate web developer with a BSc in Information Technology from Mumbai University (CGPA 9.3). I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap, with growing expertise in React. My projects include a React-based Todo List and a Country Finder app. I'm proficient in MySQL, SQL Server, and MongoDB, and use modern tools like Git, Vercel, and Tailwind CSS to streamline development.
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
