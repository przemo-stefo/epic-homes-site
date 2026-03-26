// src/app/page.tsx
// Purpose: Main page composing all sections — server-rendered for SEO crawlers
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrollRevealWrapper>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Contact />
      <Footer />
    </ScrollRevealWrapper>
  );
}
