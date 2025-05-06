
import { Button } from "@/components/ui/button";
import { BookOpen, Download, MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="gradient-text">Bilal Saleh Husain</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Mathematics Research Student
              </p>
            </div>
            <div className="max-w-[700px] text-muted-foreground md:text-xl">
              <p>
                Exploring the intersection of mathematics, machine learning, and computational modeling 
                to solve complex systems challenges. Currently pursuing a Master's in Mathematics at the University of Toronto.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Research Projects
              </Button>
              <Button variant="outline" className="inline-flex h-10 items-center justify-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="ghost" className="inline-flex h-10 items-center justify-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-opacity-10 border-academic w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <img 
                src="/lovable-uploads/82b86515-258e-460d-b300-78cdcdfa238e.png" 
                alt="Bilal Saleh Husain"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
