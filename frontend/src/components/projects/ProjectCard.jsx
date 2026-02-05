import "./Projects.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <span className="project-icon">{"</>"}</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tech.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
