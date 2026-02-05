import "./SkillsPreview.css";
import skillsData from "../../data/skillsData";

export default function SkillsPreview() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>

      <div className="skills-card">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
