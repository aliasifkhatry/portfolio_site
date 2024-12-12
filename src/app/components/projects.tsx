import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the first project",
      technologies: ["React", "Tailwind", "TypeScript"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of the second project",
      technologies: ["Next.js", "Firebase", "Chakra UI"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Project 3",
      description: "A brief description of the third project",
      technologies: ["Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="font-bold">Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                GitHub
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;