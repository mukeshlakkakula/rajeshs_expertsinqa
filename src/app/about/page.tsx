"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";

import GlassHero from "@/components/layout/GlassHero";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        {/* Page Hero */}
        <GlassHero 
          title="About Us"
          breadcrumb="About Us"
          imageSrc="/assets/about-hero.png"
          subtitle="We are a team of dedicated QA experts committed to delivering engineering excellence."
        />

        {/* Why Choose Us Section */}
        <section className="py-24 bg-background-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn} className="relative group">
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden border-[16px] border-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image 
                    src="/assets/about-office.png" 
                    alt="Office" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute bottom-4 right-4 md:bottom-12 md:right-12 w-32 h-32 bg-brand rounded-full flex items-center justify-center text-black font-bold text-lg shadow-xl z-20"
                >
                  Since 2019
                </motion.div>
              </motion.div>

              <motion.div {...fadeIn}>
                <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Why Choose Us</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]">
                  We Maintain Quick And <br />
                  <span className="text-brand italic underline decoration-brand/20 underline-offset-8">High Quality</span> Approach.
                </h2>
                <div className="space-y-6 text-foreground/70 text-lg leading-relaxed max-w-xl">
                  <p>
                    Experts in QA was founded with a clear mission: to elevate the standard of software quality assurance in an increasingly digital world.
                  </p>
                  <p>
                    We specialize in high-end QA services, helping companies worldwide improve their software delivery through discipline, speed, and engineering excellence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preparing For Success Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn} className="order-2 md:order-1">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]">
                  Preparing For Your <br />
                  <span className="text-brand italic">Success</span> We Provide <br />
                  Prominent IT Solutions
                </h2>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl">
                  Your success is our priority. We take a proactive approach to understanding your business challenges and making tailored IT solutions that drive real results.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    { name: "Agility", desc: "Fast & Flexible workflows" },
                    { name: "Quality", desc: "Uncompromising standards" },
                    { name: "Partnership", desc: "Long-term collaboration" },
                    { name: "Productivity", desc: "Efficient & scalable results" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-brand group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground leading-none mb-1">{item.name}</h4>
                        <p className="text-xs text-foreground/40 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="order-1 md:order-2">
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden border-[16px] border-background-secondary shadow-2xl">
                  <Image 
                    src="/assets/about-team.png" 
                    alt="Team Work" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 bg-background-secondary">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
              <motion.div {...fadeIn} className="md:col-span-2">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8">Our Approach</h2>
                <div className="relative mb-12">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand rounded-full" />
                  <p className="text-2xl md:text-3xl text-foreground/80 italic pl-8 font-heading leading-relaxed">
                    "We believe that great software starts with a great understanding of your business."
                  </p>
                </div>
                <p className="text-lg text-foreground/60 leading-relaxed mb-12 max-w-2xl">
                  Our approach is rooted in collaboration and transparency. We work closely with you from day one to understand your goals, challenges, and vision.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <h4 className="text-xl font-bold text-brand mb-3">Customized Solutions</h4>
                    <p className="text-foreground/50 leading-relaxed">Tailored software solutions designed for your unique business needs and market demands.</p>
                  </div>
                  <div className="p-8 bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <h4 className="text-xl font-bold text-brand mb-3">Quality Reliability</h4>
                    <p className="text-foreground/50 leading-relaxed">Delivering dependable software with uncompromising quality and consistent performance.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/assets/about-approach.png" 
                  alt="Colleague" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand/5 backdrop-blur-[2px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Turning Ideas Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <motion.div {...fadeIn} className="flex-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border-[16px] border-background-secondary shadow-2xl">
                  <Image 
                    src="/assets/about-team.png" 
                    alt="Impactful Solutions" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 backdrop-blur-3xl rounded-full -z-10 animate-pulse" />
              </motion.div>

              <motion.div {...fadeIn} className="flex-1">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-10 leading-tight">
                  Turning Ideas into <br />
                  <span className="text-brand italic">Impactful Solutions</span>
                </h2>
                
                <div className="flex items-center gap-8 mb-10">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                      <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand/20" />
                      <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="100 100" className="text-brand" />
                    </svg>
                    <div className="text-center">
                      <span className="text-4xl md:text-5xl font-bold text-brand block">5</span>
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/40">Years</span>
                    </div>
                  </div>
                  <div className="h-20 w-px bg-border" />
                  <p className="text-foreground/60 font-medium italic">
                    "Excellence is not an act, <br /> but a habit."
                  </p>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  At Experts in QA, we specialize in transforming your concepts into powerful, real-world digital products that drive business growth and create meaningful user experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Home CTA Section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
