
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">C++</Badge>
                <Badge className="skill-badge">C</Badge>
                <Badge className="skill-badge">Python</Badge>
                <Badge className="skill-badge">JavaScript</Badge>
                <Badge className="skill-badge">SQL</Badge>
                <Badge className="skill-badge">TypeScript</Badge>
                <Badge className="skill-badge">Shell Scripting</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Frameworks & Libraries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">Qt</Badge>
                <Badge className="skill-badge">React</Badge>
                <Badge className="skill-badge">PyTorch</Badge>
                <Badge className="skill-badge">CMake</Badge>
                <Badge className="skill-badge">Boost</Badge>
                <Badge className="skill-badge">STL</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">Git</Badge>
                <Badge className="skill-badge">Docker</Badge>
                <Badge className="skill-badge">CI/CD</Badge>
                <Badge className="skill-badge">Visual Studio Code</Badge>
                <Badge className="skill-badge">Visual Studio</Badge>
                <Badge className="skill-badge">Linux</Badge>
                <Badge className="skill-badge">Windows</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Embedded Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">Embedded C/C++</Badge>
                <Badge className="skill-badge">Arduino</Badge>
                <Badge className="skill-badge">STM32</Badge>
                <Badge className="skill-badge">RTOS</Badge>
                <Badge className="skill-badge">Motor Control</Badge>
                <Badge className="skill-badge">Sensor Integration</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Navigation & GNSS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">GNSS</Badge>
                <Badge className="skill-badge">GPS</Badge>
                <Badge className="skill-badge">Precise Positioning</Badge>
                <Badge className="skill-badge">Sensor Fusion</Badge>
                <Badge className="skill-badge">Signal Processing</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="skill-badge">Agile</Badge>
                <Badge className="skill-badge">Scrum</Badge>
                <Badge className="skill-badge">Code Reviews</Badge>
                <Badge className="skill-badge">System Design</Badge>
                <Badge className="skill-badge">OOP</Badge>
                <Badge className="skill-badge">Design Patterns</Badge>
                <Badge className="skill-badge">Test-Driven Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
