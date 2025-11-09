import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Quizzes = () => {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Quizzes & Revision</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Level up your knowledge with gamified learning</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10">
              <Flame className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Streak</p>
                <p className="text-base sm:text-lg font-bold text-accent">7 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Target className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                Daily Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { subject: "Math", completed: 3, total: 5, xp: 50 },
                { subject: "Science", completed: 4, total: 5, xp: 50 },
                { subject: "English", completed: 2, total: 5, xp: 50 },
              ].map((challenge) => (
                <div key={challenge.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-semibold text-foreground">{challenge.subject}</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                      +{challenge.xp} XP
                    </Badge>
                  </div>
                  <Progress value={(challenge.completed / challenge.total) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {challenge.completed}/{challenge.total} completed
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-xs sm:text-sm text-muted-foreground">Total XP</span>
                <span className="text-base sm:text-lg font-bold text-foreground">2,380</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-xs sm:text-sm text-muted-foreground">Quizzes Completed</span>
                <span className="text-base sm:text-lg font-bold text-foreground">47</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-xs sm:text-sm text-muted-foreground">Accuracy</span>
                <span className="text-base sm:text-lg font-bold text-success">87%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {["Mathematics", "Science", "English", "History", "Geography", "Physics"].map((subject, index) => (
            <Card key={subject} className="hover:shadow-lg transition-all cursor-pointer group animate-fade-in" style={{ animationDelay: `${300 + index * 50}ms` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="outline" className="text-xs">5 quizzes</Badge>
                </div>
                <CardTitle className="text-base sm:text-lg mt-4">{subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
