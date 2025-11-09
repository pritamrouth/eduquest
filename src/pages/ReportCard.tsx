import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const ReportCard = () => {
  const subjects = [
    { name: "Mathematics", score: 92, grade: "A", trend: "+5%", color: "success" },
    { name: "Science", score: 88, grade: "A", trend: "+3%", color: "success" },
    { name: "English", score: 85, grade: "B+", trend: "+8%", color: "primary" },
    { name: "History", score: 78, grade: "B", trend: "-2%", color: "accent" },
    { name: "Geography", score: 82, grade: "B+", trend: "+4%", color: "primary" },
    { name: "Physics", score: 90, grade: "A", trend: "+6%", color: "success" },
  ];

  const overallGPA = 4.2;
  const rank = 2;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Academic Report Card</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Your performance overview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/5 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="text-xs sm:text-sm text-muted-foreground">Overall GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-primary">{overallGPA}</div>
              <p className="text-xs sm:text-sm text-success mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                Excellent Performance
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-success/5 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-xs sm:text-sm text-muted-foreground">Class Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-accent">#{rank}</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Out of 150 students</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-primary/5 sm:col-span-2 lg:col-span-1 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="text-xs sm:text-sm text-muted-foreground">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-success" />
                <div className="text-xl sm:text-2xl font-bold text-success">12</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Awards this semester</p>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
              Subject-wise Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {subjects.map((subject) => (
                <div key={subject.name} className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-semibold text-foreground">{subject.name}</h4>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant="outline" className={`bg-${subject.color}/10 text-${subject.color} text-xs`}>
                        {subject.grade}
                      </Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground">{subject.trend}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Progress value={subject.score} className="h-2" />
                    <p className="text-xs sm:text-sm text-muted-foreground">{subject.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportCard;
