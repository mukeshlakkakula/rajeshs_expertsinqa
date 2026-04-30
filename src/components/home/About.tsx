"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* First About Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-32">
          <div className="w-full flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              
              <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-gray-50">
                <Image
                  src="/assets/qa_team.png"
                  alt="Quality Assurance Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Quality First</span>
            <h2 className="text-2xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
              Where Speed Meets <br />
              <span className="text-brand italic">Quality</span>
            </h2>
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-8">
              Our team of experts is dedicated to providing you with the best solutions for your business. We provide high-end IT services to our clients, ensuring that every project is delivered with the highest standards of quality and efficiency.
            </p>
            <div className="flex flex-col gap-4">
              {["Fast Delivery", "Quality Testing"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second About Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="w-full flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-gray-50">
                <Image
                  src="/assets/consulting.png"
                  alt="Consulting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Unlocking Potential</span>
            <h2 className="text-2xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
              Unlock The <span className="text-brand">Potential</span> <br />
              Of Your Business
            </h2>
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-8">
              We empower businesses through innovative technology and meticulous quality assurance. Our approach combines speed with discipline to deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Software Development", "Testing & Quality Analysis"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
