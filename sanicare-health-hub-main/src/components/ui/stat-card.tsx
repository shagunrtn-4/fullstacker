
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
  className?: string;
  isActive?: boolean;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  trend, 
  className,
  isActive = false
}: StatCardProps) {
  const getTrendColor = () => {
    if (!trend) return "text-muted-foreground";
    switch (trend.direction) {
      case "up": return "text-green-500";
      case "down": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };
  
  return (
    <Card className={cn(
      "hover-card-effect transition-all duration-300", 
      isActive && "ring-2 ring-sanicare-400 pulse-effect",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-sanicare-500">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn("text-xs", getTrendColor())}>
            {trend.direction === "up" ? "↑" : trend.direction === "down" ? "↓" : "→"}
            {" "}{Math.abs(trend.value)}% from last reading
          </p>
        )}
      </CardContent>
    </Card>
  );
}
