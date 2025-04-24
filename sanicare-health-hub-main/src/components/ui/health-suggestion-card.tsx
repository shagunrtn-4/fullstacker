
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HealthSuggestionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function HealthSuggestionCard({ 
  title, 
  description, 
  icon,
  className
}: HealthSuggestionCardProps) {
  return (
    <Card className={cn("hover-card-effect", className)}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="h-8 w-8 rounded-full bg-sanicare-100 flex items-center justify-center text-sanicare-500">
          {icon}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
