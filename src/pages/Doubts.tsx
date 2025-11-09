import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { HelpCircle, MessageSquare, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Doubts = () => {
  const recentDoubts = [
    {
      id: 1,
      subject: "Mathematics",
      question: "How to solve quadratic equations?",
      status: "answered",
      time: "2h ago",
    },
    {
      id: 2,
      subject: "Science",
      question: "Explain photosynthesis process",
      status: "pending",
      time: "5h ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Ask Your Doubts</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Get help from teachers and counselors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                Submit a Question
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="e.g., Mathematics, Science" className="text-sm sm:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">Your Question</label>
                <Textarea
                  placeholder="Describe your doubt in detail..."
                  className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                Submit Question
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <User className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                Counseling Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-xs sm:text-sm font-semibold text-foreground">Monday - Friday</p>
                <p className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</p>
              </div>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Book Counseling Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <HelpCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              Recent Doubts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentDoubts.map((doubt) => (
              <div
                key={doubt.id}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground break-words">{doubt.question}</h4>
                    <Badge
                      variant={doubt.status === "answered" ? "default" : "outline"}
                      className={`self-start flex-shrink-0 text-xs ${doubt.status === "answered" ? "bg-success text-success-foreground" : ""}`}
                    >
                      {doubt.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                    <span>{doubt.subject}</span>
                    <span>•</span>
                    <span>{doubt.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Doubts;
