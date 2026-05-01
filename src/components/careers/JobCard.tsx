"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 bg-background-secondary border border-border/50 rounded-[2rem] hover:border-brand/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="px-4 py-1.5 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-full">
          {job.department}
        </span>
        <div className="flex items-center gap-2 text-foreground/40 text-xs font-medium">
          <Clock className="w-3.5 h-3.5" />
          {job.type}
        </div>
      </div>

      <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-brand transition-colors">
        {job.title}
      </h3>

      <div className="flex items-center gap-4 mb-6 text-foreground/60 text-sm">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-brand" />
          {job.location}
        </div>
        <div className="w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-brand" />
          {job.department}
        </div>
      </div>

      <p className="text-foreground/50 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
        {job.description}
      </p>

      <Link
        href={`/careers/${job.id}`}
        className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background dark:bg-white dark:text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-black transition-all duration-300 group/btn"
      >
        Apply Now
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
