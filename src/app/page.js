import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teachings from "@/components/Teachings";
import VisitAshram from "@/components/VisitAshram";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Donations from "@/components/Donations";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Teachings />
      <VisitAshram />
      <Programs />
      <Testimonials />
      <Donations />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
