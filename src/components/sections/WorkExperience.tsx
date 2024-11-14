import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    location: "San Francisco, CA",
    description: [
      "Led a team of 5 developers in building a modern SaaS platform using React and TypeScript",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Co.",
    period: "2019 - 2021",
    location: "New York, NY",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "JavaScript", "SCSS", "Redux"]
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2018 - 2019",
    location: "Boston, MA",
    description: [
      "Built and maintained multiple client websites using modern web technologies",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Worked directly with clients to gather requirements and provide technical solutions"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
  }
];

const WorkExperience = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      id="experience" 
      className="section-padding bg-muted/30"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto animate-on-scroll">
        <Badge className="mb-4">Experience</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:scale-105 transition-transform duration-300 animate-on-scroll"
              style={{ 
                animationDelay: `${(index + 1) * 200}ms`,
                transform: 'translateY(20px)',
                opacity: 0
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm text-primary">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;