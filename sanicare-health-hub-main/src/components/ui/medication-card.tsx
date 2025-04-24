
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicationCardProps {
  name: string;
  dosage: string;
  frequency: string;
  nextDose: string;
  refillDate?: string;
  hasWarning?: boolean;
  className?: string;
}

export function MedicationCard({ 
  name, 
  dosage, 
  frequency, 
  nextDose,
  refillDate,
  hasWarning,
  className
}: MedicationCardProps) {
  return (
    <Card className={cn("hover-card-effect", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">{name}</CardTitle>
          {hasWarning && (
            <div className="text-amber-500" title="Interaction alert">
              <AlertCircle size={16} />
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{dosage} • {frequency}</p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center gap-2 text-sm">
          <Clock size={16} className="text-sanicare-500" />
          <span>Next dose: <strong>{nextDose}</strong></span>
        </div>
        
        {refillDate && (
          <p className="text-xs text-muted-foreground mt-2">
            Refill available on {refillDate}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="border-t bg-muted/30 py-2">
        <div className="w-full flex gap-2">
          <Button variant="ghost" size="sm" className="flex-1">Skip</Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-sanicare-500 hover:bg-sanicare-600"
          >
            Take Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
