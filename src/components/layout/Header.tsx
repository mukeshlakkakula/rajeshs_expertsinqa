"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-12 md:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/QAlogo.svg"
              alt="QA Experts in QA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-[#ffffff] opacity-90 hover:opacity-100 transition-opacity"
            >
              {link.name}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </Link>
          ))}
          <Link
            href="/insights"
            className="px-5 py-2 text-sm font-medium text-[#ffffff] bg-[#ffffff]/10 hover:bg-[#ffffff]/20 backdrop-blur-md rounded-full transition-all"
          >
            Insight
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 backdrop-blur-md text-[#ffffff] transition-all">
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/contact"
            className="hidden md:flex items-center px-6 py-2.5 text-sm font-bold text-[#ffffff] bg-brand hover:bg-brand/90 rounded-full transition-all shadow-lg shadow-brand/20"
          >
            Contact Us
          </Link>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-[#ffffff] hover:text-brand transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8">
          <div className="flex items-center justify-between mb-16">
             <Link href="/" onClick={() => setIsOpen(false)} className="relative w-12 h-12">
               <Image src="/QAlogo.svg" alt="Logo" fill className="object-contain" />
             </Link>
             <button 
               onClick={() => setIsOpen(false)}
               className="w-12 h-12 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-[#ffffff]"
             >
               <X className="w-6 h-6" />
             </button>
          </div>

          <nav className="flex flex-col gap-8 mb-16">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-heading font-bold text-[#ffffff] hover:text-brand transition-all transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full p-6 bg-brand rounded-3xl text-[#000000] font-bold group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <div className="flex justify-center gap-8 text-[#ffffff] opacity-60 text-sm py-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
