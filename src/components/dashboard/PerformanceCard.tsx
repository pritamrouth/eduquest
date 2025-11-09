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
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground mb-2">{score}%</div>
        <Progress value={score} className="h-2 mb-2" />
        <div className="flex items-center text-xs text-success">
          <TrendingUp className="w-3 h-3 mr-1" />
          <span>+{trend}% from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
