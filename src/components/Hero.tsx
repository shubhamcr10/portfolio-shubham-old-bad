
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
            <img 
              src="public/lovable-uploads/d1e21bf8-0881-469d-838b-de4b2b96fbab.png" 
              alt="Shubham Singh" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Shubham Singh
          </h1>
          
          <div className="mb-6 text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary font-semibold">Software Engineer</span> specializing in C++ and Embedded Systems
          </div>
          
          <p className="max-w-2xl text-lg mb-8">
            Currently building secure payment solutions at TSYS | Global Payments.
            Passionate about developing cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button size="lg" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mb-12">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com/in/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="mailto:contact@shubhamsingh.dev" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-primary" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
