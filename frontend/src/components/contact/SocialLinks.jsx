import socialLinks from "../../data/socialLinks";
import "./Contact.css";

export default function SocialLinks() {
  return (
    <section className="social-section">
      <h3>Connect With Me</h3>

      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
