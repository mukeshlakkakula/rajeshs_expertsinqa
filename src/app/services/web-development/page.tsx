"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceApproach from "@/components/services/ServiceApproach";
import MeetingRequest from "@/components/services/MeetingRequest";

const webDevSteps = [
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

export default function WebDevelopmentPage() {
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
          title="Web Development"
          breadcrumb="Web Development"
          imageSrc="/assets/about-hero.png"
          subtitle="We specialize in creating high-performance, secure, and scalable web applications that drive business success."
        />

        <ServiceIntro 
          title="Web Development"
          description="We specialize in creating high-performance, secure, and scalable web applications that drive business success. Our team leverages the latest technologies and industry best practices to deliver customized solutions that align with your goals. Whether it's a dynamic website, an e-commerce platform, or a complex web application, we focus on delivering a seamless user experience and robust functionality that meets both user needs and business objectives."
          points={["Responsive Web Design", "End-to-End Web Development", "Custom Web Solutions", "Cutting-Edge Web Technologies"]}
          imageSrc="/assets/about-office.png"
        />

        <ServiceApproach steps={webDevSteps} />

        <MeetingRequest serviceName="Web Development" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
