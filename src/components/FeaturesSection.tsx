
import { Sparkles, Zap, Glasses, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Glasses className="h-10 w-10" />,
      title: "Cutting-edge Technology",
      description: "Utilizes the Snap Spectacles for an immersive AR experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Immersive AR Experience",
      description: "Blend digital objects with the real world in a way that feels natural and seamless.",
      color: "from-primary to-indigo-600"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Real-time AR Interaction",
      description: "Interact with digital objects using natural gestures with minimal latency.",
      color: "from-accent to-cyan-600"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Designed for Multiplayer",
      description: "Designed to bring friends together in a shared AR space, no matter the location.",
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
            Discover the unique features that enable Spec Ops
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
      </div>
    </section>
  );
}
