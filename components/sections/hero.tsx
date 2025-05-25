"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#5f6f52]/5 to-[#edb246]/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#5f6f52] mb-6 font-playfair">
              MindMate-Edu Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-[#5f6f52]/80 mb-8 max-w-2xl lg:max-w-none">
              Showcasing our innovative solutions, talented team, and remarkable
              achievements
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
              <Button
                onClick={() => scrollToSection("#project-scope")}
                className="bg-[#5f6f52] hover:bg-[#5f6f52]/90 text-white px-8 py-6"
              >
                Learn More
              </Button>
              <Button
                onClick={() => scrollToSection("#contact-us")}
                variant="outline"
                className="border-[#edb246] text-[#edb246] hover:bg-[#edb246]/10 px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Video Element */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#5f6f52]/10">
              <video
                className="w-full h-auto rounded-xl"
                controls
                poster="/images/logo.png"
                preload="metadata"
              >
                <source src="/hero_video/hero_video.mp4" type="video/mp4" />
                <source src="/hero_video/hero_video.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Decorative elements using brand colors */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#edb246]/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#5f6f52]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
