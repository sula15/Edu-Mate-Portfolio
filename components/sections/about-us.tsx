import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Over 10 years of experience in project management and leadership",
    social: {
      linkedin: "#",
      github: "#",
      email: "alex@example.com"
    }
  },
  {
    name: "Samantha Chen",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Full-stack developer with expertise in React and Node.js",
    social: {
      linkedin: "#",
      github: "#",
      email: "samantha@example.com"
    }
  },
  {
    name: "Miguel Rodriguez",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Creating beautiful and intuitive user experiences for over 5 years",
    social: {
      linkedin: "#",
      github: "#",
      email: "miguel@example.com"
    }
  },
  {
    name: "Taylor Williams",
    role: "Data Scientist",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Specializing in machine learning and data analysis",
    social: {
      linkedin: "#",
      github: "#",
      email: "taylor@example.com"
    }
  },
  {
    name: "Jordan Lee",
    role: "Backend Developer",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Expert in building scalable and secure backend systems",
    social: {
      linkedin: "#",
      github: "#",
      email: "jordan@example.com"
    }
  },
  {
    name: "Sarah Patel",
    role: "QA Specialist",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Ensuring quality and reliability through comprehensive testing",
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@example.com"
    }
  }
];

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-[#f6eddd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">Our Team</h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Meet the talented individuals behind our project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden group">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex space-x-3 mb-3">
                    <a href={member.social.linkedin} className="text-white hover:text-[#edb246] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-[#edb246] transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-[#edb246] transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <CardContent className="bg-white p-4">
                <h3 className="text-lg font-semibold text-[#5f6f52]">{member.name}</h3>
                <p className="text-[#edb246] text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}