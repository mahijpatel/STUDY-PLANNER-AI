import { Calendar, Upload, Brain, Bell, BookOpen, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardOverview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to <span className="text-primary">Ace Your Academics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you organize, plan, and optimize your study schedule for maximum productivity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DashboardOverview;