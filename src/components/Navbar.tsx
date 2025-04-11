
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Shubham Singh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link to="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            
            <div className="flex items-center gap-2 ml-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:contact@shubhamsingh.dev" aria-label="Email">
                  <Mail size={18} />
                </a>
              </Button>
            </div>
            
            <Button className="ml-2 flex items-center gap-2" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background absolute top-16 left-0 right-0 shadow-md animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/#about" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>About</Link>
              <Link to="/#experience" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Experience</Link>
              <Link to="/#projects" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Projects</Link>
              <Link to="/#skills" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Skills</Link>
              <Link to="/#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Contact</Link>
              
              <div className="flex items-center gap-2 py-2">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://linkedin.com/in/shubhamcr10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="mailto:contact@shubhamsingh.dev" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </Button>
              </div>
              
              <Button className="w-full flex items-center justify-center gap-2" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
