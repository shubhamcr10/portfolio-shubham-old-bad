
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                First and foremost, I love writing code. Ever since writing my first program in C++ and manipulating it to produce a desired output, I have been obsessed with the idea of using software to solve practical problems. Software engineering is a never-ending puzzle that I am passionately engaged in solving.
              </p>
              <p>
                Ever since I was a little kid, software engineering has been my passion. As I went through the BASIC tutorial, it was almost magic, being able to get the computer to do whatever I wanted, just by typing in. I was insatiable, learning C++, tearing through YouTube videos I could find on anything remotely related to coding.
              </p>
              <p>
                This passion carried me through my education. Here there were more resources available to me than I ever could have imagined as a kid. I studied new languages, algorithms, compilers, all with pretty much the same fascination that drove me as a kid. And it was here that I learned truly how much there was yet to learn.
              </p>
              <p>
                So, now, in industry, this passion remains with me. There's certainly yet more to learn, yet more problems to solve, and yet more to build. And for this, I am very grateful.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Current Position</h4>
                    <p>Software Engineer at TSYS | Global Payments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p>B.Tech in Computer Science, Galgotias University (2018-2022)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Code className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Core Skills</h4>
                    <p>C++, Embedded Systems, GNSS, Qt, Signal Handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
