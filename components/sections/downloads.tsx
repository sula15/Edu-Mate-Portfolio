"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  FileText,
  Presentation,
  Calendar,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

// Documents data with Google Drive links
const documents = [
  {
    title: "Final Report",
    description: "Comprehensive final project report",
    date: "January 2025",
    fileSize: "2.4 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
  {
    title: "Research Paper",
    description: "In-depth analysis of research topic",
    date: "January 2025",
    fileSize: "2.4 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
  {
    title: "ML-OPS Document",
    description: "Machine Learning Operations documentation",
    date: "April 2025",
    fileSize: "1.5 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
  {
    title: "Ethical Considerations Document",
    description: "Ethical considerations in research",
    date: "April 2025",
    fileSize: "1.5 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
  {
    title: "Master Sheet of Research Paper",
    description: "Master sheet for project research paper",
    date: "February 2025",
    fileSize: "1.8 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing", // Excel preview
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "XLSX",
  },
  {
    title: "Data Analysis Report",
    description: "Data analysis report for project findings",
    date: "March 2025",
    fileSize: "3.1 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
  {
    title: "Individual Proposal Documents",
    description: "Individual proposal documents for team members",
    date: "March 2025",
    fileSize: "1.5 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1UfsMxKxMpzE-KgA_4RbzwZuwdaBydcH3?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1UfsMxKxMpzE-KgA_4RbzwZuwdaBydcH3?usp=sharing",
    type: "PDF",
  },

  {
    title: "TAF Document",
    description: "Research Evaluation and Technical Assessment Framework",
    date: "April 2025",
    fileSize: "1.5 MB",
    previewUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1kRCZQnKCIo43zvPPAPV4n0gas9OyznNa?usp=sharing",
    type: "PDF",
  },
];

// Presentations data with Google Drive links
const presentations = [
  {
    title: "Research Proposal Presentation",
    description: "Initial research proposal and methodology",
    date: "July 2024",
    fileSize: "17.6 MB",
    thumbnail: "/images/proposalP.jpg",
    previewUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    type: "PPTX",
  },
  {
    title: "Progress Presentation 1",
    description: "First progress presentation with initial findings",
    date: "December 2024",
    fileSize: "78.7 MB",
    thumbnail: "/images/PP1.jpg",
    previewUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    type: "PPTX",
  },
  {
    title: "Progress Presentation 2",
    description: "Second progress presentation with updated results",
    date: "March 2025",
    fileSize: "128.6 MB",
    thumbnail: "/images/PP2.jpg",
    previewUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    downloadUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing",
    type: "PPTX",
  },
  {
    title: "Final Defense Presentation",
    description: "Final project defense with complete findings",
    date: "March 2025",
    fileSize: "18.7 MB",
    thumbnail: "/images/PP3.jpg",
    previewUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing", // Add when available
    downloadUrl:
      "https://drive.google.com/drive/folders/1miG3oFNmsBAilVqHLwWPxCG3gHnkp8wc?usp=sharing", // Add when available
    type: "PPTX",
  },
];

export default function Downloads() {
  const [activeTab, setActiveTab] = useState("documents");

  // Enhanced download handler for Google Drive links
  const handleDownload = (downloadUrl: string, title: string) => {
    if (downloadUrl === "#") {
      alert("File not available yet");
      return;
    }

    // For Google Drive links, open in new tab (forces download)
    window.open(downloadUrl, "_blank");
  };

  // Enhanced preview handler for Google Drive links
  const handlePreview = (previewUrl: string, fileType: string) => {
    if (previewUrl === "#") {
      alert("Preview not available yet");
      return;
    }

    // Open Google Drive preview in new tab
    window.open(previewUrl, "_blank");
  };

  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Downloads
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Access all project-related documents and presentation files
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="documents" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger
                  value="documents"
                  className="data-[state=active]:bg-[#5f6f52] data-[state=active]:text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="presentations"
                  className="data-[state=active]:bg-[#5f6f52] data-[state=active]:text-white"
                >
                  <Presentation className="h-4 w-4 mr-2" />
                  Presentations
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Documents Tab */}
            <TabsContent value="documents" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((document, index) => (
                  <Card
                    key={index}
                    className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-all"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#f6eddd] p-2 rounded-lg">
                          <FileText className="h-6 w-6 text-[#5f6f52]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-[#5f6f52] text-lg">
                            {document.title}
                          </CardTitle>
                          <CardDescription className="text-xs text-[#5f6f52]/60 mt-1 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {document.date} • {document.type} •{" "}
                            {document.fileSize}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#5f6f52]/80">
                        {document.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#5f6f52] text-[#5f6f52] hover:bg-[#5f6f52]/10"
                        onClick={() =>
                          handlePreview(document.previewUrl, document.type)
                        }
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#5f6f52] hover:bg-[#5f6f52]/90"
                        onClick={() =>
                          handleDownload(document.downloadUrl, document.title)
                        }
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Presentations Tab */}
            <TabsContent value="presentations" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presentations.map((presentation, index) => (
                  <Card
                    key={index}
                    className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="aspect-video relative overflow-hidden group">
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
                          onClick={() =>
                            handlePreview(
                              presentation.previewUrl,
                              presentation.type
                            )
                          }
                        >
                          <PlayCircle className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-white text-white hover:bg-white/20"
                          onClick={() =>
                            handleDownload(
                              presentation.downloadUrl,
                              presentation.title
                            )
                          }
                        >
                          <Download className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#f6eddd] p-2 rounded-lg">
                          <Presentation className="h-5 w-5 text-[#5f6f52]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-[#5f6f52] text-base">
                            {presentation.title}
                          </CardTitle>
                          <CardDescription className="text-xs text-[#5f6f52]/60 mt-1 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {presentation.date} • {presentation.type} •{" "}
                            {presentation.fileSize}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-[#5f6f52]/80">
                        {presentation.description}
                      </p>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#5f6f52] text-[#5f6f52] hover:bg-[#5f6f52]/10"
                        onClick={() =>
                          handlePreview(
                            presentation.previewUrl,
                            presentation.type
                          )
                        }
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#5f6f52] hover:bg-[#5f6f52]/90"
                        onClick={() =>
                          handleDownload(
                            presentation.downloadUrl,
                            presentation.title
                          )
                        }
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-[#f6eddd] rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#5f6f52]">
                {documents.length}
              </div>
              <div className="text-sm text-[#5f6f52]/70">Documents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#5f6f52]">
                {presentations.length}
              </div>
              <div className="text-sm text-[#5f6f52]/70">Presentations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#5f6f52]">
                {documents.length + presentations.length}
              </div>
              <div className="text-sm text-[#5f6f52]/70">Total Files</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#5f6f52]">2025</div>
              <div className="text-sm text-[#5f6f52]/70">Academic Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
