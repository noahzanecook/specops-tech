
import { Play, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const screenshots = [
    {
      title: "AR Object Manipulation",
      description: "Users can place and manipulate virtual objects in real space.",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=600&auto=format"
    },
    {
      title: "Environmental Mapping",
      description: "The app creates detailed maps of physical spaces for precise object placement.",
      image: "https://images.unsplash.com/photo-1626446634084-9ab7bf259e06?q=80&w=600&auto=format"
    },
    {
      title: "Collaborative Experience",
      description: "Multiple users can interact with the same AR elements in real-time.",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2417d65?q=80&w=600&auto=format"
    },
    {
      title: "placeholder",
      description: "blabhabl",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2417d65?q=80&w=600&auto=format"
    },
    {
      title: "placeholder",
      description: "blabhabl",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2417d65?q=80&w=600&auto=format"
    },
    {
      title: "placeholder",
      description: "blabhabl",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2417d65?q=80&w=600&auto=format"
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
            Experience the power and versatility of our AR platform through these demos and examples.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
          
          <div className="aspect-video rounded-lg overflow-hidden bg-card relative">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 flex items-center justify-center">
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-md text-sm flex items-center">
              <Play className="h-4 w-4 mr-2" />
              Official Demo Reel
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button className="gap-2" >
            <a 
            href="https://github.com" 
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
        
        <h3 className="text-2xl font-bold mb-8 text-center">Screenshots & Use Cases</h3>
        
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
