"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

// Sample milestone data
const milestones = [
  {
    phase: "Planning",
    items: [
      { title: "Project Initiation", date: "2024-01-15", completed: true },
      { title: "Requirements Gathering", date: "2024-02-01", completed: true },
      { title: "Scope Definition", date: "2024-02-15", completed: true },
    ]
  },
  {
    phase: "Development",
    items: [
      { title: "Design Phase", date: "2024-03-01", completed: true },
      { title: "Development Sprint 1", date: "2024-03-15", completed: true },
      { title: "Development Sprint 2", date: "2024-04-01", completed: false },
      { title: "Development Sprint 3", date: "2024-04-15", completed: false },
    ]
  },
  {
    phase: "Testing",
    items: [
      { title: "Quality Assurance", date: "2024-05-01", completed: false },
      { title: "User Acceptance Testing", date: "2024-05-15", completed: false },
    ]
  },
  {
    phase: "Deployment",
    items: [
      { title: "Deployment Planning", date: "2024-06-01", completed: false },
      { title: "Go Live", date: "2024-06-15", completed: false },
      { title: "Post-Implementation Review", date: "2024-07-01", completed: false },
    ]
  },
];

export default function Milestones() {
  const [activeTab, setActiveTab] = useState("Planning");

  return (
    <section id="milestones" className="py-20 bg-[#f6eddd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Project Milestones</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Key project milestones and their current status
          </p>
        </div>

        <Tabs defaultValue="Planning" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {milestones.map((milestone) => (
              <TabsTrigger 
                key={milestone.phase} 
                value={milestone.phase}
                className={`data-[state=active]:bg-[#5f6f52] data-[state=active]:text-white`}
              >
                {milestone.phase}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {milestones.map((milestone) => (
            <TabsContent key={milestone.phase} value={milestone.phase} className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#5f6f52]">{milestone.phase} Phase</CardTitle>
                  <CardDescription>
                    {milestone.items.filter(item => item.completed).length} of {milestone.items.length} milestones completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {milestone.items.map((item, index) => (
                      <div key={index} className="flex items-start justify-between p-3 rounded-lg bg-[#f6eddd] border border-[#5f6f52]/10">
                        <div className="flex items-start">
                          <CheckCircle2 className={`h-5 w-5 mr-3 mt-0.5 ${item.completed ? 'text-[#5f6f52]' : 'text-gray-300'}`} />
                          <div>
                            <p className="font-medium text-[#5f6f52]">{item.title}</p>
                            <div className="flex items-center text-sm text-[#5f6f52]/70 mt-1">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              {format(new Date(item.date), 'MMMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {item.completed ? 'Completed' : 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}