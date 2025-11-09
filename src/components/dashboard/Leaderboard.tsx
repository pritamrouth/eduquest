import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Leaderboard = () => {
  const students = [
    { rank: 1, name: "Sarah Johnson", score: 2450, avatar: "SJ", color: "accent" },
    { rank: 2, name: "You", score: 2380, avatar: "YO", color: "primary", isCurrentUser: true },
    { rank: 3, name: "Mike Chen", score: 2320, avatar: "MC", color: "success" },
    { rank: 4, name: "Emma Davis", score: 2280, avatar: "ED", color: "muted" },
    { rank: 5, name: "Alex Kumar", score: 2210, avatar: "AK", color: "muted" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-accent" />;
    if (rank === 2 || rank === 3) return <Medal className="w-5 h-5 text-muted-foreground" />;
    return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {students.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              student.isCurrentUser
                ? "bg-primary/10 border border-primary/20"
                : "bg-muted/30 hover:bg-muted/50"
            }`}
          >
            <div className="w-8 flex items-center justify-center">
              {getRankIcon(student.rank)}
            </div>
            <Avatar className="w-10 h-10">
              <AvatarFallback className={`bg-${student.color}/10 text-${student.color} font-semibold`}>
                {student.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h4 className={`text-sm font-semibold ${student.isCurrentUser ? "text-primary" : "text-foreground"}`}>
                {student.name}
              </h4>
              <p className="text-xs text-muted-foreground">{student.score} XP</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
