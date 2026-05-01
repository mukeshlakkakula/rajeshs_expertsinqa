"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useState } from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: React.ReactNode;
    image: string;
  };
  variant?: 'glass' | 'corporate' | 'impact' | 'minimal' | 'reveal';
}

export default function ProjectCard({ project, variant = 'glass' }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  switch (variant) {
    case 'corporate':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group p-8 bg-background border border-border/50 rounded-3xl hover:border-brand transition-all duration-500 hover:shadow-xl flex flex-col"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-colors duration-500">
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">{project.category}</span>
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            </div>
          </div>
          <p className="text-foreground/50 text-sm leading-relaxed mb-8 flex-1">
            {project.description}
          </p>
          <Link href={`/projects/${project.id}`} className="text-sm font-bold flex items-center gap-2 text-foreground group-hover:text-brand transition-colors">
            View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      );

    case 'impact':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative h-[450px] rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-8"
        >
          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-2 block">{project.category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>
            <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-xs font-black text-brand uppercase tracking-tighter">
              Explore <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      );

    case 'minimal':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group relative py-12 border-b border-border hover:border-brand transition-colors flex items-start gap-8"
        >
          <div className="text-foreground/20 font-heading text-4xl font-bold group-hover:text-brand transition-colors">
            0{project.id}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
            <p className="text-foreground/50 max-w-2xl">{project.description}</p>
          </div>
        </motion.div>
      );

    case 'reveal':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group relative aspect-[4/5] rounded-3xl overflow-hidden bg-background-secondary shadow-2xl cursor-pointer`}
        >
          <Image src={project.image} alt={project.title} fill className={`object-cover transition-all duration-700 ${isExpanded ? 'grayscale-0 opacity-100 scale-105' : 'opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'}`} />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-60 group-hover:opacity-0'}`} />
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          <div className="absolute inset-x-8 bottom-12 text-white z-10">
            <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-transform duration-500 leading-tight ${isExpanded ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}>{project.title}</h3>
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-48' : 'max-h-0 group-hover:max-h-48'}`}>
              <p className="text-white/90 text-base mb-6 leading-relaxed line-clamp-4">{project.description}</p>
              <Link 
                href={`/projects/${project.id}`} 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 group/btn"
              >
                View Details 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      );

    case 'glass':
    default:
      return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative flex flex-col h-full bg-background-secondary rounded-[2rem] overflow-hidden border border-border/50 hover:border-brand/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5"
        >
          <div className="relative h-64 w-full overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/20 to-transparent" />
            <div className="absolute top-6 left-6 w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-black shadow-xl transform group-hover:rotate-6 transition-transform">
              {project.icon}
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3">{project.category}</span>
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand transition-colors">
              {project.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
              {project.description}
            </p>
            <Link 
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand transition-colors group/link"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-brand/5 rounded-tl-[2rem] transition-all group-hover:bg-brand/10" />
        </motion.div>
      );
  }
}
