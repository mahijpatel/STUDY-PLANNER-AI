import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, BookOpen, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const AddExam = () => {
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
              <CardTitle className="text-2xl">Add Exam Date</CardTitle>
              <p className="text-muted-foreground">
                Schedule important exam dates and get AI-generated study plans
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Subject
                </Label>
                <Input id="subject" placeholder="Mathematics, Physics, etc." />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="exam-date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Exam Date
                  </Label>
                  <Input id="exam-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exam-time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Exam Time
                  </Label>
                  <Input id="exam-time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Room number or building" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="syllabus">Syllabus/Topics</Label>
                <Textarea id="syllabus" placeholder="List the topics to be covered in the exam..." rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <Button className="w-full" variant="success">
                Add Exam & Generate Study Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddExam;