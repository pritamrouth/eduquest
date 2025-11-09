import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Assessments from "./pages/Assessments";
import Quizzes from "./pages/Quizzes";
import Doubts from "./pages/Doubts";
import LessonPlan from "./pages/LessonPlan";
import ReportCard from "./pages/ReportCard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/doubts" element={<Doubts />} />
          <Route path="/lesson-plan" element={<LessonPlan />} />
          <Route path="/report-card" element={<ReportCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
