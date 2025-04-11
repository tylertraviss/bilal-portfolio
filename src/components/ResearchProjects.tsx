
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Computing Applications in Machine Learning",
    description: "Exploring how quantum algorithms can enhance neural network training and performance on complex datasets.",
    tags: ["Quantum Computing", "Machine Learning", "Neural Networks"],
    date: "2022 - Present"
  },
  {
    id: 2,
    title: "Computational Models for Climate Data Analysis",
    description: "Developing advanced statistical models to analyze and predict climate patterns using satellite imagery.",
    tags: ["Climate Science", "Data Analysis", "Statistics"],
    date: "2020 - 2022"
  },
  {
    id: 3,
    title: "Optimization Algorithms for Large-Scale Systems",
    description: "Creating novel optimization approaches for solving complex systems with millions of variables and constraints.",
    tags: ["Optimization", "Algorithms", "Systems Engineering"],
    date: "2019 - 2021"
  },
  {
    id: 4,
    title: "Ethical Implications of AI in Research Contexts",
    description: "Studying the ethical considerations and implications of deploying AI systems in sensitive research domains.",
    tags: ["AI Ethics", "Research Methods", "Policy"],
    date: "2018 - 2020"
  }
];

const ResearchProjects = () => {
  return (
    <section id="research" className="bg-academic-light/30 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Research Projects</h2>
          <p className="section-subtitle">
            Exploring cutting-edge problems at the intersection of computer science, physics, and data analysis
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-academic">{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-academic/5 text-academic">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-academic hover:text-academic-accent flex items-center text-sm font-medium">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Read more
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;
