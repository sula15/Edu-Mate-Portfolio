"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Research Achievement
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Celebrating our contribution to international research in AI and
            education
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Achievement Card */}
          <Card className="border-[#5f6f52]/10 shadow-lg mb-8">
            <div className="h-3 bg-gradient-to-r from-[#5f6f52] to-[#edb246]"></div>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-[#f6eddd]">
                  <Award className="h-12 w-12 text-[#edb246]" />
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 mx-auto w-fit">
                <CheckCircle className="h-4 w-4 mr-2" />
                Paper Accepted
              </Badge>
              <CardTitle className="text-2xl text-[#5f6f52] font-playfair mb-2">
                International Conference Acceptance
              </CardTitle>
              <p className="text-[#5f6f52]/70">
                Our research has been accepted for presentation at ICGAL2025
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-[#f6eddd]/30 rounded-lg p-6 mb-6">
                <div className="flex items-start mb-4">
                  <FileText className="h-5 w-5 text-[#edb246] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#5f6f52] mb-2">
                      Paper Details
                    </h3>
                    <p className="text-[#5f6f52]/80 mb-2">
                      <strong>Paper ID:</strong> 48
                    </p>
                    <p className="text-[#5f6f52]/80 mb-2">
                      <strong>Title:</strong> Beyond CLIP Cost-Effective
                      Multimodal Retrieval for Education
                    </p>
                  </div>
                </div>

                <div className="prose prose-sm text-[#5f6f52]/80 leading-relaxed">
                  <p className="mb-4">
                    <em>
                      "We are pleased to inform you that your abstract has been
                      accepted for presentation at the conference. We have
                      received your paper/abstract submission via EasyChair, and
                      after a careful and thorough review by our esteemed panel,
                      we are delighted to confirm its acceptance."
                    </em>
                  </p>
                  <p>
                    <em>
                      "Your contribution is highly valued and promises to enrich
                      the discourse on GenAI literacy at this prestigious
                      event."
                    </em>
                  </p>
                </div>
              </div>

              {/* Conference Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-[#5f6f52]/10 bg-gradient-to-br from-blue-50 to-transparent">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-[#5f6f52]">
                        Conference
                      </h4>
                    </div>
                    <p className="text-sm text-[#5f6f52]/80 mb-2">
                      ICGAL2025 - International Conference and Summer Institute
                      on GenAI Literacy
                    </p>
                    <p className="text-xs text-[#5f6f52]/60">
                      Multidisciplinary Research and Practice in the Age of
                      GenAI
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#5f6f52]/10 bg-gradient-to-br from-green-50 to-transparent">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-[#5f6f52]">
                        Event Dates
                      </h4>
                    </div>
                    <p className="text-sm text-[#5f6f52]/80">
                      June 10-13, 2025
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#5f6f52]/10 bg-gradient-to-br from-purple-50 to-transparent">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-[#5f6f52]">Venue</h4>
                    </div>
                    <p className="text-sm text-[#5f6f52]/80 mb-1">
                      Óbuda University, Budapest
                    </p>
                    <p className="text-xs text-[#5f6f52]/60">
                      Bécsi út 96/B, 1034, Hungary
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#5f6f52]/10 bg-gradient-to-br from-[#edb246]/10 to-transparent">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <ExternalLink className="h-5 w-5 text-[#edb246] mr-2" />
                      <h4 className="font-semibold text-[#5f6f52]">Website</h4>
                    </div>
                    <a
                      href="https://www.oxford-i-publishing.com/icgal2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#edb246] hover:text-[#edb246]/80 transition-colors duration-200 underline"
                    >
                      www.oxford-i-publishing.com/icgal2025
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statement */}
          <div className="text-center bg-gradient-to-r from-[#5f6f52]/10 to-[#edb246]/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#5f6f52] mb-4 font-playfair">
              Research Impact
            </h3>
            <p className="text-[#5f6f52]/80 max-w-3xl mx-auto">
              This acceptance represents our commitment to advancing the field
              of AI-driven educational tools and contributing to the global
              discourse on GenAI literacy. Our systematic review provides
              valuable insights for the multidisciplinary research community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
