
import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BackgroundImage } from "@/components/ui/background-image";
import { StatCard } from "@/components/ui/stat-card";
import { AppointmentCard } from "@/components/ui/appointment-card";
import { HealthAlert } from "@/components/ui/health-alert";
import { HealthSuggestionCard } from "@/components/ui/health-suggestion-card";
import { VoiceAssistantButton } from "@/components/ui/voice-assistant-button";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Droplet, Thermometer, Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleVoiceAssistant = () => {
    toast({
      title: "Voice Assistant Activated",
      description: "How can I help you today?",
      duration: 3000,
    });
  };

  return (
    <Layout>
      <BackgroundImage 
        imageUrl="/placeholder.svg" 
        className={showWelcome ? "opacity-100" : "opacity-30"}
      />

      {showWelcome ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Welcome to SaniCare
          </h1>
          <p className="text-xl text-center max-w-2xl mb-10 text-muted-foreground">
            Your personalized healthcare companion for a healthier lifestyle
          </p>
          <Button 
            className="bg-sanicare-500 hover:bg-sanicare-600 text-white px-6 py-6 text-lg hover-scale"
            onClick={() => setShowWelcome(false)}
          >
            Get Started
          </Button>
        </div>
      ) : (
        <div className="space-y-10 animate-fade-in">
          <header>
            <h1 className="text-3xl font-bold mb-2">Good Morning, Sarah</h1>
            <p className="text-muted-foreground">Here's your health summary for today</p>
          </header>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Health At a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                title="Hydration" 
                value="67%" 
                icon={<Droplet size={20} />}
                trend={{ value: 5, direction: "up" }}
              />
            </div>
          </section>
          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Health Alerts</h2>
                <div className="space-y-4">
                  <HealthAlert 
                    title="Elevated Heart Rate"
                    description="Your heart rate has been above normal range for the past hour."
                    severity="medium"
                    time="1 hour ago"
                  />
                  <HealthAlert 
                    title="Medication Reminder"
                    description="Don't forget to take your evening vitamin supplement."
                    severity="low"
                    time="5 mins ago"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Health Suggestions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HealthSuggestionCard 
                    title="Stay Hydrated"
                    description="Try to drink at least 8oz of water in the next hour to improve hydration."
                    icon={<Droplet size={16} />}
                  />
                  <HealthSuggestionCard 
                    title="Reduce Stress"
                    description="Your elevated heart rate may be related to stress. Try a 5-minute breathing exercise."
                    icon={<Activity size={16} />}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointment</h2>
              <AppointmentCard 
                doctorName="Dr. Emily Chen"
                specialty="Cardiologist"
                date="Wednesday, April 24"
                time="10:30 AM"
              />
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Available Specialists</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Dr. Michael Stevens (Dermatologist)
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Dr. Jessica Wong (Nutritionist)
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      
      <VoiceAssistantButton onClick={handleVoiceAssistant} />
    </Layout>
  );
};

export default Dashboard;
