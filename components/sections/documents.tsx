"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";

const documents = [
  {
    title: "Project Charter",
    description: "Official project authorization document",
    date: "January 2024",
    fileSize: "1.2 MB",
    downloadUrl: "#"
  },
  {
    title: "System Requirements",
    description: "Detailed system requirements specification",
    date: "February 2024",
    fileSize: "2.8 MB",
    downloadUrl: "#"
  },
  {
    title: "Design Documentation",
    description: "Architecture and interface design documents",
    date: "March 2024",
    fileSize: "3.5 MB",
    downloadUrl: "#"
  },
  {
    title: "Testing Strategy",
    description: "Comprehensive testing approach and methodology",
    date: "April 2024",
    fileSize: "1.7 MB",
    downloadUrl: "#"
  }
];

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Documents</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Access important project documentation and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {documents.map((document, index) => (
            <Card key={index} className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-[#f6eddd] p-3 rounded-md">
                  <FileText className="h-6 w-6 text-[#5f6f52]" />
                </div>
                <div>
                  <CardTitle className="text-lg text-[#5f6f52]">{document.title}</CardTitle>
                  <p className="text-xs text-[#5f6f52]/60 mt-1">
                    {document.date} • {document.fileSize}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#5f6f52]/80">
                  {document.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#5f6f52] text-[#5f6f52] hover:bg-[#5f6f52]/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button 
                  size="sm" 
                  className="bg-[#5f6f52] hover:bg-[#5f6f52]/90"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-[#edb246] text-[#edb246] hover:bg-[#edb246]/10"
          >
            View All Documents
          </Button>
        </div>
      </div>
    </section>
  );
}