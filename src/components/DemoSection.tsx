
import { Play, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const screenshots = [
    {
      title: "Environmental Mapping",
      description: "The app creates a 3D map of the environment, allowing for play around real-world objects.",
      image: "/assets/balls.gif"
    },
    {
      title: "Aiming with AR",
      description: "Intuitive aiming system that allows users to shoot at targets in AR using jsut their hand.",
      image: "/assets/shootingcyl.gif"
    },
    {
      title: "Collaborative Experience",
      description: "Seamlessly play with friends in a shared AR space, enhancing the fun and excitement.",
      image: "/assets/shootingaroundwall.gif"
    }
  ];

  return (
    <section id="demo" className="py-20 relative bg-muted">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-primary/20 animate-float blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-accent/20 animate-float blur-3xl animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">See Spec Ops in Action</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Learn more about our project through our demo reel and examples.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
          
          <div className="aspect-video rounded-lg overflow-hidden bg-card relative">
            {/* Embedded YouTube video */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/2iftoQBStko"
              title="Official Demo Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button className="gap-2" >
            <a 
            href="https://github.com/ColeKaplan/LaserSpectacle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
          >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            </Button>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-center">Functionality Examples</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <div 
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-foreground/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}
