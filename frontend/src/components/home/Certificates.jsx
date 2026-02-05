import "./Certificates.css";

export default function Certificates() {
  return (
    <section className="cert-section">
      <h2 className="section-title">Certificates</h2>

      <div className="cert-grid">
        <div className="cert-card">
          <span className="cert-icon">📊</span>
          <h3>Business Intelligence</h3>
          <p>IBM</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">🤖</span>
          <h3>Artificial Intelligence</h3>
          <p>Infosys Springboard</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">📈</span>
          <h3>MS Excel</h3>
          <p>Naan Mudhalvan</p>
        </div>

        <div className="cert-card">
          <span className="cert-icon">💼</span>
          <h3>Freelance & Business Tools</h3>
          <p>Practical Experience</p>
        </div>
      </div>
    </section>
  );
}
