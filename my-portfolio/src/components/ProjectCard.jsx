import { Link } from 'react-router-dom';

const ProjectCard = ({ href, image, title, description, onProjectClick }) => {
  return (
    <div 
      className="project-card"
      onClick={() => onProjectClick(href)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onProjectClick(href);
        }
      }}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard; 