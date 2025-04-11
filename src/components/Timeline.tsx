
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: "education" | "experience";
  highlights?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Ph.D. in Computer Science",
    organization: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2019",
    description: "Dissertation on Quantum Computing Applications in Machine Learning. Received the Outstanding Dissertation Award.",
    type: "education",
    highlights: ["Quantum Computing", "Machine Learning", "Computational Theory"]
  },
  {
    id: 2,
    title: "Senior Research Scientist",
    organization: "Advanced Research Institute",
    location: "Palo Alto, CA",
    period: "2019 - Present",
    description: "Leading research initiatives on quantum algorithms and machine learning applications for complex systems.",
    type: "experience",
    highlights: ["Research Leadership", "Quantum Algorithms", "Publication"]
  },
  {
    id: 3,
    title: "M.S. in Computational Physics",
    organization: "MIT",
    location: "Cambridge, MA",
    period: "2013 - 2015",
    description: "Specialized in computational methods for quantum systems with a focus on simulation techniques.",
    type: "education",
    highlights: ["Quantum Systems", "Simulation", "Computational Methods"]
  },
  {
    id: 4,
    title: "Research Assistant",
    organization: "National Laboratory for Quantum Technologies",
    location: "Berkeley, CA",
    period: "2015 - 2019",
    description: "Contributed to research on quantum computing hardware and software interfaces during Ph.D. studies.",
    type: "experience",
    highlights: ["Hardware-Software Interface", "Quantum Computing", "Research"]
  },
  {
    id: 5,
    title: "B.S. in Physics",
    organization: "California Institute of Technology",
    location: "Pasadena, CA",
    period: "2009 - 2013",
    description: "Graduated with honors. Senior thesis on computational approaches to many-body quantum systems.",
    type: "education",
    highlights: ["Quantum Physics", "Computational Approaches", "Honors Graduate"]
  }
];

const Timeline = () => {
  return (
    <section id="education" className="bg-academic-light/30 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            Academic background and professional research experience
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-academic/20 -ml-0.5 md:ml-0" />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={item.id} className={cn(
                "relative flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 h-4 w-4 rounded-full bg-academic -ml-2 md:ml-0 md:-translate-x-1/2 mt-6" />
                
                {/* Content card */}
                <div className={cn(
                  "ml-12 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        {item.type === "education" ? (
                          <GraduationCap className="h-5 w-5 text-academic mr-2" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-academic mr-2" />
                        )}
                        <Badge variant="outline" className="bg-academic text-white">
                          {item.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-academic">{item.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        {item.type === "education" ? (
                          <BookOpen className="h-4 w-4 mr-2" />
                        ) : (
                          <Briefcase className="h-4 w-4 mr-2" />
                        )}
                        {item.organization}
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      {item.highlights && (
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary" className="bg-academic/10 text-academic">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
