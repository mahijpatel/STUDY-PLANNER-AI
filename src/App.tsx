import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import TodoList from "./pages/TodoList";
import UploadTimetable from "./pages/UploadTimetable";
import AddExam from "./pages/AddExam";
import ScheduleEvent from "./pages/ScheduleEvent";
import GenerateStudyPlan from "./pages/GenerateStudyPlan";
import SetReminders from "./pages/SetReminders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/upload-timetable" element={<UploadTimetable />} />
          <Route path="/add-exam" element={<AddExam />} />
          <Route path="/schedule-event" element={<ScheduleEvent />} />
          <Route path="/generate-study-plan" element={<GenerateStudyPlan />} />
          <Route path="/set-reminders" element={<SetReminders />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
