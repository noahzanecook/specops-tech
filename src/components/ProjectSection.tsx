
import { Layers, Code, Eye, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectSection() {
  return (
    <section id="project" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our AR Laser Tag Project</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Built in 36 hours, Spec Ops transforms your everyday environment into a tactical battleground. With Snap Spectacles, you can aim, shoot, and score in real-time laser tag with your friends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {/* This would ideally be a project visualization or screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-glow gradient-text font-bold">Spec Ops</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded text-sm">
                AR Interface
              </div>
              <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded text-sm">
                Real-time Rendering
              </div>
            </div>
            
            
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Reinventing Interaction Through AR</h3>
            <p className="text-foreground/80">
              ldwaldwald wad kwakjd wajd waljhd kwjahdl wahdl whaljdh waljhd lwajhd lwahdl jwhaldj whaldj hwaljdh waljhd lwajhd ljwahdlj whaljd hwlajdh lwajdh
            </p>
            <p className="text-foreground/80">
              l awjdl waljdb waojdba wbdwab odubwaou dbowau dbowuabdo uwabdouwbaodu wbaoudbw oaudbowaubdouwa b
            </p>
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Motion Tracking</h4>
                  <p className="text-sm text-foreground/70">INput descritption</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-accent/20 text-accent">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Spatial Mapping</h4>
                  <p className="text-sm text-foreground/70">INput descritption</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Object Recognition</h4>
                  <p className="text-sm text-foreground/70">Players can hide behind walls</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-purple-500/20 text-purple-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Something</h4>
                  <p className="text-sm text-foreground/70">INput descritption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
