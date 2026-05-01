"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GlassHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  imageSrc: string;
}

export default function GlassHero({ title, subtitle, breadcrumb, imageSrc }: GlassHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[75vh]">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={imageSrc} 
          alt="bg" 
          fill 
          className="object-cover blur-xl scale-110 opacity-30" 
          priority
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-background-secondary/30 dark:bg-white/5 backdrop-blur-3xl border border-foreground/10 rounded-[4rem] p-12 md:p-24 shadow-2xl flex flex-col md:flex-row items-center gap-16"
          >
            <div className="flex-1">
              <nav className="flex items-center gap-2 text-brand text-sm font-bold uppercase tracking-widest mb-8">
                <Link href="/" className="hover:text-brand transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground/60">{breadcrumb}</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-foreground/50 leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-foreground/20 shadow-inner">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              </div>
            </div>
          </motion.div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-20 h-20 bg-brand rounded-full blur-2xl opacity-20" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10" 
          />
        </div>
      </div>
    </section>
  );
}
