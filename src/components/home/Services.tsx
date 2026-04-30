"use client";

import { Code2, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Development Services",
    description: "Custom software solutions tailored to your business needs, built with modern technologies.",
    icon: Code2,
  },
  {
    title: "QA Services",
    description: "Comprehensive quality assurance and testing to ensure your software is bug-free and reliable.",
    icon: ShieldCheck,
  },
  {
    title: "IT Training Services",
    description: "Professional training programs to upskill your team and stay ahead in the tech landscape.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background-secondary text-foreground overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-2xl md:text-5xl font-heading font-bold mb-6 text-balance">
            Engineering Excellence With <br />
            <span className="text-brand italic">Discipline & Speed</span>
          </h2>
          <p className="text-foreground opacity-70 text-lg">
            We deliver high-end solutions through a disciplined approach to software engineering, ensuring your business stays ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-brand/50 transition-all duration-500 flex flex-col items-center text-center shadow-sm dark:shadow-none"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-foreground opacity-70 leading-relaxed mb-8">
                {service.description}
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-brand font-bold group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
