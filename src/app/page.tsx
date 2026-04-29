import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Stats from "@/components/home/Stats";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Stats />

      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
