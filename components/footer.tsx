"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5f6f52] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">
              Project Portfolio
            </h3>
            <p className="text-white/80 mb-4">
              Showcasing our innovative solutions, talented team, and remarkable
              achievements.
            </p>
            <Button
              variant="outline"
              className="border-white/80 text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg"
              asChild
            >
              <a
                href="https://github.com/sula15/MindMate-Edu.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Project Scope", "Milestones", "Downloads"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["About Us", "Achievements"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-white/80">
              SLIIT Malabe Campus, New Kandy Road,
              <br />
              Malabe, Sri Lanka
              <br />
              +94 70 214 0856
              <br />
              +94 76 194 4580
              <br /> +94 76 419 0521
              <br /> +94 77 084 0728
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {currentYear} Project Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
