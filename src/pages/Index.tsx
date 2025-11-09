import PerformanceCard from "@/components/dashboard/PerformanceCard";
import StrengthsWeaknesses from "@/components/dashboard/StrengthsWeaknesses";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import Leaderboard from "@/components/dashboard/Leaderboard";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import StudentProfile from "@/components/dashboard/StudentProfile";
import { BookOpen, Brain, Target, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-2">
            Welcome back, Alex! 🎓
          </h1>
          <p className="text-muted-foreground text-lg">Here's your learning progress overview</p>
        </div>

        {/* Performance Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <PerformanceCard
              title="Overall Score"
              score={87}
              trend={5}
              icon={<Target className="w-5 h-5" />}
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <PerformanceCard
              title="Mathematics"
              score={92}
              trend={8}
              icon={<Brain className="w-5 h-5" />}
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <PerformanceCard
              title="Science"
              score={88}
              trend={3}
              icon={<BookOpen className="w-5 h-5" />}
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <PerformanceCard
              title="Achievements"
              score={95}
              trend={12}
              icon={<Award className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <StrengthsWeaknesses />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CalendarWidget />
            </div>
          </div>
          <div className="space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <StudentProfile />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <NotificationPanel />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
