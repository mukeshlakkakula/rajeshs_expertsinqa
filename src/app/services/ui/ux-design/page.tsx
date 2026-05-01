"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const steps = [
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

        {/* Intro Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">UX/UI Design</h2>
                <p className="text-lg text-foreground/60 leading-relaxed mb-10">
                  We craft intuitive and visually engaging interfaces that deliver seamless user experiences. Our design process focuses on usability, accessibility, and aesthetics to ensure your product not only looks great but also functions flawlessly. From wireframes to final prototypes, we turn ideas into designs that users love to interact with.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["User-Centered Design", "Seamless Navigation", "Interactive Prototypes", "Mobile-First Experiences"].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-[16px] border-background-secondary shadow-2xl">
                  <Image 
                    src="/assets/about-team.png" 
                    alt="Design Process" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 bg-background-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Our Approach</h2>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-brand/20 hidden lg:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand text-black flex items-center justify-center font-bold text-lg mb-8 shadow-lg shadow-brand/20 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-sm text-foreground/50 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mini Request Form Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto">
              <span className="text-brand font-bold tracking-widest uppercase text-xs mb-4 block">Request For A Meeting?</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-12">
                Please Send A Request From Below Form; We'll Get Back <br className="hidden md:block" />
                You Very Shortly.
              </h2>

              <form className="flex flex-col lg:flex-row gap-4 p-4 bg-background-secondary rounded-3xl lg:rounded-full border border-border/50 shadow-xl">
                <select className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50">
                  <option>--Select--</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                </select>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50"
                />
                <button className="px-10 py-4 bg-brand text-black rounded-full font-bold uppercase tracking-widest hover:bg-brand/90 transition-all">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
