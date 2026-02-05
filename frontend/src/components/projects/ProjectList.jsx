import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";
import "./Projects.css";

export default function ProjectList() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects Gallery</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
