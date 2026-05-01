"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceIntroProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function ServiceIntro({ title, description, points, imageSrc }: ServiceIntroProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">{title}</h2>
            <p className="text-lg text-foreground/60 leading-relaxed mb-10">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point) => (
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
                src={imageSrc} 
                alt={title} 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
