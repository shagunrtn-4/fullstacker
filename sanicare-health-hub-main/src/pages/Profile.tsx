
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { BackgroundImage } from "@/components/ui/background-image";
import { 
  User,
  FileText,
  Shield,
  Phone,
  Clock, 
  AlarmClock,
  PlusCircle,
  Trash,
  Edit
} from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <Layout>
      <BackgroundImage
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        overlay={true}
      />

      <div className="relative z-10">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Profile" 
                  className="object-cover"
                />
              </Avatar>
              <div>
                <CardTitle>Emily Johnson</CardTitle>
                <CardDescription>Patient ID: #SNC-78215</CardDescription>
                <div className="flex items-center gap-3 mt-2">
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Edit size={14} className="mr-1" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <FileText size={14} className="mr-1" />
                    View Records
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="md:w-1/3">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start hover-scale">
                <Clock className="mr-2 h-4 w-4" />
                Schedule Appointment
              </Button>
              <Button variant="outline" className="w-full justify-start hover-scale">
                <FileText className="mr-2 h-4 w-4" />
                Download Medical Records
              </Button>
              <Button variant="outline" className="w-full justify-start hover-scale">
                <AlarmClock className="mr-2 h-4 w-4" />
                Medication Reminders
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="personal" className="hover-scale">
              <User className="mr-2 h-4 w-4" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="medical" className="hover-scale">
              <FileText className="mr-2 h-4 w-4" />
              Medical Records
            </TabsTrigger>
            <TabsTrigger value="insurance" className="hover-scale">
              <Shield className="mr-2 h-4 w-4" />
              Insurance
            </TabsTrigger>
            <TabsTrigger value="emergency" className="hover-scale">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Contacts
            </TabsTrigger>
            <TabsTrigger value="privacy" className="hover-scale">
              <Shield className="mr-2 h-4 w-4" />
              Data & Privacy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Emily" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="emily.johnson@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1985-07-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" defaultValue="Female" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="hover-scale">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" defaultValue="123 Health Street" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Wellness City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="California" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" defaultValue="90210" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="hover-scale">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="medical" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>
                    View and manage your medical history
                  </CardDescription>
                </div>
                <Button size="sm" className="hover-scale">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Record
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Mar 15, 2024", title: "Annual Physical Checkup", doctor: "Dr. Sarah Johnson", facility: "SaniCare Medical Center" },
                    { date: "Jan 22, 2024", title: "Influenza Vaccination", doctor: "Dr. Michael Chen", facility: "City Health Clinic" },
                    { date: "Dec 05, 2023", title: "Blood Work Analysis", doctor: "Dr. Robert Davis", facility: "Laboratory Services Inc." },
                  ].map((record, i) => (
                    <div key={i} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{record.title}</h4>
                          <p className="text-sm text-muted-foreground">Doctor: {record.doctor}</p>
                          <p className="text-sm text-muted-foreground">Facility: {record.facility}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium">{record.date}</span>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Information</CardTitle>
                <CardDescription>
                  Manage your insurance details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="insurance-provider">Provider</Label>
                    <Input id="insurance-provider" defaultValue="HealthPlus Insurance" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policy-number">Policy Number</Label>
                    <Input id="policy-number" defaultValue="HP-78934562" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="group-number">Group Number</Label>
                    <Input id="group-number" defaultValue="G-4567890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverage-type">Coverage Type</Label>
                    <Input id="coverage-type" defaultValue="Premium Plan" />
                  </div>
                </div>
                <Separator className="my-4" />
                <div>
                  <h4 className="font-medium mb-2">Insurance Card</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-accent/50 transition-colors">
                      <div className="flex flex-col items-center justify-center h-full">
                        <PlusCircle className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Upload Front of Card</p>
                      </div>
                    </div>
                    <div className="border border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-accent/50 transition-colors">
                      <div className="flex flex-col items-center justify-center h-full">
                        <PlusCircle className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Upload Back of Card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="hover-scale">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Emergency Contacts</CardTitle>
                  <CardDescription>
                    People to contact in case of emergency
                  </CardDescription>
                </div>
                <Button size="sm" className="hover-scale">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Johnson", relation: "Spouse", phone: "(555) 987-6543" },
                    { name: "Marie Wilson", relation: "Sister", phone: "(555) 456-7890" },
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div>
                        <h4 className="font-medium">{contact.name}</h4>
                        <p className="text-sm text-muted-foreground">{contact.relation}</p>
                        <p className="text-sm">{contact.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-500">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy Settings</CardTitle>
                <CardDescription>
                  Manage how your data is stored and used
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Data Sharing for Research</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow anonymized data to be used for medical research
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about appointments and test results
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium text-lg mb-2">Account Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Export All My Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-500 hover:bg-red-50">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete My Account
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="hover-scale">Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
