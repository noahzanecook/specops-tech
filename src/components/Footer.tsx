
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-white">AR</span>
              </div>
              <span className="text-xl font-bold gradient-text">ARcade</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Transforming how we interact with digital and physical worlds through advanced augmented reality.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-foreground/70 hover:text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Use Cases</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Roadmap</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Releases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Developer Guide</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Community Forum</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#team" className="text-foreground/70 hover:text-primary transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              &copy; 2025 ARcade Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
