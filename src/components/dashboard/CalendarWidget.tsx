import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CalendarWidget = () => {
  const events = [
    { date: "Today", title: "Math Quiz", time: "10:00 AM", color: "primary" },
    { date: "Tomorrow", title: "Science Project Due", time: "11:59 PM", color: "accent" },
    { date: "Friday", title: "English Presentation", time: "2:00 PM", color: "success" },
    { date: "Next Week", title: "Mid-term Exams Begin", time: "All Day", color: "destructive" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="w-16 flex-shrink-0">
              <Badge variant="outline" className="text-xs">
                {event.date}
              </Badge>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground">{event.title}</h4>
              <p className="text-xs text-muted-foreground">{event.time}</p>
            </div>
            <div className={`w-2 h-2 rounded-full bg-${event.color} flex-shrink-0 mt-1.5`} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
