"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ExternalLink, Calendar, PlayCircle } from "lucide-react";

const presentations = {
  "2024": [
    {
      title: "Q1 Project Update",
      date: "March 15, 2024",
      thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Stakeholder Presentation",
      date: "February 20, 2024",
      thumbnail: "https://images.pexels.com/photos/7688254/pexels-photo-7688254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Project Kickoff",
      date: "January 10, 2024",
      thumbnail: "https://images.pexels.com/photos/7688168/pexels-photo-7688168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "#",
      downloadUrl: "#"
    }
  ],
  "2023": [
    {
      title: "Annual Review",
      date: "December 15, 2023",
      thumbnail: "https://images.pexels.com/photos/7688166/pexels-photo-7688166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Technical Deep Dive",
      date: "November 5, 2023",
      thumbnail: "https://images.pexels.com/photos/7688164/pexels-photo-7688164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      previewUrl: "#",
      downloadUrl: "#"
    }
  ]
};

const years = Object.keys(presentations);

export default function Presentations() {
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section id="presentations" className="py-20 bg-[#f6eddd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Past Presentations</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            View and download our project presentation slides
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={years[0]} onValueChange={setActiveYear}>
            <div className="flex justify-center mb-8">
              <TabsList>
                {years.map((year) => (
                  <TabsTrigger 
                    key={year} 
                    value={year}
                    className="data-[state=active]:bg-[#5f6f52] data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {years.map((year) => (
              <TabsContent key={year} value={year} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {presentations[year as keyof typeof presentations].map((presentation, idx) => (
                    <Card key={idx} className="border-none shadow-md overflow-hidden group">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={presentation.thumbnail} 
                          alt={presentation.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full border-white text-white hover:bg-white/20 mr-2"
                          >
                            <PlayCircle className="h-6 w-6" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full border-white text-white hover:bg-white/20"
                          >
                            <Download className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="bg-white p-4">
                        <div className="flex items-center text-xs text-[#5f6f52]/70 mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {presentation.date}
                        </div>
                        <h3 className="text-[#5f6f52] font-medium">{presentation.title}</h3>
                        <div className="flex mt-3 space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs border-[#5f6f52] text-[#5f6f52] hover:bg-[#5f6f52]/10 h-8 px-2 py-1"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            className="text-xs bg-[#5f6f52] hover:bg-[#5f6f52]/90 h-8 px-2 py-1"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
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