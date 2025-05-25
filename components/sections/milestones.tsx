"use client";

import {
  CheckCircle,
  Circle,
  Calendar,
  FileText,
  Presentation,
  Globe,
  Users,
  Award,
} from "lucide-react";

interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  date: string;
  icon: React.ReactNode;
}

export default function Milestones() {
  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      title: "Project Initiation",
      description:
        "Team formation, project scope definition, and initial planning phase",
      status: "completed",
      date: "April 2024",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Topic Assessment Form (TAF)",
      description:
        "Formal topic evaluation and approval from academic committee",
      status: "completed",
      date: "May 2024",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Proposal Presentation",
      description: "Initial project proposal presentation to stakeholders",
      status: "completed",
      date: "July 2024",
      icon: <Presentation className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Progress Presentation 1",
      description:
        "First major milestone presentation with technical demonstrations",
      status: "completed",
      date: "December 2024",
      icon: <Presentation className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Progress Presentation 2",
      description:
        "Second milestone review with advanced feature implementations",
      status: "completed",
      date: "May 2024",
      icon: <Presentation className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Research Paper Submission",
      description:
        "Comprehensive research documentation and academic paper submission",
      status: "completed",
      date: "March 2025",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 7,
      title: "Completion of Full System",
      description: "Final system integration, testing, and optimization phase",
      status: "completed",
      date: "May 2025",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      id: 8,
      title: "Project Website Launch",
      description:
        "Official launch of the project portfolio website and system deployment",
      status: "completed",
      date: "May 2025",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: 9,
      title: "Final Presentation/Defence",
      description: "Project defense and comprehensive system demonstration",
      status: "current",
      date: "May 2025",
      icon: <Award className="w-5 h-5" />,
    },
    

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100 border-green-200";
      case "current":
        return "text-[#edb246] bg-[#edb246]/10 border-[#edb246]/30";
      case "upcoming":
        return "text-gray-500 bg-gray-50 border-gray-200";
      default:
        return "text-gray-500 bg-gray-50 border-gray-200";
    }
  };

  const getLineColor = (status: string, nextStatus?: string) => {
    if (status === "completed") return "bg-green-500";
    if (status === "current" || nextStatus === "current") return "bg-[#edb246]";
    return "bg-gray-300";
  };

  return (
    <section id="milestones" className="py-20 bg-[#f6eddd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Project Roadmap
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Track our journey from conception to completion through these key
            milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#5f6f52]/20"></div>

            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${getStatusColor(
                    item.status
                  )} mr-8 flex-shrink-0`}
                >
                  {item.status === "completed" ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : item.status === "current" ? (
                    <div className="w-3 h-3 bg-[#edb246] rounded-full animate-pulse"></div>
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                {/* Connecting line to next item */}
                {index < roadmapItems.length - 1 && (
                  <div
                    className={`absolute left-8 top-16 w-0.5 h-12 ${getLineColor(
                      item.status,
                      roadmapItems[index + 1]?.status
                    )}`}
                  ></div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white rounded-lg shadow-lg border border-[#5f6f52]/10 p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#5f6f52] mb-1">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-[#5f6f52]/60" />
                            <span className="text-sm text-[#5f6f52]/70">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-[#5f6f52]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-[#5f6f52]/10">
          <h3 className="text-2xl font-semibold text-[#5f6f52] mb-6 text-center font-playfair">
            Project Progress
          </h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">
                {
                  roadmapItems.filter((item) => item.status === "completed")
                    .length
                }
              </div>
              <div className="text-sm text-[#5f6f52]/70">Completed</div>
              <div className="w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#edb246]">
                {
                  roadmapItems.filter((item) => item.status === "current")
                    .length
                }
              </div>
              <div className="text-sm text-[#5f6f52]/70">In Progress</div>
              <div className="w-full bg-[#edb246]/20 rounded-full h-2">
                <div className="bg-[#edb246] h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-500">
                {
                  roadmapItems.filter((item) => item.status === "upcoming")
                    .length
                }
              </div>
              <div className="text-sm text-[#5f6f52]/70">Upcoming</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-[#5f6f52]/70 mb-2">
              <span>Overall Progress</span>
              <span>
                {Math.round(
                  (roadmapItems.filter((item) => item.status === "completed")
                    .length /
                    roadmapItems.length) *
                    100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-[#edb246] h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    (roadmapItems.filter((item) => item.status === "completed")
                      .length /
                      roadmapItems.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
