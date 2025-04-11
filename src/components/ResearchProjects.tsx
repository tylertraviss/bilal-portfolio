
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
  organization: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Scientific Machine Learning for Weather Prediction",
    description: "Ran simulations using Nvidia's CorrDiff model, applying generative downscaling to convert global forecast data into high-resolution weather predictions for various weather variables during a typhoon event in Taiwan.",
    tags: ["Machine Learning", "Weather Prediction", "Generative Models"],
    date: "May 2024 - Aug. 2024",
    organization: "UNB, ECCC, Nvidia Corp."
  },
  {
    id: 2,
    title: "Estimating Hand Kinematics from Neural Signals",
    description: "Performed electromyogram (EMG) signal processing and feature extraction to continuously estimate hand joint kinematics from forearm EMG signals, with a focus on comparing Kalman filter performance using various preprocessing methods.",
    tags: ["Signal Processing", "Biomedical Engineering", "Kalman Filtering"],
    date: "May 2023 - Dec. 2023",
    organization: "UNB Institute of Biomedical Engineering"
  },
  {
    id: 3,
    title: "Wave Propagation on Black Holes",
    description: "Reproduced known results for wave propagation on Schwarzschild spacetime and implemented various numerical methods for solving wave propagation PDEs in Julia, generalizing to dynamical, non-singular black hole spacetimes.",
    tags: ["Computational Physics", "PDEs", "Julia"],
    date: "May 2023 - Aug. 2023",
    organization: "University of New Brunswick"
  },
  {
    id: 4,
    title: "Mathematical Disease Spread Analysis",
    description: "Developed network models from agent-based disease propagation simulations and applied maximum likelihood parameter estimation to fit ODE disease models to empirical data, using Bayesian MCMC methods for parameter estimation.",
    tags: ["Mathematical Modeling", "Network Analysis", "Bayesian Statistics"],
    date: "May 2022 - Aug. 2022",
    organization: "University of New Brunswick, Black Arcs Inc."
  }
];

const ResearchProjects = () => {
  return (
    <section id="research" className="bg-academic-light/30 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Research Projects</h2>
          <p className="section-subtitle">
            Exploring complex problems at the intersection of mathematics, computational modeling, and data analysis
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-academic">{project.title}</CardTitle>
                <CardDescription>{project.date} | {project.organization}</CardDescription>
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
