
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchProjects from "@/components/ResearchProjects";
import Publications from "@/components/Publications";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ResearchProjects />
        <Publications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
