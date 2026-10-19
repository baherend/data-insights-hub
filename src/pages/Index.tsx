import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import DataTools from "@/components/portfolio/DataTools";
import Workflow from "@/components/portfolio/Workflow";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import DataBackground from "@/components/portfolio/DataBackground";

const Index = () => {
  return (
    <>
      <DataBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <DataTools />
        <Workflow />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;