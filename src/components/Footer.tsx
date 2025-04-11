
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dr. Alex Morgan</h3>
            <p className="text-sm text-muted-foreground">
              Computational Research Scientist focused on quantum computing and machine learning applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-academic">Home</a>
              </li>
              <li>
                <a href="#research" className="text-muted-foreground hover:text-academic">Research</a>
              </li>
              <li>
                <a href="#publications" className="text-muted-foreground hover:text-academic">Publications</a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-academic">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-academic">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-academic">Research Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-academic">Download CV</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-academic">Conference Talks</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-academic">Teaching Materials</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-academic">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-academic">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-academic">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-academic">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Department of Computer Science,<br />
              Stanford University,<br />
              California, USA
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Dr. Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
