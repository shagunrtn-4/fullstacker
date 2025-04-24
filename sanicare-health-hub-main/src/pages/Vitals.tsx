
import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/ui/stat-card";
import { AppointmentCard } from "@/components/ui/appointment-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoiceAssistantButton } from "@/components/ui/voice-assistant-button";
import { Heart, Activity, Droplet, Thermometer, LucideIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { HealthSuggestionCard } from "@/components/ui/health-suggestion-card";

// Mock data for heart rate chart
const heartRateData = [
  { time: "6 AM", rate: 68 },
  { time: "9 AM", rate: 72 },
  { time: "12 PM", rate: 75 },
  { time: "3 PM", rate: 70 },
  { time: "6 PM", rate: 68 },
];

const VitalDetailCard = ({ 
  title, 
  value, 
  icon, 
  description, 
  normalRange 
}: { 
  title: string; 
  value: string; 
  icon: LucideIcon; 
  description: string; 
  normalRange: string;
}) => {
  const Icon = icon;
  return (
    <Card className="hover-card-effect">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Icon className="text-sanicare-500" size={20} />
          <span>{title}</span>
        </CardTitle>
        <span className="text-2xl font-bold">{value}</span>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className="text-xs bg-secondary p-2 rounded-md">
          <span className="font-medium">Normal Range:</span> {normalRange}
        </div>
      </CardContent>
    </Card>
  );
};

const Vitals = () => {
  const { toast } = useToast();
  
  const handleVoiceAssistant = () => {
    toast({
      title: "Voice Assistant Activated",
      description: "How can I help you with your vitals today?",
      duration: 3000,
    });
  };

  return (
    <Layout className="pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Vitals</h1>
        <p className="text-muted-foreground">Monitor and track your health metrics</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Heart Rate" 
          value="72 bpm" 
          icon={<Heart size={20} />}
          trend={{ value: 3, direction: "down" }}
          isActive={true}
        />
        <StatCard 
          title="Blood Pressure" 
          value="118/78 mmHg" 
          icon={<Activity size={20} />}
          trend={{ value: 2, direction: "neutral" }}
        />
        <StatCard 
          title="Temperature" 
          value="98.6 °F" 
          icon={<Thermometer size={20} />}
          trend={{ value: 0, direction: "neutral" }}
        />
        <StatCard 
          title="Oxygen" 
          value="97%" 
          icon={<Activity size={20} />}
          trend={{ value: 1, direction: "up" }}
        />
      </div>
      
      <Tabs defaultValue="heart" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="heart">Heart Rate</TabsTrigger>
          <TabsTrigger value="blood-pressure">Blood Pressure</TabsTrigger>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
          <TabsTrigger value="oxygen">Oxygen</TabsTrigger>
          <TabsTrigger value="hydration">Hydration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="heart" className="space-y-6">
          <VitalDetailCard 
            title="Heart Rate"
            value="72 bpm"
            icon={Heart}
            description="Your heart rate is within the normal range. Your resting heart rate has improved by 3% compared to last week."
            normalRange="60-100 bpm"
          />
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Heart Rate Trend</h3>
            <div className="h-60 w-full">
              {/* Heart rate chart would go here. Using placeholder for now */}
              <div className="h-full w-full bg-muted/30 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Heart Rate Chart</p>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="blood-pressure">
          <VitalDetailCard 
            title="Blood Pressure"
            value="118/78 mmHg"
            icon={Activity}
            description="Your blood pressure is within the normal range. Continue maintaining your healthy lifestyle."
            normalRange="90-120/60-80 mmHg"
          />
        </TabsContent>
        
        <TabsContent value="temperature">
          <VitalDetailCard 
            title="Temperature"
            value="98.6 °F"
            icon={Thermometer}
            description="Your body temperature is normal. No irregularities detected."
            normalRange="97.7-99.5 °F"
          />
        </TabsContent>
        
        <TabsContent value="oxygen">
          <VitalDetailCard 
            title="Oxygen Saturation"
            value="97%"
            icon={Activity}
            description="Your oxygen saturation levels are healthy. This is a good indicator of proper lung function."
            normalRange="95-100%"
          />
        </TabsContent>
        
        <TabsContent value="hydration">
          <VitalDetailCard 
            title="Hydration Level"
            value="67%"
            icon={Droplet}
            description="Your hydration level could be improved. Consider drinking more water throughout the day."
            normalRange="70-100%"
          />
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointment</h2>
          <AppointmentCard 
            doctorName="Dr. Emily Chen"
            specialty="Cardiologist"
            date="Wednesday, April 24"
            time="10:30 AM"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Health Suggestions</h2>
          <div className="grid grid-cols-1 gap-4">
            <HealthSuggestionCard 
              title="Daily Heart Exercise"
              description="Try to incorporate 30 minutes of moderate cardio activity today to maintain heart health."
              icon={<Heart size={16} />}
            />
            <HealthSuggestionCard 
              title="Increase Water Intake"
              description="Your hydration levels are below target. Aim to drink at least 2 more glasses of water today."
              icon={<Droplet size={16} />}
            />
          </div>
        </div>
      </div>
      
      <VoiceAssistantButton onClick={handleVoiceAssistant} />
    </Layout>
  );
};

export default Vitals;
