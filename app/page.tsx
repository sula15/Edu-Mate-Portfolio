import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import ProjectScope from '@/components/sections/project-scope';
import Milestones from '@/components/sections/milestones';
import Downloads from '@/components/sections/downloads';
import AboutUs from '@/components/sections/about-us';
import Achievements from '@/components/sections/achievements';
import ContactUs from '@/components/sections/contact-us';
import Documents from '@/components/sections/documents';
import Presentations from '@/components/sections/presentations';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6eddd]">
      <Header />
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <Hero />
        <ProjectScope />
        <Milestones />
        <Downloads />
        <AboutUs />
        <Achievements />
        <ContactUs />

        <Footer />
      </div>
    </main>
  );
}