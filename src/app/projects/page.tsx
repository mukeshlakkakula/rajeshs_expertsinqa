"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, School, Globe, Cpu, Building2, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";

import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Prime Cleanroom Solution",
    description: "Enterprise-grade quality assurance for cleanroom environmental monitoring systems, ensuring 100% compliance with ISO standards.",
    category: "Industrial Solutions",
    icon: <Cpu className="w-8 h-8" />,
    image: "/assets/about-office.png"
  },
  {
    id: 2,
    title: "United Human Capital",
    description: "Comprehensive testing and security audit for a global HR management platform, handling data for over 50,000 employees.",
    category: "HR Tech",
    icon: <Users className="w-8 h-8" />,
    image: "/assets/about-team.png"
  },
  {
    id: 3,
    title: "QA Versity",
    description: "A state-of-the-art educational platform for QA professionals, featuring automated grading and real-world testing sandboxes.",
    category: "EdTech",
    icon: <School className="w-8 h-8" />,
    image: "/assets/about-approach.png"
  },
  {
    id: 4,
    title: "3G Solutions",
    description: "Performance and load testing for a next-generation telecommunications infrastructure management suite.",
    category: "Telecom",
    icon: <Globe className="w-8 h-8" />,
    image: "/assets/about-hero.png"
  },
  {
    id: 5,
    title: "Nano Soft UK",
    description: "Full-cycle software testing and automation framework development for a leading UK-based software house specializing in SaaS.",
    category: "Software Development",
    icon: <Code2 className="w-8 h-8" />,
    image: "/assets/about-office.png"
  },
  {
    id: 6,
    title: "Property Booking System",
    description: "End-to-end automation of the testing process for a high-traffic real estate portal, improving release cycles by 40%.",
    category: "Real Estate",
    icon: <Building2 className="w-8 h-8" />,
    image: "/assets/about-team.png"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function ProjectsPage() {
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
          title="All Projects"
          breadcrumb="Projects"
          imageSrc="/assets/about-team.png"
          subtitle="Delivering excellence across industries through rigorous quality standards and innovative QA solutions."
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Projects</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Bring The Revolution <br />
                With The <span className="text-brand italic">Diligence Service</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  variant="reveal" 
                />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
