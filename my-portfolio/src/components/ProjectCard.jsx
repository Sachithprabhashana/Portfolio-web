const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "8px",
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div
        className="tags"
        style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}
      >
        {project.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              background: "#3b82f6",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
