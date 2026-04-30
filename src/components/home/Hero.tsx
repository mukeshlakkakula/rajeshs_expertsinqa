"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down to half speed
    }
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[95vh] md:p-6 md:pb-0 bg-background">
      <div className="relative w-full h-full md:rounded-[3rem] overflow-hidden bg-black shadow-2xl">
        {/* Header inside the rounded container */}
        <Header />

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero-poster.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/herosectionVid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000]/70 via-[#000000]/40 to-[#000000]/70 md:bg-gradient-to-r md:from-[#000000]/80 md:via-[#000000]/20 md:to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 md:items-start md:text-left md:px-20">
          <div className="max-w-3xl mt-8 md:mt-20">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-[#ffffff] leading-[1.1] tracking-tight text-balance">
              Your Trusted
              <br />
              <span className="text-brand font-bold drop-shadow-sm">QA Experts</span>
            </h1>

            <div className="mt-10 md:mt-20">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold text-[#ffffff] bg-brand hover:bg-brand/90 rounded-full transition-all duration-300 group shadow-xl shadow-brand/20 active:scale-95"
              >
                Free Consultation
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Side Indicator (Vertical) */}
        {/* <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 text-white/50 text-xs font-bold">
          <span>01</span>
          <div className="w-[2px] h-24 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/3 bg-brand" />
          </div>
          <span>03</span>
        </div> */}

        {/* Bottom Tab Navigation */}

      </div>
    </section>
  );
}
