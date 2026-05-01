"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceApproach from "@/components/services/ServiceApproach";
import MeetingRequest from "@/components/services/MeetingRequest";

const appDevSteps = [
  {
    number: "1",
    title: "Discovery & Research",
    description: "We start by understanding your business goals and challenges through in-depth research. This helps us align the project with your vision and audience needs."
  },
  {
    number: "2",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes and interactive prototypes to bring your ideas to life. We focus on delivering a seamless user experience aligned with your brand."
  },
  {
    number: "3",
    title: "Development & Implementation",
    description: "We turn designs into functional software using agile methodologies. Our development process ensures high-quality, scalable solutions."
  },
  {
    number: "4",
    title: "Testing Device & Release.",
    description: "We conduct rigorous testing to ensure the solution works flawlessly across all platforms. Our goal is to deliver a bug-free, high-performance product."
  },
  {
    number: "5",
    title: "Launch & Deployment",
    description: "We ensure a smooth launch by managing the deployment process and minimizing disruptions. Our team provides the necessary training for a successful transition."
  }
];

export default function AppDevelopmentPage() {
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
          title="App Development"
          breadcrumb="App Development"
          imageSrc="/assets/about-approach.png"
          subtitle="We design and develop intuitive, high-performance mobile applications tailored to your business needs."
        />

        <ServiceIntro 
          title="App Development"
          description="We design and develop intuitive, high-performance mobile applications tailored to your business needs. Whether you're looking for a native mobile app or a cross-platform solution, our team uses the latest technologies to create seamless and engaging experiences for your users. From concept to deployment, we ensure your app is optimized for performance, scalability, and user satisfaction."
          points={["Native & Cross Platform Apps", "User Centered Design", "Custom Mobile Solutions", "Scalable Mobile Apps"]}
          imageSrc="/assets/about-hero.png"
        />

        <ServiceApproach steps={appDevSteps} />

        <MeetingRequest serviceName="App Development" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
