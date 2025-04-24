import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Activity,
  Heart, 
  Home,
  Bell,
  Calendar,
  MessageSquare,
  User,
  Pill
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { name: "Dashboard", path: "/", icon: <Home size={20} /> },
  { name: "Vitals", path: "/vitals", icon: <Heart size={20} /> },
  { name: "Health Checks", path: "/health-checks", icon: <Activity size={20} /> },
  { name: "Medication", path: "/medication", icon: <Pill size={20} /> },
  { name: "Messages", path: "/messages", icon: <MessageSquare size={20} /> },
  { name: "Profile", path: "/profile", icon: <User size={20} /> },
];

export function Navigation({ className }: { className?: string }) {
  const location = useLocation();
  
  return (
    <nav className={cn("fixed left-0 top-0 bottom-0 w-16 lg:w-64 bg-sidebar border-r border-border flex flex-col p-4 z-10", className)}>
      <div className="flex items-center justify-center lg:justify-start mb-10 mt-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-sanicare-500 text-white rounded-md flex items-center justify-center font-bold text-xl">
            S
          </div>
          <span className="hidden lg:block text-xl font-bold text-gradient">SaniCare</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-2 flex-1">
        <TooltipProvider>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Tooltip key={item.path} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link to={item.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start gap-3 hover-scale",
                        isActive && "bg-sanicare-500 text-white hover:bg-sanicare-600"
                      )}
                    >
                      <span>{item.icon}</span>
                      <span className="hidden lg:inline-block">{item.name}</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="lg:hidden">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </nav>
  );
}
