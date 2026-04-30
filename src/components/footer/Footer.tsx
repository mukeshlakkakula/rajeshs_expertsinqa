"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-[#ffffff] py-24 border-t border-[#ffffff]/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <div className="relative w-16 h-16">
                <Image src="/assets/favicon.ico" alt="Experts in QA Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-[#ffffff] opacity-60 leading-relaxed mb-8">
              High-end IT and QA services dedicated to engineering excellence with discipline and speed.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center hover:bg-brand hover:text-[#000000] transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand">Quick Links</h4>
            <ul className="space-y-4 text-[#ffffff] opacity-70">
              {["Home", "Services", "Industries", "About", "Portfolio"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-brand transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand">Services</h4>
            <ul className="space-y-4 text-[#ffffff] opacity-70">
              {["Development Services", "QA Services", "IT Training Services"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-brand transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand">Address</h4>
            <ul className="space-y-6 text-[#ffffff] opacity-70">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
                <span>123, Tech Plaza, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <span>+91 987 654 3210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                <span>info@expertsinqa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#ffffff]/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[#ffffff] opacity-50 text-sm">
          <p>© {new Date().getFullYear()} Experts in QA. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#ffffff]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#ffffff]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
