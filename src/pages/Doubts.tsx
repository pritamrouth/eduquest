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
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Ask Your Doubts</h1>
          <p className="text-muted-foreground">Get help from teachers and counselors</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Submit a Question
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="e.g., Mathematics, Science" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Question</label>
                <Textarea
                  placeholder="Describe your doubt in detail..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Submit Question
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-accent" />
                Counseling Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-sm font-semibold text-foreground">Monday - Friday</p>
                <p className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</p>
              </div>
              <Button variant="outline" className="w-full">
                Book Counseling Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Recent Doubts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentDoubts.map((doubt) => (
              <div
                key={doubt.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-foreground">{doubt.question}</h4>
                    <Badge
                      variant={doubt.status === "answered" ? "default" : "outline"}
                      className={doubt.status === "answered" ? "bg-success text-success-foreground" : ""}
                    >
                      {doubt.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
