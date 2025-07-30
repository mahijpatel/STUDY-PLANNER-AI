import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const ScheduleEvent = () => {
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
              <CardTitle className="text-2xl">Schedule Event</CardTitle>
              <p className="text-muted-foreground">
                Add workshops, events, or assignment deadlines to your calendar
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Event Title</Label>
                <Input id="event-title" placeholder="Workshop, Assignment, Project, etc." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option value="workshop">Workshop</option>
                  <option value="assignment">Assignment</option>
                  <option value="project">Project</option>
                  <option value="meeting">Meeting</option>
                  <option value="presentation">Presentation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </Label>
                  <Input id="event-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time
                  </Label>
                  <Input id="event-time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </Label>
                <Input id="location" placeholder="Room, building, or online link" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Event details, requirements, or notes..." rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminder">Reminder</Label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option value="none">No reminder</option>
                  <option value="15min">15 minutes before</option>
                  <option value="30min">30 minutes before</option>
                  <option value="1hour">1 hour before</option>
                  <option value="1day">1 day before</option>
                  <option value="1week">1 week before</option>
                </select>
              </div>

              <Button className="w-full" variant="warning">
                Schedule Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvent;