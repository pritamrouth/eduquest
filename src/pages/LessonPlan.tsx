import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LessonPlan = () => {
  const weekSchedule = [
    {
      day: "Monday",
      lessons: [
        { time: "9:00 AM", subject: "Mathematics", topic: "Algebra", duration: "1h" },
        { time: "10:30 AM", subject: "Science", topic: "Chemistry", duration: "1h" },
        { time: "2:00 PM", subject: "English", topic: "Literature", duration: "1h" },
      ],
    },
    {
      day: "Tuesday",
      lessons: [
        { time: "9:00 AM", subject: "Physics", topic: "Mechanics", duration: "1h" },
        { time: "11:00 AM", subject: "History", topic: "World War II", duration: "1h" },
        { time: "2:00 PM", subject: "Geography", topic: "Climate", duration: "1h" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Lesson Plan</h1>
          <p className="text-muted-foreground">Your weekly learning schedule</p>
        </div>

        <div className="grid gap-6">
          {weekSchedule.map((schedule) => (
            <Card key={schedule.day}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  {schedule.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {schedule.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {lesson.duration}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{lesson.subject}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{lesson.topic}</p>
                      <p className="text-xs text-primary font-medium">{lesson.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonPlan;
