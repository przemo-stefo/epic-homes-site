// src/app/page.tsx
// Purpose: Main page — 1:1 matching Wix layout
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
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
      <Footer />
      <MobileCallButton />
    </ScrollRevealWrapper>
  );
}
