
import { Github, Linkedin, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeamSection() {
  const team = [
    {
      name: "Andrew Levine",
      role: "GT Electrical Engineering '26",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHZraDe1LxFwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690380739485?e=1749081600&v=beta&t=AW7zat6yeVChDDOJNA7ReGU_TffdhPCdTfNjXyuxlS0",
      bio: "is a nerd",
      linkedin: "https://www.linkedin.com/in/andy-levine/",
      github: "https://github.com/the-faulty",
      link: "https://alevine.dev"
    },
    {
      name: "Cole Kaplan",
      role: "GT Computer Science '26",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFgndCG2WEIzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732853513955?e=1749081600&v=beta&t=fzWpxz8H6_9NbKsrB-1gzvacMlPZxXnA4HTU12fK_zY",
      bio: "made hit registration",
      linkedin: "https://www.linkedin.com/in/colekaplan/",
      github: "https://github.com/ColeKaplan",
      link: "https://colekaplan.dev/"
    },
    {
      name: "Jaden Hamer",
      role: "GT Computer Science '26",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGTBmOrKCemag/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671591181298?e=1749081600&v=beta&t=oA2paW_DUVSVQBkP5nV9RsBhdCajT68CYMhckty92s4",
      bio: "lazer maker",
      linkedin: "https://www.linkedin.com/in/jaden-hamer-b96226219/",
      github: "https://github.com/jhamer8",
      link: "https://jadenh.dev"
    },
    {
      name: "Noah Cook",
      role: "GT Computer Science '26",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGeDZbg-dbdzg/profile-displayphoto-shrink_800_800/B4EZXze.29HMAc-/0/1743546740468?e=1749081600&v=beta&t=A5wEISWbqqcC03jh0CL84H09lSTwMRcVEwkgczWyoXY",
      bio: "made website",
      linkedin: "https://www.linkedin.com/in/noahzanecook/",
      github: "https://github.com/noahzanecook",
      link: "https://noah.win"
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Meet the creative minds behind Spec Ops</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Hover over each team member to see their website, LinkedIn, and GitHub.         
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
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="rounded-full">
                          <Link className="h-5 w-5" />
                        </Button>
                      </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="rounded-full">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="rounded-full">
                          <Github className="h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
