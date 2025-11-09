import PerformanceCard from "@/components/dashboard/PerformanceCard";
import StrengthsWeaknesses from "@/components/dashboard/StrengthsWeaknesses";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import Leaderboard from "@/components/dashboard/Leaderboard";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import { BookOpen, Brain, Target, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Here's your learning progress overview</p>
        </div>

        {/* Performance Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PerformanceCard
            title="Overall Score"
            score={87}
            trend={5}
            icon={<Target className="w-5 h-5" />}
          />
          <PerformanceCard
            title="Mathematics"
            score={92}
            trend={8}
            icon={<Brain className="w-5 h-5" />}
          />
          <PerformanceCard
            title="Science"
            score={88}
            trend={3}
            icon={<BookOpen className="w-5 h-5" />}
          />
          <PerformanceCard
            title="Achievements"
            score={95}
            trend={12}
            icon={<Award className="w-5 h-5" />}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StrengthsWeaknesses />
            <CalendarWidget />
          </div>
          <div className="space-y-6">
            <NotificationPanel />
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
