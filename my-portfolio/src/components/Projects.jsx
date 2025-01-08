import ProjectCard from './ProjectCard';

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      href: "snake-game",
      image: "thumbnails/snake.png",
      title: "Customizable snake game!",
      description: "A customizable snake game where you can adjust speed, grid size, and change the background color!"
    },
    {
      href: "loading-screen",
      image: "thumbnails/loader.png",
      title: "Just a loader animation",
      description: "An animated loading screen with smooth transitions and customizable colors"
    },
    {
      href: "calculator",
      image: "thumbnails/calculator.png",
      title: "Calculator",
      description: "A simple calculator with basic operations"
    }
  ];

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard 
          key={project.href}
          {...project}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  );
};

export default Projects; 