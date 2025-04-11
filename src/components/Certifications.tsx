
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Licenses & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Deep Learning */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Deep Learning</h3>
                  <p className="text-sm text-primary">NPTEL</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Oct 2021
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
          
          {/* Google Analytics */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" 
                       alt="Google" 
                       className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Google Analytics Individual Qualification</h3>
                  <p className="text-sm text-primary">Google</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Oct 2021 • Expired Oct 2022
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
          
          {/* Accenture */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">&gt;</span>
                </div>
                <div>
                  <h3 className="font-bold">Accenture Nordic Developer Program</h3>
                  <p className="text-sm text-primary">Accenture</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Sep 2021
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
          
          {/* AWS Academy */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" 
                       alt="AWS" 
                       className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">AWS Academy Graduate - AWS Academy Cloud Foundations</h3>
                  <p className="text-sm text-primary">Amazon Web Services (AWS)</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Jul 2021
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
          
          {/* NVIDIA */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png" 
                       alt="NVIDIA" 
                       className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">NVIDIA DLI Certificate - Fundamentals of Deep Learning</h3>
                  <p className="text-sm text-primary">NVIDIA</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Jun 2021
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
          
          {/* Cisco */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" 
                       alt="Cisco" 
                       className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">CCNA: Introduction to Networks</h3>
                  <p className="text-sm text-primary">Cisco</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-2" />
              Issued Mar 2021
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                <span>View Credential</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
