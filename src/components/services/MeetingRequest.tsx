"use client";

import { motion } from "framer-motion";

interface MeetingRequestProps {
  serviceName?: string;
}

export default function MeetingRequest({ serviceName }: MeetingRequestProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand font-bold tracking-widest uppercase text-xs mb-4 block">Request For A Meeting?</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-12">
            Please Send A Request From Below Form; We'll Get Back <br className="hidden md:block" />
            You Very Shortly.
          </h2>

          <form className="flex flex-col lg:flex-row gap-4 p-4 bg-background-secondary rounded-3xl lg:rounded-full border border-border/50 shadow-xl">
            <select 
              defaultValue={serviceName || "--Select--"}
              className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50 appearance-none"
            >
              <option disabled>--Select--</option>
              <option>UI/UX Design</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>QA Services</option>
            </select>
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="flex-1 px-8 py-4 bg-background rounded-full border border-border/50 text-foreground focus:outline-none focus:border-brand/50"
            />
            <button className="px-10 py-4 bg-brand text-black rounded-full font-bold uppercase tracking-widest hover:bg-brand/90 transition-all">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
