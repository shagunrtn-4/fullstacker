
import { Layout } from "@/components/layout/Layout";
import { ActivityCard } from "@/components/ui/activity-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoiceAssistantButton } from "@/components/ui/voice-assistant-button";
import { useToast } from "@/components/ui/use-toast";
import { Activity, Utensils, Moon, Droplet, Dumbbell } from "lucide-react";

const HealthChecks = () => {
  const { toast } = useToast();
  
  const handleVoiceAssistant = () => {
    toast({
      title: "Voice Assistant Activated",
      description: "How can I help you with your health activity today?",
      duration: 3000,
    });
  };

  return (
    <Layout className="pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Health Checks</h1>
        <p className="text-muted-foreground">Track your daily wellness activities</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <ActivityCard 
          title="Physical Activity" 
          icon={<Activity size={20} />}
          value={6320}
          target={10000}
          unit="steps"
          progress={63.2}
        />
        <ActivityCard 
          title="Nutrition" 
          icon={<Utensils size={20} />}
          value={1450}
          target={2000}
          unit="cal"
          progress={72.5}
        />
        <ActivityCard 
          title="Sleep" 
          icon={<Moon size={20} />}
          value={6.5}
          target={8}
          unit="hours"
          progress={81.25}
        />
        <ActivityCard 
          title="Hydration" 
          icon={<Droplet size={20} />}
          value={4}
          target={8}
          unit="glasses"
          progress={50}
        />
        <ActivityCard 
          title="Strength" 
          icon={<Dumbbell size={20} />}
          value={2}
          target={3}
          unit="sessions"
          progress={66.7}
        />
      </div>
      
      <Tabs defaultValue="activity" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="activity">Activity Details</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Details</TabsTrigger>
          <TabsTrigger value="sleep">Sleep Details</TabsTrigger>
          <TabsTrigger value="hydration">Hydration Details</TabsTrigger>
          <TabsTrigger value="strength">Strength Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activity Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Steps</span>
                    <span className="font-medium">6,320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Distance</span>
                    <span className="font-medium">2.8 miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Minutes</span>
                    <span className="font-medium">42 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calories Burned</span>
                    <span className="font-medium">387 cal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  {/* Weekly activity chart would go here. Using placeholder for now */}
                  <div className="h-full w-full bg-muted/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Weekly Activity Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="nutrition">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nutrition Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Calories Consumed</span>
                    <span className="font-medium">1,450 cal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-medium">72g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbs</span>
                    <span className="font-medium">183g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-medium">48g</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Breakfast</div>
                    <div className="text-sm text-muted-foreground">Oatmeal with berries and almond milk</div>
                    <div className="text-xs mt-1">380 cal</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Lunch</div>
                    <div className="text-sm text-muted-foreground">Chicken salad with mixed greens</div>
                    <div className="text-xs mt-1">520 cal</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Snack</div>
                    <div className="text-sm text-muted-foreground">Apple with almond butter</div>
                    <div className="text-xs mt-1">180 cal</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Dinner</div>
                    <div className="text-sm text-muted-foreground">Salmon with roasted vegetables</div>
                    <div className="text-xs mt-1">370 cal</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sleep">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sleep Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Sleep</span>
                    <span className="font-medium">6h 30m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deep Sleep</span>
                    <span className="font-medium">2h 15m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>REM Sleep</span>
                    <span className="font-medium">1h 45m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Light Sleep</span>
                    <span className="font-medium">2h 30m</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sleep Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  {/* Sleep chart would go here. Using placeholder for now */}
                  <div className="h-full w-full bg-muted/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Sleep Pattern Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="hydration">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hydration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Water Consumed</span>
                    <span className="font-medium">4 glasses (1L)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Target</span>
                    <span className="font-medium">8 glasses (2L)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remaining</span>
                    <span className="font-medium">4 glasses (1L)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hydration Level</span>
                    <span className="font-medium">50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  {/* Hydration chart would go here. Using placeholder for now */}
                  <div className="h-full w-full bg-muted/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Hydration Tracking Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="strength">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strength Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sessions This Week</span>
                    <span className="font-medium">2 of 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Session</span>
                    <span className="font-medium">Yesterday</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Scheduled</span>
                    <span className="font-medium">Tomorrow</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Goal</span>
                    <span className="font-medium">3 sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exercise Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Upper Body</div>
                    <div className="text-sm text-muted-foreground">Push-ups, Shoulder Press, Bicep Curls</div>
                    <div className="text-xs mt-1">Completed: Monday</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Lower Body</div>
                    <div className="text-sm text-muted-foreground">Squats, Lunges, Calf Raises</div>
                    <div className="text-xs mt-1">Completed: Yesterday</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Core</div>
                    <div className="text-sm text-muted-foreground">Planks, Crunches, Russian Twists</div>
                    <div className="text-xs mt-1">Scheduled: Tomorrow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <VoiceAssistantButton onClick={handleVoiceAssistant} />
    </Layout>
  );
};

export default HealthChecks;
