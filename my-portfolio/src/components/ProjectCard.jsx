import { Link } from 'react-router-dom';

const ProjectCard = ({ href, image, title, description, onProjectClick, isExternal, isFeatured }) => {
  const handleClick = () => {
    if (isExternal) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      onProjectClick(href);
    }
  };

  return (
    <div className={`project-card ${isFeatured ? 'project-card--featured' : ''}`} onClick={handleClick}>
      <div className="project-card__image-container">
        <img 
          src={image} 
          alt={title} 
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {isExternal && (
          <span className="project-card__external-link">
            Visit Site ↗
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 