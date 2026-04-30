"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Development & QA",
    image: "/assets/ecommerce.jpg",
  },
  {
    title: "Health & Wellness App",
    category: "QA Engineering",
    image: "/assets/health_wellness.jpg",
  },
  {
    title: "Financial Dashboard",
    category: "Software Testing",
    image: "/assets/financial_dashboard.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight text-balance">
              Real Solutions <span className="text-brand italic">Delivered</span> <br />
              Through Quality Engineering
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="px-8 py-4 border-2 border-foreground rounded-full font-bold hover:bg-foreground hover:text-[#ffffff] transition-all flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-[#000000]" />
                  </div>
                </div>
              </div>
              <span className="text-brand font-bold text-sm uppercase tracking-wider">{project.category}</span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-2">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
