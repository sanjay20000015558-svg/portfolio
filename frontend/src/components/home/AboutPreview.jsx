import "./About.css";

export default function AboutPreview() {
  return (
    <section className="services-section">
      <h2 className="section-title">Services I Offer</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon purple">{"</>"}</div>
          <h3>Web Design & Development</h3>
          <p>
            Modern, responsive websites that help your business grow online.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon green">📊</div>
          <h3>Data Entry Services</h3>
          <p>
            Accurate and efficient data entry using MS Excel and Google Sheets.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon orange">⚙️</div>
          <h3>Excel Sheet Automation</h3>
          <p>
            Automate Excel workflows to save time and increase productivity.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon pink">🤝</div>
          <h3>Freelance Projects</h3>
          <p>
            Available on Truelancer for web development and data projects.
          </p>
        </div>
      </div>
    </section>
  );
}
