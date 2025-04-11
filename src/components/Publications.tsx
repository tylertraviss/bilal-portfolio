
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  abstract: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Quantum-Enhanced Neural Networks for High-Dimensional Data Analysis",
    authors: "Morgan, A., Zhang, L., & Kumar, P.",
    journal: "Journal of Quantum Machine Learning",
    year: 2023,
    doi: "10.1038/s41567-018-0300-2",
    abstract: "This paper presents a novel approach to neural network training using quantum computing principles, showing a 30% improvement in performance for high-dimensional datasets."
  },
  {
    id: 2,
    title: "Statistical Analysis of Climate Data Using Advanced Regression Techniques",
    authors: "Lee, S., Morgan, A., & Robinson, T.",
    journal: "Environmental Data Science",
    year: 2022,
    doi: "10.1126/science.1259855",
    abstract: "A comprehensive analysis of global climate data using new regression models that account for temporal dependencies and spatial correlations."
  },
  {
    id: 3,
    title: "Optimization Methods for Large-Scale Systems Engineering Problems",
    authors: "Morgan, A., Patel, J., & Watson, H.",
    journal: "IEEE Transactions on Systems Science",
    year: 2021,
    doi: "10.1109/TPAMI.2019.2930620",
    abstract: "This research introduces a family of optimization algorithms specifically designed for systems with millions of variables, achieving convergence rates superior to existing methods."
  },
  {
    id: 4,
    title: "Ethical Frameworks for Research AI: A Systematic Review",
    authors: "Morgan, A. & Chen, Y.",
    journal: "AI Ethics Journal",
    year: 2020,
    doi: "10.1145/3306618.3314289",
    abstract: "A systematic review of ethical considerations when deploying artificial intelligence systems in research contexts, with recommendations for policy and practice."
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Academic Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed research publications in leading academic journals and conferences
          </p>
        </div>
        <div className="space-y-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-academic">{pub.title}</CardTitle>
                <CardDescription className="text-base">
                  {pub.authors} • {pub.journal} • {pub.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pub.abstract}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">DOI: {pub.doi}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Online
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
