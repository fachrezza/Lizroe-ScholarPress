import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";
import { Contact } from "../components/Contact";
import Tools from "../components/Tools";
import About from "../components/About";
import Workflow from "../components/Workflow";


export default function Home() {
  return (
    <main className="relative bg-[#F8FAF8]">
      <Navbar />
      <Hero />
      <Tools />
      <About />
      <Services />
      <Workflow />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWA />

    </main>
  );
}