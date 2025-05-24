import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function ProjectScope() {
  return (
    <section id="project-scope" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Project Scope</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            An overview of our project's objectives, goals, and boundaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#5f6f52]">Objectives</CardTitle>
              <CardDescription>The main goals of our project</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['Develop innovative solutions', 'Improve user experience', 'Optimize performance', 'Ensure security'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-[#edb246] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-[#5f6f52]">Deliverables</CardTitle>
              <CardDescription>What we will produce</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['Functional prototype', 'Technical documentation', 'User guides', 'Training materials'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-[#edb246] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-[#5f6f52]">Constraints</CardTitle>
              <CardDescription>Limitations and boundaries</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['Budget limitations', 'Timeline constraints', 'Technical limitations', 'Resource availability'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-[#edb246] mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}