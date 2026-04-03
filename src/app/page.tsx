// src/app/page.tsx
// Purpose: Main page composing all sections — Wix-style layout order
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  return (
    <ScrollRevealWrapper>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallButton />
    </ScrollRevealWrapper>
  );
}
