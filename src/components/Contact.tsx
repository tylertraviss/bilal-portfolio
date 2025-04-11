
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AtSign, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title">Research Profiles</h2>
          <p className="section-subtitle">
            Connect with me through my academic and professional platforms
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-xl">
            <CardHeader>
              <CardTitle className="text-xl text-academic">Find Me Online</CardTitle>
              <CardDescription>
                Professional and academic profiles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center">
                  <AtSign className="mr-2 h-4 w-4" />
                  Google Scholar
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
