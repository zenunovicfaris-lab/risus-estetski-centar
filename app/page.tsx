import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Brands from "@/components/sections/Brands";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Services />
      <Results />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
