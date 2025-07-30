import { Bell, Calendar, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">StudyPlan AI</h1>
              <p className="text-sm text-muted-foreground">Smart Academic Planner</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Timetable
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Planner
            </Button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-[10px] flex items-center justify-center text-destructive-foreground">
                3
              </span>
            </Button>
            <Button variant="hero" size="sm" onClick={() => window.location.href = '/profile'}>
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;