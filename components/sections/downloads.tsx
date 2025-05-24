"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, FileCode, Database, Lock, FileSpreadsheet } from "lucide-react";

const downloadItems = [
  {
    title: "User Manual",
    description: "Complete guide for end users",
    icon: FileText,
    fileSize: "2.4 MB",
    downloadUrl: "#",
    type: "PDF"
  },
  {
    title: "Technical Documentation",
    description: "System architecture and specifications",
    icon: FileCode,
    fileSize: "3.1 MB",
    downloadUrl: "#",
    type: "PDF"
  },
  {
    title: "Sample Dataset",
    description: "Test data for implementation",
    icon: Database,
    fileSize: "1.8 MB",
    downloadUrl: "#",
    type: "CSV"
  },
  {
    title: "Security Guidelines",
    description: "Best practices for system security",
    icon: Lock,
    fileSize: "1.2 MB",
    downloadUrl: "#",
    type: "PDF"
  },
  {
    title: "Implementation Plan",
    description: "Step-by-step deployment guide",
    icon: FileText,
    fileSize: "2.7 MB",
    downloadUrl: "#",
    type: "PDF"
  },
  {
    title: "Project Timeline",
    description: "Detailed project schedule",
    icon: FileSpreadsheet,
    fileSize: "0.9 MB",
    downloadUrl: "#",
    type: "XLSX"
  }
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Downloads</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Access all project-related files and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadItems.map((item, index) => (
            <Card key={index} className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#f6eddd] p-2 rounded-lg">
                    <item.icon className="h-6 w-6 text-[#5f6f52]" />
                  </div>
                  <div>
                    <CardTitle className="text-[#5f6f52] text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-xs text-[#5f6f52]/60 mt-1">
                      {item.type} • {item.fileSize}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#5f6f52]/80">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-[#5f6f52] hover:bg-[#5f6f52]/90"
                  variant="default"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}