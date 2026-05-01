"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/Icons";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <GlassHero 
          title="Contact"
          breadcrumb="Contact"
          imageSrc="/assets/about-office.png"
          subtitle="Get in touch with our experts to discuss your QA and engineering needs."
        />

        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              
              {/* Left Column: Contact Info */}
              <motion.div {...fadeIn}>
                <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Contact With Us</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-10 leading-tight">
                  LET'S WORK <span className="text-brand italic">TOGETHER?</span>
                </h2>
                
                <p className="text-lg text-foreground/60 mb-12 max-w-xl leading-relaxed">
                  I have world-class, flexible support via live chat, email and phone. I guarantee that you'll be able to have any issue resolved within 24 hours.
                </p>

                <div className="space-y-10 mb-16">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-500 shadow-lg shadow-brand/5">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">Our Office</h4>
                      <p className="text-lg font-medium text-foreground leading-relaxed max-w-xs">
                        Plot No: 1-110/1, Kamareddy, Hyderabad, Telangana, India - 503111
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-500 shadow-lg shadow-brand/5">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">Call Us</h4>
                      <p className="text-lg font-medium text-foreground">+91 837-469-6572</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-500 shadow-lg shadow-brand/5">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">Email Us</h4>
                      <p className="text-lg font-medium text-foreground">info@expertsinqa.com</p>
                    </div>
                  </div>
                </div>


              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div 
                {...fadeIn}
                className="relative"
              >
                <div className="bg-background-secondary/50 backdrop-blur-2xl border border-border/50 rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-10 text-center">Make a Free Consulting</h3>
                  
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-brand" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h4>
                      <p className="text-foreground/60 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-brand font-bold uppercase tracking-widest text-xs hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">First Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground"
                            placeholder="John"
                            value={formState.firstName}
                            onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Last Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground"
                            placeholder="Doe"
                            value={formState.lastName}
                            onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Company/Organization</label>
                        <input 
                          type="text" 
                          className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground"
                          placeholder="Acme Corp"
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Email</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Phone</label>
                          <input 
                            type="tel" 
                            className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground"
                            placeholder="+1 (555) 000-0000"
                            value={formState.phone}
                            onChange={(e) => setFormState({...formState, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-4">Message</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-6 py-4 bg-background border border-border/50 rounded-2xl focus:outline-none focus:border-brand/50 transition-all text-foreground resize-none"
                          placeholder="How can we help you?"
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-brand text-black rounded-2xl font-bold uppercase tracking-widest hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>

                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 blur-[100px] -z-0" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[100px] -z-0" />
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
