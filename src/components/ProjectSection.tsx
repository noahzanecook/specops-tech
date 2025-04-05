
import { Layers, Code, Eye, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectSection() {
  return (
    <section id="project" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our AR Project</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            ARcade blends cutting-edge augmented reality with intuitive interactions to create immersive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {/* This would ideally be a project visualization or screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-glow gradient-text font-bold">ARcade</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded text-sm">
                AR Interface
              </div>
              <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded text-sm">
                Real-time Rendering
              </div>
            </div>
            
            {/* Interactive elements */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">Motion Tracking</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Spatial Mapping</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm font-medium">Object Recognition</span>
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Cloud Anchors</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Reinventing Interaction Through AR</h3>
            <p className="text-foreground/80">
              ARcade transforms how users interact with digital content by seamlessly blending it with the physical world. Our technology creates a new dimension of experience that's intuitive, engaging, and accessible.
            </p>
            <p className="text-foreground/80">
              Built for both entertainment and practical applications, ARcade pushes the boundaries of what's possible with AR technology today.
            </p>
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Multi-layered</h4>
                  <p className="text-sm text-foreground/70">Seamless interaction between virtual and physical</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-accent/20 text-accent">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Open Platform</h4>
                  <p className="text-sm text-foreground/70">Extensible API for developers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Precision Tracking</h4>
                  <p className="text-sm text-foreground/70">Millimeter-accurate spatial awareness</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-purple-500/20 text-purple-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Optimized Performance</h4>
                  <p className="text-sm text-foreground/70">Works on standard mobile devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
