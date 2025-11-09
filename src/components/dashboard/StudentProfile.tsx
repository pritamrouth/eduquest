import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Award, TrendingUp, Zap } from "lucide-react";

const StudentProfile = () => {
  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="h-24 bg-gradient-to-r from-primary via-primary/80 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <CardContent className="pt-0 pb-6">
        <div className="flex flex-col items-center -mt-12">
          <div className="relative animate-float">
            <Avatar className="w-24 h-24 border-4 border-card shadow-xl ring-4 ring-primary/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" alt="Student" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                ST
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1.5 shadow-lg animate-pulse-glow">
              <Zap className="w-4 h-4 text-success-foreground" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="mt-4 text-2xl font-bold text-foreground">Alex Johnson</h2>
          <p className="text-sm text-muted-foreground">Grade 10 - Science Stream</p>
          
          <div className="flex gap-2 mt-3">
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-sm animate-scale-in">
              <Star className="w-3 h-3 mr-1" fill="currentColor" />
              Top Performer
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <Award className="w-3 h-3 mr-1" />
              15 Badges
            </Badge>
          </div>
          
          <div className="w-full mt-6 space-y-4">
            <div className="space-y-2 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Level Progress</span>
                <span className="text-sm font-bold text-primary">Level 12</span>
              </div>
              <Progress value={68} className="h-2.5 bg-muted shadow-inner" />
              <p className="text-xs text-muted-foreground">320 XP to Level 13</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-2 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-primary">2,380</div>
                <div className="text-xs text-muted-foreground mt-1">Total XP</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-success">92%</div>
                <div className="text-xs text-muted-foreground mt-1">Avg Score</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                  <TrendingUp className="w-5 h-5" />
                  8%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Growth</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfile;
