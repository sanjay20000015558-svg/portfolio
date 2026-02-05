import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loginSuccess") === "true") {
      setShowSuccess(true);
      localStorage.removeItem("loginSuccess");

      setTimeout(() => setShowSuccess(false), 1000);
    }
  }, []);

  return (
    <section id="home" className="hero-section" style={{ position: "relative" }}>
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: "90px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(17, 24, 39, 0.85)",
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: "10px",
            fontWeight: "600",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            zIndex: 2000,
            pointerEvents: "none",
          }}
        >
          ✅ Login Successful
        </div>
      )}

      <div className="hero-inner">
        <h1 className="hero-name">Sanjay Kumar B</h1>
        <h2 className="hero-role">Web Developer</h2>

        <p className="hero-desc">
          Passionate about creating clean, modern, and user-friendly web
          applications.
          <br />
          I enjoy turning ideas into real-world digital solutions.
        </p>

        <a
          href="/Sanjaykumar_resume.pdf"
          download
          className="hero-resume-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
