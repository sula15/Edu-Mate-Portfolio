"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5f6f52] mb-6 font-playfair">
          Project Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-[#5f6f52]/80 mb-8 max-w-2xl mx-auto">
          Showcasing our innovative solutions, talented team, and remarkable achievements
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => scrollToSection('#project-scope')}
            className="bg-[#5f6f52] hover:bg-[#5f6f52]/90 text-white px-8 py-6"
          >
            Learn More
          </Button>
          <Button 
            onClick={() => scrollToSection('#contact-us')}
            variant="outline" 
            className="border-[#edb246] text-[#edb246] hover:bg-[#edb246]/10 px-8 py-6"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}