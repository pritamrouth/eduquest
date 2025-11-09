import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Quizzes = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Quizzes & Revision</h1>
            <p className="text-muted-foreground">Level up your knowledge with gamified learning</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
              <Flame className="w-5 h-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Streak</p>
                <p className="text-lg font-bold text-accent">7 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
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
                    <span className="font-semibold text-foreground">{challenge.subject}</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-sm text-muted-foreground">Total XP</span>
                <span className="text-lg font-bold text-foreground">2,380</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-sm text-muted-foreground">Quizzes Completed</span>
                <span className="text-lg font-bold text-foreground">47</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="text-sm text-muted-foreground">Accuracy</span>
                <span className="text-lg font-bold text-success">87%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Mathematics", "Science", "English", "History", "Geography", "Physics"].map((subject) => (
            <Card key={subject} className="hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Brain className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="outline">5 quizzes</Badge>
                </div>
                <CardTitle className="text-lg mt-4">{subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
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
