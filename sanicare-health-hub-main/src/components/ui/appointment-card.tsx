
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  imageUrl?: string;
}

export function AppointmentCard({ 
  doctorName, 
  specialty, 
  date, 
  time, 
  imageUrl 
}: AppointmentCardProps) {
  return (
    <Card className="hover-card-effect">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={doctorName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold text-secondary-foreground">
                {doctorName.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-medium">{doctorName}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-sanicare-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-sanicare-500" />
            <span>{time}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">Reschedule</Button>
        <Button variant="default" size="sm" className="flex-1 bg-sanicare-500 hover:bg-sanicare-600">Join</Button>
      </CardFooter>
    </Card>
  );
}
