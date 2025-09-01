import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div className="section-divider" />
      <div id="skills">
        <Skills />
      </div>
      <div className="section-divider" />
      <div id="projects">
        <Projects />
      </div>
      <div className="section-divider" />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
