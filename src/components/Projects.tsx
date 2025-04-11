
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Project 1 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Combat Display System</CardTitle>
              <CardDescription>Jan 2024 - Jan 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">The Combat Display System is a project designed as a clone of a naval display system. It provides a graphical interface for visualizing the movements of tracks captured by radar and sonar sensors, with data sent by simulators.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">Qt Signal Handling</Badge>
                <Badge variant="outline">CMake</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/Combat-Display-System" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 2 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Dynamic Profiling Application</CardTitle>
              <CardDescription>Jan 2023 - Jan 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Solely designed and developed a Dynamic Profiling application in Qt using C++. Employed Qt Signal Handling for dynamic profiling control from external sources.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Qt</Badge>
                <Badge variant="outline">Qt Signal Handling</Badge>
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">CMake</Badge>
                <Badge variant="outline">Visual Studio Code</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/DynamicProfiling" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 3 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Trailer Hitch Assist</CardTitle>
              <CardDescription>Jan 2023 - Jan 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Developed an Advanced Driver Assistance System (ADAS) that identifies the hitchball and enables automatic vehicle connection, showcasing expertise in computer vision and sensing technology.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">STM32</Badge>
                <Badge variant="outline">Motor Control</Badge>
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">Embedded Systems</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/Trailer-Hitch-Assist" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 4 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Starling Core</CardTitle>
              <CardDescription>Jan 2023 - Jan 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Collaborated on the Starling Core project for Swift Navigation, involving edge device processing of GNSS and sensor data with Skylark corrections, providing precise location to applications.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">GNSS</Badge>
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">CMake</Badge>
                <Badge variant="outline">AutoSAR</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">CI/CD</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/starling-core" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 5 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Arduino Based Biometric Fingerprint Attendance</CardTitle>
              <CardDescription>Apr 2021 - Dec 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Biometric attendance system using Arduino to capture and store attendance data and records with Cloud Database.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Arduino</Badge>
                <Badge variant="outline">Embedded Systems</Badge>
                <Badge variant="outline">Cloud Database</Badge>
                <Badge variant="outline">IoT</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/arduino-fingerprint-attendance" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 6 */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Easy OCR Integration</CardTitle>
              <CardDescription>Jun 2020 - Sep 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">A technology that allows you to convert various types of documents into editable and searchable data. OCR (Optical Character Recognition) is used using Python and the PyTesseract library.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">OCR</Badge>
                <Badge variant="outline">PyTesseract</Badge>
                <Badge variant="outline">Document Processing</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="https://github.com/shubhamcr10/easy-ocr-integration" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
