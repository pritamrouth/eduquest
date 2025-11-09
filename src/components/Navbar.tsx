import { NavLink } from "@/components/NavLink";
import { Home, FileText, Brain, HelpCircle, Calendar, Award } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/assessments", icon: FileText, label: "Assessments" },
    { to: "/quizzes", icon: Brain, label: "Quizzes" },
    { to: "/doubts", icon: HelpCircle, label: "Ask Doubts" },
    { to: "/lesson-plan", icon: Calendar, label: "Lesson Plan" },
    { to: "/report-card", icon: Award, label: "Report Card" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Student Platform
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all flex items-center gap-2"
                activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border overflow-x-auto">
        <div className="flex px-2 py-2 space-x-1 min-w-max">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all flex items-center gap-1.5 whitespace-nowrap"
              activeClassName="bg-primary/10 text-primary hover:bg-primary/15"
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
