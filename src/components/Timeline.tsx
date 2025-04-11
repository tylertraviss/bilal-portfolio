
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: "education" | "experience" | "award";
  highlights?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Master of Science in Mathematics",
    organization: "University of Toronto",
    location: "Toronto, ON",
    period: "2024 - Present",
    description: "Currently pursuing graduate studies in Mathematics.",
    type: "education",
    highlights: ["Mathematics", "Research", "Graduate Studies"]
  },
  {
    id: 2,
    title: "Bachelor of Science in Mathematics",
    organization: "University of New Brunswick",
    location: "Fredericton, NB",
    period: "2020 - 2024",
    description: "First Class Honours with a cumulative GPA of 4.3/4.3",
    type: "education",
    highlights: ["Mathematics", "First Class Honours", "Research"]
  },
  {
    id: 3,
    title: "Scientific Machine Learning for Weather Prediction",
    organization: "UNB, ECCC, Nvidia Corp.",
    location: "Fredericton, NB",
    period: "May 2024 - Aug. 2024",
    description: "Research on weather prediction using Nvidia's CorrDiff model in collaboration with Environment and Climate Change Canada.",
    type: "experience",
    highlights: ["Machine Learning", "Weather Prediction", "Research"]
  },
  {
    id: 4,
    title: "Teaching Assistant - Introduction to Numerical Methods",
    organization: "University of New Brunswick",
    location: "Fredericton, NB",
    period: "Sept. 2023 - Dec. 2023",
    description: "Assisted in teaching MATH3413: Introduction to Numerical Methods",
    type: "experience",
    highlights: ["Teaching", "Numerical Methods", "Mathematics"]
  },
  {
    id: 5,
    title: "NSERC Undergraduate Student Research Award",
    organization: "Natural Sciences and Engineering Research Council of Canada (NSERC)",
    location: "Canada",
    period: "2022, 2023, 2024",
    description: "Received prestigious research funding for undergraduate research excellence",
    type: "award",
    highlights: ["Research Funding", "Academic Excellence", "National Recognition"]
  },
  {
    id: 6,
    title: "Lieutenant Governor of NB Silver Medal - Science",
    organization: "University of New Brunswick",
    location: "Fredericton, NB",
    period: "2023-24",
    description: "Awarded to the most outstanding graduating student in the Faculty of Science",
    type: "award",
    highlights: ["Academic Excellence", "Leadership", "Science"]
  }
];

const Timeline = () => {
  return (
    <section id="education" className="bg-academic-light/30 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Education, Experience & Awards</h2>
          <p className="section-subtitle">
            Academic background, research experience, and recognition
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
                        ) : item.type === "award" ? (
                          <Award className="h-5 w-5 text-academic mr-2" />
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
                        ) : item.type === "award" ? (
                          <Award className="h-4 w-4 mr-2" />
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
