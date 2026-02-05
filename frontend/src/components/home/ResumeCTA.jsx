import "./ResumeCTA.css";
import Button from "../common/Button";

export default function ResumeCTA() {
  return (
    <section className="resume-cta">
      <div className="resume-content">
        <h2>Download My Resume</h2>
        <p>
          Interested in my profile? Download my resume to know more about my
          skills, education, and experience.
        </p>

        <Button href="/Sanjaykumar_resume.pdf" variant="primary">
          Download Resume
        </Button>
      </div>
    </section>
  );
}
