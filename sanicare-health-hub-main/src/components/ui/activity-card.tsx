
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ActivityCardProps {
  title: string;
  icon: ReactNode;
  value: number;
  target: number;
  unit: string;
  progress: number;
  className?: string;
}

export function ActivityCard({ 
  title, 
  icon,
  value,
  target, 
  unit,
  progress, 
  className
}: ActivityCardProps) {
  return (
    <Card className={cn("hover-card-effect", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-sanicare-500">{icon}</div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-muted-foreground text-sm">{unit}</span>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Target: {target} {unit}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
