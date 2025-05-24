"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BarChart, Users, Zap } from "lucide-react";

const achievements = [
  {
    category: "Awards",
    icon: Award,
    items: [
      { title: "Innovation Excellence Award", date: "2024", description: "Recognized for groundbreaking approach in solution design" },
      { title: "Best UX Design", date: "2023", description: "Awarded for exceptional user experience design" },
      { title: "Industry Impact Award", date: "2023", description: "Acknowledged for significant contribution to the industry" }
    ]
  },
  {
    category: "Metrics",
    icon: BarChart,
    items: [
      { title: "99.9% Uptime", date: "2024", description: "Maintained exceptional system reliability" },
      { title: "50% Performance Improvement", date: "2023", description: "Significant boost in system performance" },
      { title: "30% Cost Reduction", date: "2023", description: "Achieved substantial cost savings in operations" }
    ]
  },
  {
    category: "Community",
    icon: Users,
    items: [
      { title: "5,000+ Active Users", date: "2024", description: "Growing community of engaged users" },
      { title: "20+ Community Events", date: "2023", description: "Hosted numerous events to engage with the community" },
      { title: "50+ Open Source Contributions", date: "2023", description: "Actively contributing to the open source ecosystem" }
    ]
  },
  {
    category: "Innovation",
    icon: Zap,
    items: [
      { title: "5 Patent Applications", date: "2024", description: "New technologies developed and patent-pending" },
      { title: "3 Research Publications", date: "2023", description: "Published research findings in respected journals" },
      { title: "2 New Technology Frameworks", date: "2023", description: "Created innovative frameworks adopted by the industry" }
    ]
  }
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("Awards");
  const ActiveIcon = achievements.find(a => a.category === activeTab)?.icon || Award;

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Achievements</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Celebrating our successes and milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Awards" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {achievements.map((achievement) => (
                  <TabsTrigger 
                    key={achievement.category} 
                    value={achievement.category}
                    className="data-[state=active]:bg-[#5f6f52] data-[state=active]:text-white"
                  >
                    {achievement.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-full bg-[#f6eddd]">
                <ActiveIcon className="h-12 w-12 text-[#edb246]" />
              </div>
            </div>
            
            {achievements.map((achievement) => (
              <TabsContent key={achievement.category} value={achievement.category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {achievement.items.map((item, idx) => (
                    <Card key={idx} className="border-[#5f6f52]/10 overflow-hidden">
                      <div className="h-2 bg-[#edb246]"></div>
                      <CardContent className="pt-6">
                        <Badge className="bg-[#5f6f52] hover:bg-[#5f6f52]/90 mb-3">{item.date}</Badge>
                        <h3 className="text-lg font-semibold text-[#5f6f52] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#5f6f52]/70">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}