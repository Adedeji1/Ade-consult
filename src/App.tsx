import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeHelp from "./components/WhoWeHelp";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function AdeConsults() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = ["contact", "pricing", "work", "services", "home"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFBFE", color: "#0A1628" }}>
      <Navbar
        scrolled={scrolled}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      <Hero scrollTo={scrollTo} />
      <WhoWeHelp />
      <Portfolio />
      <Pricing scrollTo={scrollTo} />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
