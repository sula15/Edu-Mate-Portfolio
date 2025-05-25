"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Project Scope", href: "#project-scope" },
  { name: "Milestones", href: "#milestones" },
  { name: "Downloads", href: "#downloads" },
  { name: "About Us", href: "#about-us" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set header background when scrolled
      setIsScrolled(window.scrollY > 10);

      // Find the active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  const scrollToHome = () => {
    scrollToSection("#home");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#f6eddd] shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={scrollToHome}
        >
          {/* Logo Image */}
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png" // Replace with your logo path
              alt="EduMate Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>

          {/* Brand Text */}
          <div className="font-bold text-[#5f6f52] text-xl font-playfair transition-colors duration-300 group-hover:text-[#edb246]">
            MindMate-Edu
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-[#edb246] font-semibold"
                  : "text-[#5f6f52] hover:text-[#edb246]"
              )}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#5f6f52] hover:text-[#edb246]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f6eddd] border-t border-[#5f6f52]/10 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "justify-start text-sm font-medium",
                    activeSection === item.href.substring(1)
                      ? "text-[#edb246] font-semibold"
                      : "text-[#5f6f52]"
                  )}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
