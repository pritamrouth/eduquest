import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

interface PerformanceCardProps {
  title: string;
  score: number;
  trend: number;
  icon: React.ReactNode;
}

const PerformanceCard = ({ title, score, trend, icon }: PerformanceCardProps) => {
  return (
    <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/40 group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
          {score}%
        </div>
        <Progress value={score} className="h-2.5 mb-2 shadow-inner" />
        <div className="flex items-center text-xs text-success font-medium">
          <TrendingUp className="w-3 h-3 mr-1 animate-pulse" />
          <span>+{trend}% from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
