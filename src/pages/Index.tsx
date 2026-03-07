import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import DataTools from "@/components/portfolio/DataTools";
import Workflow from "@/components/portfolio/Workflow";
import Education from "@/components/portfolio/Education";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <DataTools />
      <Workflow />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
