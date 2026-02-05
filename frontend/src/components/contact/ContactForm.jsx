import "./Contact.css";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
