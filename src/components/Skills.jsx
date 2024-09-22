import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '/icons/html-5-svgrepo-com.svg' },
  { name: 'CSS', icon: '/icons/css3-svgrepo-com.svg' },
  { name: 'Bootstrap', icon: '/icons/bootstrap-svgrepo-com.svg' },
  { name: 'React', icon: '/icons/react-javascript-js-framework-facebook-svgrepo-com.svg' },
  { name: 'JavaScript', icon: '/icons/javascript-svgrepo-com.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind-svgrepo-com.svg' },
  { name: 'MongoDB', icon: '/icons/mongo-svgrepo-com.svg' },
  { name: 'Node js', icon: '/icons/node-js-svgrepo-com.svg' },
  { name: 'Git', icon: '/icons/git-svgrepo-com.svg' },
  { name: 'GitHub', icon: '/icons/github-142-svgrepo-com.svg' },
  { name: 'Visual Studio', icon: '/icons/vs-code-svgrepo-com.svg' },
];

const Skills = () => (
  <section id="skills" className="min-h-screen p-8 bg-gradient-to-r from-gray-800 to-gray-900">
    <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className="w-20 h-20 mb-4" // Set a uniform size for all icons
          />
          <p className="text-white text-xl font-semibold">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
