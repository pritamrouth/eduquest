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
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Assessments</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Track and complete your assignments</p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {assessments.map((assessment, index) => (
            <Card key={assessment.id} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-base sm:text-lg break-words">{assessment.title}</CardTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground">{assessment.subject}</p>
                    </div>
                  </div>
                  <Badge
                    variant={assessment.status === "completed" ? "default" : "outline"}
                    className={`flex-shrink-0 self-start ${
                      assessment.status === "completed"
                        ? "bg-success text-success-foreground"
                        : ""
                    }`}
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
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
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
                    <Button size="sm" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
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
