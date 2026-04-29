"use client";

import Image from "next/image";

const clientLogos = [
  "/assets/clients/client1-preview.png",
  "/assets/clients/client2-preview.png",
  "/assets/clients/client3-preview.png",
  "/assets/clients/client4-preview.png",
  "/assets/clients/client5-preview.png",
  "/assets/clients/client6-preview.png",
  "/assets/clients/client7-preview.png",
];

export default function Clients() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <div className="text-center">
          <span className="text-brand font-bold tracking-widest uppercase text-sm opacity-60">
            Trusted by Leading Organizations
          </span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-0 md:gap-8 items-center py-4">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-72 h-16 md:h-24 relative grayscale invert opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
