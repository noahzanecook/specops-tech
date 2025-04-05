
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/20 animate-float blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-60 h-60 rounded-full bg-accent/20 animate-float blur-3xl animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-500/20 animate-float blur-3xl animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-8 overflow-visible">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></span>
                Immerse GT 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold py-3 line">
                <span className="block text-glow line">Multiplayer AR</span>
                <span className="gradient-text block line leading-normal">With Spec Ops</span>
              </h1>
              <p className="mt-8 text-xl text-foreground/80 max-w-lg overflow-visible">
                Turn the Real World into Your Laser Tag Arena.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => window.location.href = "#demo"}>
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "#project"}>
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-foreground/60">
            <a
    href="#team"
    className="flex items-center -space-x-2 mr-3 hover:underline"
  >
            <div className="flex -space-x-2 mr-3">
              {["https://media.licdn.com/dms/image/v2/D4E03AQHZraDe1LxFwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690380739485?e=1749081600&v=beta&t=AW7zat6yeVChDDOJNA7ReGU_TffdhPCdTfNjXyuxlS0",
              "https://media.licdn.com/dms/image/v2/D4E03AQFgndCG2WEIzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732853513955?e=1749081600&v=beta&t=fzWpxz8H6_9NbKsrB-1gzvacMlPZxXnA4HTU12fK_zY",
              "https://media.licdn.com/dms/image/v2/D4E03AQGTBmOrKCemag/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671591181298?e=1749081600&v=beta&t=oA2paW_DUVSVQBkP5nV9RsBhdCajT68CYMhckty92s4",
              "https://media.licdn.com/dms/image/v2/D4E03AQGeDZbg-dbdzg/profile-displayphoto-shrink_800_800/B4EZXze.29HMAc-/0/1743546740468?e=1749081600&v=beta&t=A5wEISWbqqcC03jh0CL84H09lSTwMRcVEwkgczWyoXY"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Team member ${i + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              ))}
            </div>
              <span>Built in 36 hours by the Spec Ops Team</span>
              </a>
            </div>
          </div>
          
          <div className="relative glass-card p-4 rounded-xl aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl -z-10"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* This would ideally be an AR demo or video */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/30 animate-pulse flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/40 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary/50 animate-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-md text-sm">
                AR Experience Demo
              </div>
            </div>
            
            {/* AR element decorations */}
            <div className="absolute top-8 right-8 w-16 h-16 border border-accent/50 rounded flex items-center justify-center animate-rotate-slow">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="absolute bottom-12 left-8 w-8 h-8 border border-primary/50 rounded-lg animate-float"></div>
            <div className="absolute top-1/2 left-12 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
