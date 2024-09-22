import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ToDo List',
    description: 'React JS, Tailwind CSS',
    githubLink: 'https://github.com/Manishsahu116/React-TodoList',
    liveLink: 'https://react-todo-list-chi-azure.vercel.app/',
    image: '/projects/todo.png'
  },
  {
    name: 'Cake Shop',
    description: 'HTML, CSS, JavaScript',
    githubLink: 'https://github.com/Manishsahu116/CakeShop',
    liveLink: 'https://cake-shop-coral.vercel.app/index.html',
    image: '/projects/Cake.png'
  },
  {
    name: 'Country Finder',
    description: 'React Vite, Tailwind CSS',
    githubLink: 'https://github.com/Manishsahu116/World-Search',
    liveLink: 'https://world-search-beta.vercel.app/',
    image: '/projects/country.png'
  },
  {
    name: 'Image Recognition',
    description: 'HTML, CSS, JavaScript',
    githubLink: 'https://github.com/Manishsahu116/Image-recognition-site',
    liveLink: 'https://image-recognition-site.vercel.app/',
    image: '/projects/image.png'
  },
  {
    name: 'Multi Step Form',
    description: 'HTML, CSS, JavaScript, Google Fonts',
    githubLink: 'https://github.com/Manishsahu116/Multistep-form',
    liveLink: 'https://multistep-form-gilt.vercel.app/',
    image: '/projects/multi-step form.png'
  },
  {
    name: 'Netflix Home',
    description: 'HTML, CSS, JavaScript, BootStrap',
    githubLink: 'https://github.com/Manishsahu116/netflix-ui',
    liveLink: 'https://netflix-ui-brown.vercel.app/',
    image: '/projects/netflix.png'
  },
];

const Projects = () => (
  <section id="projects" className="min-h-screen p-8 bg-gray-900">
    <h2 className="text-3xl font-bold text-center text-white mb-12">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold px-4 py-2 bg-gray-500 rounded-lg shadow-md hover:bg-blue-900 transition-colors duration-300"
              >
                View Project 
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold px-4 py-2 bg-gray-500 rounded-lg shadow-md hover:bg-red-400 transition-colors duration-300"
              >
                Visit Project 
              </a>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
          <p className="mb-4 text-gray-400">{project.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
