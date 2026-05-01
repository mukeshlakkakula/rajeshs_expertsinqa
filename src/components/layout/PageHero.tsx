"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  imageSrc: string;
  variant?: 'minimal' | 'split' | 'modern' | 'cinematic' | 'vertical' | 'glass';
}

export default function PageHero({ 
  title, 
  subtitle, 
  breadcrumb, 
  imageSrc, 
  variant = 'minimal' 
}: PageHeroProps) {
  
  const renderVariant = () => {
    switch (variant) {
      case 'cinematic':
        return (
          <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
              <Image 
                src={imageSrc} 
                alt={title} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
              >
                <nav className="flex items-center gap-2 text-brand font-bold uppercase tracking-[0.3em] text-xs mb-8">
                  <Link href="/" className="hover:text-brand/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span>{breadcrumb}</span>
                </nav>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-none">
                  {title}
                </h1>
                <p className="text-xl text-white/60 leading-relaxed max-w-xl border-l-2 border-brand pl-8">
                  {subtitle}
                </p>
              </motion.div>
            </div>
            
            {/* Animated Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
          </section>
        );

      case 'vertical':
        return (
          <section className="relative pt-32 pb-12 overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <nav className="flex items-center justify-center gap-2 text-brand text-sm font-medium mb-8">
                  <Link href="/" className="hover:underline">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-bold">{breadcrumb}</span>
                </nav>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-12 leading-none tracking-tighter">
                  {title}
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image src={imageSrc} alt={title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center px-6">
                  <p className="text-2xl text-white/80 font-heading italic max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Background Text Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/[0.02] uppercase pointer-events-none whitespace-nowrap -z-10">
              {title} {title}
            </div>
          </section>
        );

      case 'glass':
        return (
          <section className="relative pt-32 pb-24 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[75vh]">
            {/* Blurred Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image src={imageSrc} alt="bg" fill className="object-cover blur-xl scale-110 opacity-30" />
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
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-inner">
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

      case 'split':
        return (
          <section className="relative pt-32 pb-20 overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <nav className="flex items-center gap-2 text-brand font-medium mb-6">
                    <Link href="/" className="hover:text-brand/80 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                    <span className="opacity-60">{breadcrumb}</span>
                  </nav>
                  <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-xl text-foreground/60 max-w-xl leading-relaxed">
                      {subtitle}
                    </p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <Image 
                    src={imageSrc} 
                    alt={title} 
                    fill 
                    className="object-cover" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10" />
          </section>
        );

      case 'modern':
        return (
          <section className="relative pt-40 pb-32 overflow-hidden bg-background text-center">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <nav className="inline-flex items-center gap-2 px-4 py-2 bg-background-secondary rounded-full border border-border/50 text-brand text-sm font-medium mb-8">
                  <Link href="/" className="hover:text-brand/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 opacity-40" />
                  <span className="opacity-60">{breadcrumb}</span>
                </nav>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 tracking-tighter">
                  {title}
                </h1>
                <p className="text-2xl text-foreground/50 font-light max-w-2xl mx-auto italic">
                  {subtitle}
                </p>
              </motion.div>
            </div>
            
            {/* Full-width background subtle image or gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
              <Image 
                src={imageSrc} 
                alt="bg" 
                fill 
                className="object-cover opacity-[0.03] grayscale" 
              />
            </div>
          </section>
        );

      case 'minimal':
      default:
        return (
          <section className="relative pt-32 pb-24 overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <nav className="flex items-center gap-2 text-brand text-sm font-medium mb-6">
                    <Link href="/" className="hover:underline opacity-80">Home</Link>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                    <span className="font-bold">{breadcrumb}</span>
                  </nav>
                  <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight tracking-tight">
                    {title}
                  </h1>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-64 h-64 md:w-[450px] md:h-[450px]"
                >
                  <div className="absolute inset-0 rounded-full border-[12px] border-brand/5 animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl bg-brand/10 flex items-center justify-center">
                    <Image 
                      src={imageSrc} 
                      alt={title} 
                      fill 
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <span className="text-brand font-heading text-2xl font-bold opacity-20">QA EXPERTS</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
    }
  };

  return renderVariant();
}
