import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const StrengthsWeaknesses = () => {
  const strengths = [
    { subject: "Mathematics", score: 92, color: "success" },
    { subject: "Science", score: 88, color: "success" },
    { subject: "English", score: 85, color: "primary" },
  ];

  const weaknesses = [
    { subject: "History", score: 65, color: "destructive" },
    { subject: "Geography", score: 68, color: "accent" },
  ];

  return (
    <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
        <CardTitle className="text-lg flex items-center gap-2">
          📊 Strengths & Weaknesses Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Strengths
          </h4>
          <div className="space-y-2">
            {strengths.map((item, index) => (
              <div 
                key={item.subject} 
                className="flex items-center justify-between p-2.5 rounded-lg bg-success/5 hover:bg-success/10 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground group-hover:text-success transition-colors">{item.subject}</span>
                <Badge variant="outline" className="bg-success/20 text-success border-success/30 shadow-sm">
                  {item.score}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Needs Improvement
          </h4>
          <div className="space-y-2">
            {weaknesses.map((item, index) => (
              <div 
                key={item.subject} 
                className="flex items-center justify-between p-2.5 rounded-lg bg-accent/5 hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${(strengths.length + index) * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{item.subject}</span>
                <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30 shadow-sm">
                  {item.score}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrengthsWeaknesses;
