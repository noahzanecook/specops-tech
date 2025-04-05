
import { Sparkles, Zap, Shield, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Immersive AR Experience",
      description: "Blend digital objects with the real world in a way that feels natural and seamless.",
      color: "from-primary to-indigo-600"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Real-time Interaction",
      description: "Interact with digital objects using natural gestures with minimal latency.",
      color: "from-accent to-cyan-600"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Privacy-focused Design",
      description: "Built with privacy in mind, giving users full control over their data.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Cross-platform Support",
      description: "Works across iOS, Android, and modern AR headsets with a unified experience.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-muted">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/20 animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full bg-accent/20 animate-float blur-3xl animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Key Features</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Our AR solution comes packed with powerful features designed to create an unparalleled augmented reality experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 -z-10`}></div>
              <CardHeader>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} w-fit`}>
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <p className="text-foreground/80 mb-6">
                ARcade pushes the boundaries of what's possible with current AR technology, combining performance with usability.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tracking Accuracy</span>
                  <span className="text-sm font-medium">98%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-[98%] rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Render Quality</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-[92%] rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Battery Efficiency</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-[85%] rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Device Compatibility</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-[90%] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* 3D visualization placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-rotate-slow"></div>
                  <div className="absolute inset-2 rounded-full border border-accent/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  <div className="absolute inset-4 rounded-full border border-indigo-500/30 animate-rotate-slow" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
