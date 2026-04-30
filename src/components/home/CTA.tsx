"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[10vw] md:text-[12vw] font-black uppercase tracking-tighter whitespace-nowrap leading-none">
          WORK WITH US
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-heading font-bold text-foreground mb-12 tracking-tighter">
          LET'S <span className="text-brand italic">TALK</span>
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-foreground text-background group hover:bg-brand hover:text-black transition-all duration-700 relative"
        >
          <div className="absolute inset-0 rounded-full border-2 border-foreground group-hover:scale-110 transition-transform duration-700 opacity-20" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-bold">Contact Us</span>
            <ArrowUpRight className="w-8 h-8 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </section>
  );
}
