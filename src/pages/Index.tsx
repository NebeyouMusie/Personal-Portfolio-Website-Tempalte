import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center section-padding relative">
        <Badge className="mb-4 animate-fade-in" variant="secondary">
          Available for hire
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Creative Developer &<br />Designer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-2xl animate-fade-in">
          I craft beautiful, responsive websites with modern technologies and a focus on user experience.
        </p>
        <div className="flex gap-4 mb-12 animate-fade-in">
          <Button asChild variant="default">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#projects" onClick={scrollToProjects}>
              View Work
            </a>
          </Button>
        </div>
        <div className="flex gap-4 animate-fade-in">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="glass group overflow-hidden">
                <div className="p-6">
                  <Badge className="mb-4" variant="secondary">Featured Project</Badge>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Project Title {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Button asChild size="lg">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;