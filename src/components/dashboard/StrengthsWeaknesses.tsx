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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Strengths & Weaknesses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Strengths
          </h4>
          <div className="space-y-2">
            {strengths.map((item) => (
              <div key={item.subject} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.subject}</span>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  {item.score}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <h4 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Needs Improvement
          </h4>
          <div className="space-y-2">
            {weaknesses.map((item) => (
              <div key={item.subject} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.subject}</span>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
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
