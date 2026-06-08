import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";
import { Contact } from "../components/Contact";


export default function Home() {
  return (
    <main className="relative bg-[#F8FAF8]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWA />

    </main>
  );
}