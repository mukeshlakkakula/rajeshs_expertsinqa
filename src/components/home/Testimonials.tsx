"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mac Alen, Smith",
    role: "Senior Developer",
    content: "The level of expertise and attention to detail provided by Experts in QA is unparalleled. They've significantly improved our deployment quality.",
    avatar: "/assets/avatar_male.png",
  },
  {
    name: "Riana",
    role: "Lead Developer",
    content: "Fast, disciplined, and highly professional. Their QA services have been a game-changer for our engineering team.",
    avatar: "/assets/avatar_female.png",
  },
];


export default function Testimonials() {
  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-2xl md:text-5xl font-heading font-bold text-[#ffffff] leading-tight mb-8 text-balance">
              What Our <span className="text-brand italic">Clients</span> <br />
              Say About Us
            </h2>
            <div className="flex items-center gap-4 text-white/20">
              <Quote className="w-16 h-16" />
            </div>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative overflow-hidden"
              >
                <div className="flex gap-1 text-brand mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand" />
                  ))}
                </div>
                <p className="text-[#ffffff] opacity-80 text-lg leading-relaxed mb-8 relative z-10 italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand/20">
                    <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#ffffff] font-bold">{t.name}</h4>
                    <span className="text-[#ffffff] opacity-60 text-sm font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
