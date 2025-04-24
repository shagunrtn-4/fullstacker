
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface HealthAlertProps {
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
  time: string;
  className?: string;
}

export function HealthAlert({ 
  title, 
  description, 
  severity, 
  time,
  className
}: HealthAlertProps) {
  const getSeverityClass = () => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-600";
      case "medium": return "bg-amber-100 text-amber-600";
      case "low": return "bg-green-100 text-green-600";
      default: return "bg-sanicare-100 text-sanicare-500";
    }
  };
  
  return (
    <Card className={cn("overflow-hidden border-l-4", {
      "border-l-red-500": severity === "high",
      "border-l-amber-500": severity === "medium",
      "border-l-green-500": severity === "low"
    }, className)}>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", getSeverityClass())}>
              <Bell size={16} />
            </div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      
      <CardFooter className="border-t bg-muted/30 py-2">
        <div className="w-full flex justify-between">
          <Button variant="ghost" size="sm">Dismiss</Button>
          <Button variant="ghost" size="sm" className="text-sanicare-500 hover:text-sanicare-600">View Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
