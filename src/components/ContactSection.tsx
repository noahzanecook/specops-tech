
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Join the Beta</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Be among the first to experience ARcade's groundbreaking technology and help shape its future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
            
            <h3 className="text-2xl font-bold mb-6">Request Beta Access</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-1">First Name</label>
                  <Input id="first-name" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name</label>
                  <Input id="last-name" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization/Company</label>
                <Input id="organization" placeholder="Where do you work?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">How will you use ARcade?</label>
                <Textarea id="message" placeholder="Tell us about your use case..." className="min-h-[100px]" />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-sm text-foreground/60 text-center mt-4">
                By submitting, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Join the Beta?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 p-1 rounded-md bg-primary/20 text-primary h-fit">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Early Access</h4>
                    <p className="text-foreground/80">Be the first to experience our revolutionary AR technology.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 p-1 rounded-md bg-primary/20 text-primary h-fit">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Direct Influence</h4>
                    <p className="text-foreground/80">Your feedback will directly shape the future of the platform.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 p-1 rounded-md bg-primary/20 text-primary h-fit">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Priority Support</h4>
                    <p className="text-foreground/80">Get dedicated assistance from our development team.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 p-1 rounded-md bg-primary/20 text-primary h-fit">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Exclusive Updates</h4>
                    <p className="text-foreground/80">Receive regular insider updates on development progress.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">Need more information?</h4>
              <p className="text-foreground/80 mb-4">
                Our team is ready to answer any questions you might have about ARcade and the beta program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  );
}
