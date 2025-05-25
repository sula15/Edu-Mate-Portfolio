"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";

const teamMembers = [
  {
    name: "Sulakna Weerasinghe",
    role: "Project Lead",
    image: "/images/sula.jpg",
    bio: "Final Year Undergraduate at SLIIT, specializing in Data Science with expertise in AI and Machine Learning",
    university: "SLIIT",
    year: "4th Year",
    specialization: "Data Science",
    social: {
      linkedin: "https://www.linkedin.com/in/sulakna-weerasinghe/",
      github: "https://github.com/sula15",
      email: "sulaweee@gmail.com",
    },
  },
  {
    name: "Ovindu Gunatunga",
    role: "Full Stack Developer",
    image: "/images/ovindu.jpg",
    bio: "Final Year Undergraduate at SLIIT, specializing in Data Science with focus on Web Development",
    university: "SLIIT",
    year: "Final Year",
    specialization: "Data Science",
    social: {
      linkedin: "https://www.linkedin.com/in/ovindu-gunatunga/",
      github: "https://github.com/ovindumandith",
      email: "ovindumandith@gmail.com",
    },
  },
  {
    name: "Warthula Dewpura",
    role: "Backend Developer",
    image: "/images/warthula.jpg",
    bio: "Final Year Undergraduate at SLIIT, specializing in Data Science with expertise in System Architecture",
    university: "SLIIT",
    year: "Final Year",
    specialization: "Data Science",
    social: {
      linkedin: "https://www.linkedin.com/in/warthula-dewpura/",
      github: "https://github.com/IT21254420",
      email: "it21254420@my.sliit.lk",
    },
  },
  {
    name: "Sanduni Fernando",
    role: "UI/UX Designer",
    image: "/images/sanduni.jpg",
    bio: "Final Year Undergraduate at SLIIT, specializing in Data Science with passion for User Experience Design",
    university: "SLIIT",
    year: "Final Year",
    specialization: "Data Science",
    social: {
      linkedin: "https://www.linkedin.com/in/sanduni-fernando01/",
      github: "https://github.com/sandunikfernando",
      email: "it21063596@my.sliit.lk",
    },
  },
];

const supervisors = [
  {
    name: "Dr. Dharshana Kasthurirathna",
    role: "Research Supervisor",
    image: "/images/dharshana_sir.jpg",
    bio: "Assistant Professor with PhD in Complex Systems from University of Sydney. Research interests include network science, game theory, machine learning, and distributed systems.",
    university: "SLIIT",
    year: "Assistant Professor",
    specialization: "Computer Science",
    social: {
      linkedin: "https://www.linkedin.com/in/dharshana-kasthurirathna-a4a3275/",
      github: "",
      email: "dharshana.k@sliit.lk",
    },
  },
  {
    name: "Mr. Samadhi Rathnayake",
    role: "Research Co-Supervisor",
    image: "/images/samadhi_sir.jpg",
    bio: "Lecturer with MBA and B.Sc (First Class Honours). Research interests in AI, machine learning, and statistical modelling with industry applications.",
    university: "SLIIT",
    year: "Lecturer",
    specialization: "Computer Science",
    social: {
      linkedin: "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/",
      github: "",
      email: "samadhi.r@sliit.lk",
    },
  },
];

export default function AboutUs() {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    name: string
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&size=400&background=5f6f52&color=ffffff`;
  };

  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-br from-[#f6eddd] to-[#f0e6d2]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-[#5f6f52]/10 rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-[#5f6f52]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Meet Our Team
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Passionate students and experienced supervisors working together to
            advance AI-enhanced educational technology
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-[#5f6f52]/20"></div>
            <div className="px-6 py-2 bg-white rounded-full shadow-sm border border-[#5f6f52]/10">
              <h3 className="text-xl font-semibold text-[#5f6f52] flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Student Researchers
              </h3>
            </div>
            <div className="flex-1 h-px bg-[#5f6f52]/20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white"
              >
                <div className="relative">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      onError={(e) => handleImageError(e, member.name)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm mb-3">{member.bio}</p>
                        <div className="flex space-x-3">
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                            aria-label={`${member.name} GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#edb246] text-white text-xs font-medium rounded-full shadow-sm">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-[#5f6f52] mb-1">
                    {member.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-[#5f6f52]/70">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.university} • {member.year}
                    </div>
                    <div className="flex items-center text-sm text-[#5f6f52]/70">
                      <Award className="h-3 w-3 mr-1" />
                      {member.specialization}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-[#5f6f52]/20"></div>
            <div className="px-6 py-2 bg-white rounded-full shadow-sm border border-[#5f6f52]/10">
              <h3 className="text-xl font-semibold text-[#5f6f52] flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Research Supervisors
              </h3>
            </div>
            <div className="flex-1 h-px bg-[#5f6f52]/20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white"
              >
                <div className="relative">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={supervisor.image}
                      alt={supervisor.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      onError={(e) => handleImageError(e, supervisor.name)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm mb-3">
                          {supervisor.bio}
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href={supervisor.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                            aria-label={`${supervisor.name} LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                          {supervisor.social.github &&
                            supervisor.social.github !== "" && (
                              <a
                                href={supervisor.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                                aria-label={`${supervisor.name} GitHub`}
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                          <a
                            href={`mailto:${supervisor.social.email}`}
                            className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#edb246] hover:scale-110 transition-all duration-200"
                            aria-label={`Email ${supervisor.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#5f6f52] text-white text-xs font-medium rounded-full shadow-sm">
                        {supervisor.role}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-[#5f6f52] mb-1">
                    {supervisor.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-[#5f6f52]/70">
                      <MapPin className="h-3 w-3 mr-1" />
                      {supervisor.university} • {supervisor.year}
                    </div>
                    <div className="flex items-center text-sm text-[#5f6f52]/70">
                      <Award className="h-3 w-3 mr-1" />
                      {supervisor.specialization}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#5f6f52]/10">
            <h3 className="text-2xl font-bold text-[#5f6f52] mb-4">
              Interested in Our Research?
            </h3>
            <p className="text-[#5f6f52]/70 mb-6 max-w-2xl mx-auto">
              Learn more about our AI-enhanced RAG systems project and how we
              are revolutionizing educational technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#downloads"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#5f6f52] text-white rounded-lg hover:bg-[#5f6f52]/90 transition-colors"
              >
                View Documentation
              </a>
              <a
                href="mailto:sulaweee@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#5f6f52] text-[#5f6f52] rounded-lg hover:bg-[#5f6f52] hover:text-white transition-colors"
              >
                Contact Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
