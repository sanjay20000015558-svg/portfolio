import Hero from "../components/home/Hero";

import SkillsPreview from "../components/home/SkillsPreview";
import AboutPreview from "../components/home/AboutPreview";
import AboutDetails from "../components/home/AboutDetails";
import Certificates from "../components/home/Certificates";

import ProjectList from "../components/projects/ProjectList";

import ContactForm from "../components/contact/ContactForm";
import SocialLinks from "../components/contact/SocialLinks";

export default function Home() {
  return (
    <main>

      {/* HOME / HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <SkillsPreview />
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutPreview />
        <AboutDetails />
        <Certificates />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <ProjectList />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactForm />
        <SocialLinks />
      </section>

    </main>
  );
}
