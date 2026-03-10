import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teachings from "@/components/Teachings";
import VisitAshram from "@/components/VisitAshram";
import Programs from "@/components/Programs";
import Donations from "@/components/Donations";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
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
      <Donations />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}
