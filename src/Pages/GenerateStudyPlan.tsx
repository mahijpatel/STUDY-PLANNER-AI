import { Card, CardContent, CardHeader, CardTitle } from ;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Clock, Target, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const GenerateStudyPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => window.location.href = '/dashboard'} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Brain className="h-6 w-6" />
                Generate AI Study Plan
              </CardTitle>
              <p className="text-muted-foreground">
                Let AI create a personalized study schedule based on your priorities
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="study-goal" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Study Goal
                </Label>
                <Input id="study-goal" placeholder="Prepare for final exams, complete assignments, etc." />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="study-hours" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Daily Study Hours
                  </Label>
                  <Input id="study-hours" type="number" placeholder="4" min="1" max="12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="study-style">Learning Style</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="visual">Visual</option>
                    <option value="auditory">Auditory</option>
                    <option value="kinesthetic">Kinesthetic</option>
                    <option value="reading">Reading/Writing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subjects">Subjects to Focus On</Label>
                <Textarea id="subjects" placeholder="Mathematics, Physics, Chemistry, Biology..." rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weak-areas">Areas of Difficulty</Label>
                <Textarea id="weak-areas" placeholder="Topics you find challenging or need extra practice..." rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-date">Target Date</Label>
                  <Input id="target-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="break-preference">Break Preferences</Label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option value="pomodoro">Pomodoro (25min study, 5min break)</option>
                  <option value="extended">Extended (50min study, 10min break)</option>
                  <option value="flexible">Flexible (custom timing)</option>
                </select>
              </div>

              <Button className="w-full" variant="hero">
                Generate Personalized Study Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GenerateStudyPlan;