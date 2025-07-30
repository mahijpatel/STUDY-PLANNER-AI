import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Clock, Coffee, BookOpen, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const SetReminders = () => {
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
                <Bell className="h-6 w-6" />
                Set Smart Reminders
              </CardTitle>
              <p className="text-muted-foreground">
                Configure custom reminders for study sessions and breaks
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Study Session Reminders
                </h3>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Daily Study Reminder</Label>
                    <p className="text-sm text-muted-foreground">Remind me to start studying</p>
                  </div>
                  <Switch />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="study-time">Preferred Study Time</Label>
                    <Input id="study-time" type="time" defaultValue="09:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="study-duration">Session Duration (minutes)</Label>
                    <Input id="study-duration" type="number" defaultValue="50" min="10" max="180" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  Break Reminders
                </h3>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Break Notifications</Label>
                    <p className="text-sm text-muted-foreground">Remind me to take breaks</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Hydration Reminders</Label>
                    <p className="text-sm text-muted-foreground">Remind me to drink water</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Deadline Alerts
                </h3>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Exam Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified before exams</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Assignment Deadlines</Label>
                    <p className="text-sm text-muted-foreground">Alert me about upcoming deadlines</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alert-advance">Alert me (days in advance)</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="1">1 day</option>
                    <option value="3">3 days</option>
                    <option value="7">1 week</option>
                    <option value="14">2 weeks</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Motivation & Quotes</h3>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label className="font-medium">Daily Motivation</Label>
                    <p className="text-sm text-muted-foreground">Send me motivational quotes</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Save Reminder Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SetReminders;
