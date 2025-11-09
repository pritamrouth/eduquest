import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, Award, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      type: "assignment",
      icon: AlertCircle,
      title: "Assignment Due Soon",
      message: "Math Assignment 5 due in 2 days",
      time: "2h ago",
      color: "accent",
    },
    {
      id: 2,
      type: "achievement",
      icon: Award,
      title: "Achievement Unlocked!",
      message: "Completed 10 quizzes in a row",
      time: "5h ago",
      color: "success",
    },
    {
      id: 3,
      type: "reminder",
      icon: Clock,
      title: "Class Reminder",
      message: "Science lab session at 2:00 PM",
      time: "1d ago",
      color: "primary",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className={`w-10 h-10 rounded-full bg-${notif.color}/10 flex items-center justify-center flex-shrink-0`}>
              <notif.icon className={`w-5 h-5 text-${notif.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-semibold text-foreground">{notif.title}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
