
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, FileText, GraduationCap, Home, Menu, MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", icon: <Home className="h-4 w-4 mr-2" />, href: "#home" },
    { label: "Research", icon: <Book className="h-4 w-4 mr-2" />, href: "#research" },
    { label: "Publications", icon: <FileText className="h-4 w-4 mr-2" />, href: "#publications" },
    { label: "Education", icon: <GraduationCap className="h-4 w-4 mr-2" />, href: "#education" },
    { label: "Contact", icon: <MessageSquare className="h-4 w-4 mr-2" />, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-academic" />
          <span className="text-xl font-semibold">Research Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-academic"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-32 md:hidden bg-background border-t",
          isMenuOpen ? "animate-fade-in" : "hidden"
        )}
      >
        <div className="container grid gap-2 py-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center py-4 text-base font-medium border-b"
              onClick={toggleMenu}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
