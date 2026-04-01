// src/app/page.tsx
// Purpose: Main page composing all sections — server-rendered for SEO crawlers
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
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
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallButton />
    </ScrollRevealWrapper>
  );
}
