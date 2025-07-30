import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardOverview from "@/components/DashboardOverview";
import QuickActions from "@/components/QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DashboardOverview />
        <QuickActions />
      </main>
    </div>
  );
};

export default Dashboard;