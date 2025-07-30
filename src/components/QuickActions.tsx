import { Upload, Calendar, Brain, Plus, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started with these essential features to organize your academic life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-muted/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-3">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Upload Timetable</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Upload your college schedule via Excel, image, or manual entry
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/upload-timetable'}>
                Upload Now
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-muted/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors mb-3">
                <Plus className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-lg">Add Exam Date</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Schedule important exam dates and get AI-generated study plans
              </p>
              <Button variant="success" className="w-full" onClick={() => window.location.href = '/add-exam'}>
                Add Exam
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-muted/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-warning/10 rounded-full group-hover:bg-warning/20 transition-colors mb-3">
                <Calendar className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-lg">Schedule Event</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Add workshops, events, or assignment deadlines to your calendar
              </p>
              <Button variant="warning" className="w-full" onClick={() => window.location.href = '/schedule-event'}>
                Add Event
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-muted/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-3">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Generate Study Plan</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Let AI create a personalized study schedule based on your priorities
              </p>
              <Button variant="hero" className="w-full" onClick={() => window.location.href = '/generate-study-plan'}>
                Generate Plan
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-muted/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors mb-3">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-lg">Set Reminders</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Configure custom reminders for study sessions and breaks
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/set-reminders'}>
                Set Reminders
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default QuickActions;