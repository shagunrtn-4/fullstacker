
import { Layout } from "@/components/layout/Layout";
import { MedicationCard } from "@/components/ui/medication-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoiceAssistantButton } from "@/components/ui/voice-assistant-button";
import { useToast } from "@/components/ui/use-toast";
import { Plus, AlertTriangle, RotateCw, FileText } from "lucide-react";

const Medication = () => {
  const { toast } = useToast();
  
  const handleVoiceAssistant = () => {
    toast({
      title: "Voice Assistant Activated",
      description: "How can I help you with your medications today?",
      duration: 3000,
    });
  };

  return (
    <Layout className="pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Medication</h1>
        <p className="text-muted-foreground">Manage your medications and prescriptions</p>
      </header>
      
      <Tabs defaultValue="list" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="list">Medication List</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
          <TabsTrigger value="notes">Doctor's Notes</TabsTrigger>
          <TabsTrigger value="refill">Refill Requests</TabsTrigger>
          <TabsTrigger value="interactions">Interaction Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Active Medications</h2>
            <Button className="bg-sanicare-500 hover:bg-sanicare-600">
              <Plus size={18} className="mr-2" /> Add Medication
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MedicationCard 
              name="Lisinopril"
              dosage="10mg"
              frequency="Once daily"
              nextDose="Today, 8:00 PM"
              refillDate="May 15, 2025"
            />
            
            <MedicationCard 
              name="Atorvastatin"
              dosage="20mg"
              frequency="Once daily"
              nextDose="Today, 8:00 PM"
              refillDate="May 23, 2025"
              hasWarning={true}
            />
            
            <MedicationCard 
              name="Vitamin D"
              dosage="2000 IU"
              frequency="Once daily"
              nextDose="Today, 8:00 AM"
              refillDate="June 10, 2025"
            />
            
            <MedicationCard 
              name="Metformin"
              dosage="500mg"
              frequency="Twice daily"
              nextDose="Today, 1:00 PM"
              refillDate="May 5, 2025"
            />
            
            <MedicationCard 
              name="Aspirin"
              dosage="81mg"
              frequency="Once daily"
              nextDose="Today, 8:00 AM"
              refillDate="July 12, 2025"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="reminders">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Medication Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Morning (8:00 AM)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Vitamin D (2000 IU)</li>
                    <li>Aspirin (81mg)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Afternoon (1:00 PM)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Metformin (500mg)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Evening (8:00 PM)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Lisinopril (10mg)</li>
                    <li>Atorvastatin (20mg)</li>
                    <li>Metformin (500mg)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h3 className="font-medium">Reminder Settings</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">5 minutes before</Button>
                  <Button variant="outline" size="sm">15 minutes before</Button>
                  <Button variant="outline" size="sm">30 minutes before</Button>
                  <Button variant="default" size="sm" className="bg-sanicare-500 hover:bg-sanicare-600">
                    At scheduled time
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <FileText size={18} className="text-sanicare-500" />
                <CardTitle className="text-lg">Latest Doctor's Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Dr. Emily Chen (Cardiologist)</h3>
                      <span className="text-xs text-muted-foreground">April 15, 2025</span>
                    </div>
                    <p className="text-sm">
                      Continue with current medication regimen. Blood pressure has improved 
                      but still monitoring. Follow up in 3 months.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Dr. Michael Stevens (Family Medicine)</h3>
                      <span className="text-xs text-muted-foreground">March 22, 2025</span>
                    </div>
                    <p className="text-sm">
                      Patient reports occasional joint pain. Recommended daily vitamin D 
                      supplementation. No changes to other medications at this time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <FileText size={18} className="text-sanicare-500" />
                <CardTitle className="text-lg">Medication History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Current Medications</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Lisinopril (10mg) - Started January 2025</li>
                      <li>Atorvastatin (20mg) - Started January 2025</li>
                      <li>Metformin (500mg) - Started February 2025</li>
                      <li>Vitamin D (2000 IU) - Started March 2025</li>
                      <li>Aspirin (81mg) - Started January 2025</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">Discontinued Medications</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Losartan (25mg) - Discontinued January 2025</li>
                      <li>Simvastatin (10mg) - Discontinued January 2025</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="refill">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Refill Requests</h2>
              <Button className="bg-sanicare-500 hover:bg-sanicare-600">
                <Plus size={18} className="mr-2" /> New Request
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="p-4 border rounded-md bg-muted/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Lisinopril (10mg)</h3>
                        <p className="text-xs text-muted-foreground mt-1">Requested: April 20, 2025</p>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        Pending
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <RotateCw size={14} className="text-sanicare-500" />
                      <span className="text-sm">Expected approval: 1-2 business days</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-muted/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Metformin (500mg)</h3>
                        <p className="text-xs text-muted-foreground mt-1">Requested: April 18, 2025</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Approved
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm">Ready for pickup at your pharmacy</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="interactions">
          <div className="space-y-6">
            <Card className="border-amber-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <AlertTriangle size={18} />
                </div>
                <CardTitle className="text-lg">Medication Interaction Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 border border-amber-200 rounded-md bg-amber-50">
                  <h3 className="font-medium mb-2">Atorvastatin + Grapefruit Juice</h3>
                  <p className="text-sm mb-4">
                    Grapefruit juice can increase the level of atorvastatin in your bloodstream, 
                    which may increase the risk of side effects such as muscle pain.
                  </p>
                  <div className="text-sm font-medium">
                    Recommendation: Avoid consuming grapefruit or grapefruit juice while taking atorvastatin.
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <h3 className="font-medium">Other Potential Interactions</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <strong>Aspirin + Lisinopril:</strong> Monitor blood pressure regularly as this combination 
                      may reduce the effectiveness of lisinopril.
                    </li>
                    <li>
                      <strong>Metformin + Alcohol:</strong> Alcohol may increase the risk of lactic acidosis when 
                      taking metformin. Limit alcohol consumption.
                    </li>
                  </ul>
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

export default Medication;
