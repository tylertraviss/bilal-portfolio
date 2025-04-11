
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
    title: "Pandemic modelling for regions implementing an elimination strategy",
    authors: "A. Hurford, M.M. Martignoni, Bilal Saleh Husain, J.C. Loredo-Osti, Francis Anokye, Julien Arino, Brian Gaas, James Watmough",
    journal: "Journal of Theoretical Biology",
    year: 2022,
    doi: "https://doi.org/10.1016/j.jtbi.2022.111378",
    abstract: "A comprehensive study of pandemic modelling focused on regions implementing an elimination strategy, providing insights into effective containment measures and their impact on disease spread dynamics."
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Academic Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed research publications in academic journals and conferences
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
