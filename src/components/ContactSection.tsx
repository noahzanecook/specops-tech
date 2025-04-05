
import { ArrowRight, Mail, MessageSquare, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Project Repository</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Check out our source code and contribute to ARcade's development on GitHub.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="glass-card p-8 rounded-xl relative overflow-hidden max-w-2xl w-full mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
            
            <div className="flex flex-col items-center text-center">
              <Github className="h-16 w-16 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Open Source Project</h3>
              <p className="text-foreground/80 mb-6">
                ARcade is open source and available on GitHub. Star our repository, fork it, or submit pull requests to help us improve.
              </p>
              
              <Button 
                as="a" 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View on GitHub
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl max-w-2xl w-full">
            <h4 className="font-bold text-lg mb-3">Need more information?</h4>
            <p className="text-foreground/80 mb-4">
              Our team is ready to answer any questions you might have about ARcade and the project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
