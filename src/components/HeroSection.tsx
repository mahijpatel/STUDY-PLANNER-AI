import { ArrowRight, Calendar, Brain, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/study-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-secondary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your AI-Powered
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Study Companion</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your academic journey with intelligent scheduling, personalized study plans, and smart reminders that adapt to your learning style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/todo-list'}>
                Todo List
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI Study Planner Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -left-4 p-3 bg-success text-success-foreground shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-foreground rounded-full"></div>
                <span className="text-sm font-medium">Study session complete!</span>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-3 bg-warning text-warning-foreground shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Exam in 3 days</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;