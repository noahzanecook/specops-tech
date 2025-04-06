
import { Users, Trees, Hand, Trophy } from "lucide-react";
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
                <div className="text-6xl text-glow gradient-text font-bold leading-normal">Spec Ops</div>
              </div>
            </div>
            
            
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">A New Shared AR Experience</h3>
            <p className="text-foreground/80">
              Spec Ops is a multiplayer AR laser tag experience that uses the augmented reality capabilities of the Snapchat Spectacles. Players can play around their environment, making each location unique.
            </p>
            <p className="text-foreground/80">
              We used Spectacles Sync Kit to create an experience where players can interact with each other in AR.
            </p>
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Multiplayer</h4>
                  <p className="text-sm text-foreground/70">Interact with other users</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-accent/20 text-accent">
                  <Trees className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Environment Mapping</h4>
                  <p className="text-sm text-foreground/70">Tactically use your environment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Hand className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Hand Tracking</h4>
                  <p className="text-sm text-foreground/70">Use your hand to aim and shoot</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-md bg-purple-500/20 text-purple-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Play to win</h4>
                  <p className="text-sm text-foreground/70">Compete aginst your friends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
