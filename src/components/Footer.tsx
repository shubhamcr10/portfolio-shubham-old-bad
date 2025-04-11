
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Shubham Singh</h3>
            <p className="text-muted-foreground">Software Engineer specializing in C++ and embedded systems</p>
          </div>
          
          <div className="flex items-center gap-4">
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
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Shubham Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
