import "./AboutDetails.css";

export default function AboutDetails() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* Education */}
        <div className="about-card">
          <h3>Educational Background</h3>

          <div className="about-item">
            <span className="icon">🎓</span>
            <div>
              <strong>B.Tech – Information Technology</strong>
              <p>Mohamed Sathak A J College of Engineering</p>
              <p className="highlight">CGPA: 7.51 (2022 – 2026)</p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">🏫</span>
            <div>
              <strong>HSC – 72%</strong>
              <p>Govt Boys Hr Sec School, Chromepet</p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">🏫</span>
            <div>
              <strong>SSLC – 75%</strong>
              <p>Govt Boys Hr Sec School, Chromepet</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="about-card">
          <h3>Achievements & Experience</h3>

          <div className="about-item">
            <span className="icon">🏆</span>
            <div>
              <strong>2nd Prize – Code Debugging</strong>
              <p>Python | College Level Competition</p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">💼</span>
            <div>
              <strong>Internship – Lenovo</strong>
              <p>Testing Intern (May 2023)</p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">🏢</span>
            <div>
              <strong>Internship – NSIC</strong>
              <p>Business & Industry Exposure (Feb 2025)</p>
            </div>
          </div>

          <div className="about-item">
            <span className="icon">🏐</span>
            <div>
              <strong>Volleyball – Zonal Winner</strong>
              <p>Sports Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
