import ProjectCard from "./ProjectCard";

const Projects = ({ onProjectClick }) => {
  const featuredProject = {
    href: "https://thepixelpal.netlify.app/",
    image: "thumbnails/PixelPal.png",
    title: "PixelPal - Virtual Pet Simulator",
    description:
      "A fully functional virtual pet simulator built with the PERN stack (PostgreSQL, Express, React, Node.js), featuring a pet that you can feed, play with, and care for. This project was a team project and showcases my ability to create complex, interactive web applications. My job was to connect the frontend to the backend and add the functionality to the pet. I setup the authentication and built the UI. This project is not fully complete but the MVP is functional. I am still working on the project by myself to add more features and improve the UI.",
    isExternal: true,
  };

  const projects = [
    {
      href: "https://kiwiquan.github.io/E-commerce-store-Marksburg/",
      image: "thumbnails/marksburg.png",
      title: "Marksburg E-commerce Store",
      description:
        "A fully functional mockup e-commerce store built with React, featuring product listings, shopping cart, and checkout functionality. This project showcases my ability to create complex, interactive web applications. You can't buy anything for it is simply a mockup and there is no backend, but it's a good example of my skills.",
      isExternal: true,
    },
  ];

  return (
    <div className="projects-container">
      {/* Featured Project Section */}
      <section className="featured-project">
        <h2 className="featured-project__title">Featured Projects</h2>
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
