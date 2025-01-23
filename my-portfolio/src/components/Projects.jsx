import ProjectCard from './ProjectCard';

const Projects = ({ onProjectClick }) => {
  const featuredProject = {
    href: "https://kiwiquan.github.io/E-commerce-store-Marksburg/",
    image: "thumbnails/marksburg.png",
    title: "E-commerce Store - Marksburg",
    description: "A fully functional mockup e-commerce store built with React, featuring product listings, shopping cart, and checkout functionality. This project showcases my ability to create complex, interactive web applications. You can't buy anything for it is simply a mockup and there is no backend, but it's a good example of my skills.",
    isExternal: true
  };

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
    <div className="projects-container">
      {/* Featured Project Section */}
      <section className="featured-project">
        <h2 className="featured-project__title">Featured Project</h2>
        <ProjectCard 
          key={featuredProject.href}
          {...featuredProject}
          onProjectClick={undefined}
          isFeatured={true}
        />
      </section>

      {/* Other Projects Section */}
      <section className="other-projects">
        <h2 className="other-projects__title">Other Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.href}
              {...project}
              onProjectClick={project.isExternal ? undefined : onProjectClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects; 