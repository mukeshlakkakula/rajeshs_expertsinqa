"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceApproach from "@/components/services/ServiceApproach";
import MeetingRequest from "@/components/services/MeetingRequest";

const uxSteps = [
  {
    number: "1",
    title: "User Research",
    description: "We conduct in-depth research to understand user behaviors, needs, and pain points, ensuring the design aligns with real user expectations."
  },
  {
    number: "2",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes and interactive prototypes to bring your ideas to life. We focus on delivering a seamless user experience aligned with your brand."
  },
  {
    number: "3",
    title: "UI Design",
    description: "We focus on creating visually appealing interfaces with attention to detail, ensuring the design is user-friendly and reflects your brand identity."
  },
  {
    number: "4",
    title: "Usability Testing",
    description: "Through testing and user feedback, we validate design decisions and ensure the solution is intuitive, accessible, and easy to navigate."
  },
  {
    number: "5",
    title: "Final Design",
    description: "We finalize the design, ensuring all elements are polished and ready for development, providing clear guidelines and assets for a smooth handoff."
  }
];

export default function UIUXDesignPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <GlassHero 
          title="UX/UI Design"
          breadcrumb="UX/UI Design"
          imageSrc="/assets/about-approach.png"
          subtitle="We craft intuitive and visually engaging interfaces that deliver seamless user experiences."
        />

        <ServiceIntro 
          title="UX/UI Design"
          description="We craft intuitive and visually engaging interfaces that deliver seamless user experiences. Our design process focuses on usability, accessibility, and aesthetics to ensure your product not only looks great but also functions flawlessly. From wireframes to final prototypes, we turn ideas into designs that users love to interact with."
          points={["User-Centered Design", "Seamless Navigation", "Interactive Prototypes", "Mobile-First Experiences"]}
          imageSrc="/assets/about-team.png"
        />

        <ServiceApproach steps={uxSteps} />

        <MeetingRequest serviceName="UI/UX Design" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
