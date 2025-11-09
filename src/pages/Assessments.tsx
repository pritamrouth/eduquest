import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, CheckCircle2 } from "lucide-react";

const Assessments = () => {
  const assessments = [
    {
      id: 1,
      title: "Mathematics Mid-Term",
      subject: "Mathematics",
      dueDate: "2 days left",
      status: "pending",
      questions: 50,
    },
    {
      id: 2,
      title: "Science Lab Report",
      subject: "Science",
      dueDate: "5 days left",
      status: "pending",
      questions: 20,
    },
    {
      id: 3,
      title: "English Literature Essay",
      subject: "English",
      dueDate: "Completed",
      status: "completed",
      score: 92,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Assessments</h1>
          <p className="text-muted-foreground">Track and complete your assignments</p>
        </div>

        <div className="grid gap-4">
          {assessments.map((assessment) => (
            <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{assessment.subject}</p>
                    </div>
                  </div>
                  <Badge
                    variant={assessment.status === "completed" ? "default" : "outline"}
                    className={
                      assessment.status === "completed"
                        ? "bg-success text-success-foreground"
                        : ""
                    }
                  >
                    {assessment.status === "completed" ? (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {assessment.status === "completed" ? "Completed" : "Pending"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {assessment.status === "completed" ? (
                      <span className="text-success font-semibold">Score: {assessment.score}%</span>
                    ) : (
                      <>
                        <span>{assessment.questions} questions</span>
                        <span>•</span>
                        <span>{assessment.dueDate}</span>
                      </>
                    )}
                  </div>
                  {assessment.status === "pending" && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Start Assessment
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessments;
