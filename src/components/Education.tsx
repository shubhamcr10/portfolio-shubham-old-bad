
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12">
          <div className="timeline-item animate-fade-in">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src="public/lovable-uploads/5bed8207-85da-4210-be92-cd2d21a72aee.png"
                      alt="Galgotias University"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Galgotias University</h3>
                    <p className="text-lg font-medium text-primary">Bachelor of Technology - BTech, Computer Science</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2018 - 2022</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award size={16} className="text-primary" />
                  <span>Grade: 7.23</span>
                </div>
                
                <p>
                  Completed a Bachelor of Technology in Computer Science from Galgotias University, where I gained a strong foundation in computer science fundamentals, algorithms, data structures, and software development. The program provided me with both theoretical knowledge and practical skills that have been instrumental in my career as a software engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
