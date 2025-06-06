
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        

        <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
            <a href="https://github.com/noahzanecook/specops-tech">
            <Github className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </a>
            <p className="text-sm text-foreground/60">
              SpecOps.tech | ImmerseGT April 4-6, 2025
            </p>
          </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Home</a>
              <a href="#project" className="text-sm text-foreground/60 hover:text-primary transition-colors">Project</a>
              <a href="#features" className="text-sm text-foreground/60 hover:text-primary transition-colors">Features</a>
              <a href="#team" className="text-sm text-foreground/60 hover:text-primary transition-colors">Team</a>
              <a href="#demo" className="text-sm text-foreground/60 hover:text-primary transition-colors">Demo</a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}