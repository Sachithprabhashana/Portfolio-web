import ProjectCarousel from "./ProjectCarousel";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Render the clean, standalone image slider component */}
      <ProjectCarousel images={project.images} title={project.title} />

      {/* Card Content Descriptions */}
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
