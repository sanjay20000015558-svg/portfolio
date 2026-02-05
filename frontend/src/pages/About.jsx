import AboutPreview from "../components/home/AboutPreview";
import AboutDetails from "../components/home/AboutDetails";
import Certificates from "../components/home/Certificates";
import ResumeCTA from "../components/home/ResumeCTA";

export default function About() {
  return (
    <main>
      <AboutPreview />
      <AboutDetails />
      <Certificates />
      <ResumeCTA />
    </main>
  );
}
