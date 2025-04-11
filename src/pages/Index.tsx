
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Shubham Singh | Software Engineer</title>
        <meta name="description" content="Shubham Singh - Software Engineer specializing in C++ and embedded systems. Portfolio showcasing projects, skills, and experience." />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
