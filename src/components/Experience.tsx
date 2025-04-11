
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12 space-y-8">
          {/* TSYS */}
          <div className="timeline-item animate-fade-in">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-lg font-medium text-primary">TSYS | Global Payments</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>May 2024 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Noida, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p>
                  As a Software Engineer at TSYS India, part of Global Payments, I contribute to the development and optimization of secure and scalable payment processing solutions. My work involves integrating innovative functionalities, such as MoneySend for MasterCard and UPI transactions for RuPay cards, to enhance digital payment systems.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Payment Solution Development: Developing and deploying features using C++, Pro*C, and database technologies to improve payment efficiency and expand digital payment functionality.</li>
                    <li>Collaboration and Agile Practices: Working with cross-functional teams in agile development settings to ensure timely delivery of high-quality software solutions.</li>
                    <li>System Design and Architecture: Participating in system design discussions to ensure the scalability, reliability, and security of payment processing systems.</li>
                    <li>Security and Compliance: Implementing robust security measures and ensuring adherence to industry standards to maintain compliance and data integrity.</li>
                    <li>Continuous Improvement: Staying at the forefront of industry advancements and contributing to the evolution of systems to meet emerging market needs.</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Payment Processing</Badge>
                  <Badge variant="secondary">Database Technologies</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">Financial Security</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Jangoo Technology */}
          <div className="timeline-item animate-fade-in">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-lg font-medium text-primary">Jangoo Technology</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>Sep 2022 - Apr 2024 · 1 yr 8 mos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Gurugram, Haryana, India</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p>
                  As a Software Engineer at Jangoo Technologies Pvt Ltd, I was involved in developing cutting-edge technology solutions.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Collaborated with Swift Navigation on the Starling Core project, a GNSS-based precise positioning ecosystem for autonomous applications, contributing to cutting-edge technology solutions.</li>
                    <li>Developed an Advanced Driver Assistance System (ADAS) that detects the hitchball and enables automatic connection.</li>
                    <li>Independently developed a Dynamic Profiling application in Qt using C++, which utilizes Qt Signal Handling for controlling the profiling dynamically from external sources.</li>
                    <li>Collaborated with cross-functional teams to optimize software development, introducing best practices like code reviews and standards.</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Qt</Badge>
                  <Badge variant="secondary">GNSS</Badge>
                  <Badge variant="secondary">Signal Handling</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Conan</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* INMAS, DRDO */}
          <div className="timeline-item animate-fade-in">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                  <p className="text-lg font-medium text-primary">INMAS, Defence Research and Development Organization (DRDO)</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>Jun 2020 - Sep 2020 · 4 mos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>New Delhi, Delhi, India</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p>
                  Integrated PyTorch-based OCR technology, enabling seamless conversion of documents into editable and searchable data.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">OCR</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Document Processing</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
