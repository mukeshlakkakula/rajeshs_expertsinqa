"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    submenus: [
      {
        title: "Development Services",
        items: ["UI/UX Design", "Web Development", "App Development"],
      },
      {
        title: "QA Services",
        items: [
          "AI/ML Testing",
          "Web Application Testing",
          "Mobile App Testing",
          "Automation Testing",
          "Manual Testing",
          "Functional Testing",
          "Performance Testing",
          "Security Testing",
        ],
      },
      {
        title: "IT Training Services",
        items: ["Corporate Training", "Individual Upskilling", "QA Certification"],
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Join Us", href: "/careers" },
];

export default function Header({ isOverDark = false }: { isOverDark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(0);

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
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/assets/favicon-96x96.png"
              alt="QA Experts Logo"
              fill
              className="object-contain dark:invert-0"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav py-4">
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isOverDark
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-brand"
                  }`}
              >
                {link.name}
                {link.submenus && <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform group-hover/nav:rotate-180 ${isOverDark ? "text-white" : ""}`} />}
              </Link>

              {link.submenus && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex min-w-[500px] border border-gray-100">
                    {/* Left Sidebar */}
                    <div className="w-1/2 bg-gray-50/50 p-4 border-r border-gray-100">
                      {link.submenus.map((sub, idx) => (
                        <div
                          key={sub.title}
                          onMouseEnter={() => setActiveSubmenu(idx)}
                          className={`group/sub p-4 rounded-xl cursor-pointer transition-all hover:bg-white hover:shadow-md ${activeSubmenu === idx ? "bg-white shadow-md" : ""
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-bold transition-colors ${activeSubmenu === idx ? "text-brand" : "text-gray-900 group-hover/sub:text-brand"}`}>
                              {sub.title}
                            </span>
                            <ArrowRight className={`w-4 h-4 transition-all ${activeSubmenu === idx ? "text-brand translate-x-1" : "text-gray-400 group-hover/sub:text-brand group-hover/sub:translate-x-1"}`} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Content Area */}
                    <div className="w-1/2 p-6 bg-white">
                      <div className="grid gap-3">
                        {link.submenus[activeSubmenu].items.map((item) => (
                          <Link
                            key={item}
                            href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm text-gray-600 hover:text-brand hover:translate-x-1 transition-all flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand/20 group-hover:bg-brand" />
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:flex items-center px-6 py-2.5 text-sm font-bold text-black dark:text-white bg-brand hover:bg-brand/90 rounded-full transition-all shadow-lg shadow-brand/20"
          >
            Contact Us
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 transition-colors ${isOverDark ? "text-white hover:text-brand" : "text-foreground hover:text-brand"
              }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full px-8 py-8">
          <div className="flex items-center justify-between mb-16">
            <Link href="/" onClick={() => setIsOpen(false)} className="relative w-12 h-12">
              <Image src="/assets/favicon-96x96.png" alt="Logo" fill className="object-contain" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mb-16 overflow-y-auto">
            {navLinks.map((link, i) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-heading font-bold text-foreground hover:text-brand transition-all transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </div>
                
                {link.submenus && isOpen && (
                  <div className="mt-4 ml-4 flex flex-col gap-4 border-l-2 border-brand/20 pl-4">
                    {link.submenus.map((sub) => (
                      <div key={sub.title} className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-brand uppercase tracking-widest">{sub.title}</span>
                        <div className="flex flex-col gap-2">
                          {sub.items.map((item) => (
                            <Link
                              key={item}
                              href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                              onClick={() => setIsOpen(false)}
                              className="text-lg text-foreground/70 hover:text-brand transition-colors"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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

            <div className="flex justify-center gap-8 text-foreground opacity-60 text-sm py-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
