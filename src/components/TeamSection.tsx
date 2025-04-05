
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeamSection() {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead AR Developer",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop",
      bio: "Specializes in spatial computing and AR interaction design with 5+ years of experience."
    },
    {
      name: "Mia Johnson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
      bio: "Creates intuitive AR interfaces that bridge the gap between digital and physical."
    },
    {
      name: "David Park",
      role: "3D Artist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
      bio: "Crafts detailed digital assets that enhance immersion in augmented experiences."
    },
    {
      name: "Sam Rivera",
      role: "ML Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
      bio: "Develops computer vision algorithms that power ARcade's object recognition capabilities."
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Meet Our Team</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            The creative minds behind ARcade, bringing diverse expertise in AR technology, design, and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-foreground/80">{member.role}</p>
                </div>
                
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <p className="text-white mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 text-foreground/80 max-w-2xl mx-auto">
            Our team combines expertise from top tech companies and research institutions, united by a passion for creating next-generation AR experiences.
          </p>
          <Button variant="outline" size="lg" className="group">
            Join Our Team
            <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
