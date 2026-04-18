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
  const [activeSection, setActiveSection] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Plus Jakarta Sans', sans-serif !important; }

        @keyframes acFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(0.5deg); }
        }

        .ac-desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .ac-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .ac-desktop-nav { display: none !important; }
          .ac-hamburger { display: block !important; }
          .ac-hero-grid { grid-template-columns: 1fr !important; }
          .ac-hero-right { display: none !important; }
          .ac-contact-grid { grid-template-columns: 1fr !important; }
          .ac-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .ac-form-row { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 480px) {
          .ac-footer-grid { grid-template-columns: 1fr !important; }
        }

        .ac-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFBFE", color: "#0A1628" }}>
        <Navbar scrolled={scrolled} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        <Hero scrollTo={scrollTo} />
        <WhoWeHelp />
        <Portfolio />
        <Pricing scrollTo={scrollTo} />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer scrollTo={scrollTo} />
      </div>
    </>
  );
}import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        
        @keyframes acFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(0.5deg); }
        }
        
        .ac-desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .ac-hamburger { display: none !important; }
        
        @media (max-width: 768px) {
          .ac-desktop-nav { display: none !important; }
          .ac-hamburger { display: block !important; }
          .ac-hero-grid { grid-template-columns: 1fr !important; }
          .ac-hero-right { display: none !important; }
          .ac-contact-grid { grid-template-columns: 1fr !important; }
          .ac-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .ac-form-row { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 480px) {
          .ac-footer-grid { grid-template-columns: 1fr !important; }
        }
        
        .ac-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFBFE", color: "#0A1628" }}>
        <Navbar scrolled={scrolled} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        <Hero scrollTo={scrollTo} />
        <WhoWeHelp />
        <Portfolio />
        <Pricing scrollTo={scrollTo} />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer scrollTo={scrollTo} />
      </div>
    </>
  );
}import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        
        @keyframes acFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(0.5deg); }
        }
        
        .ac-desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .ac-hamburger { display: none !important; }
        
        @media (max-width: 768px) {
          .ac-desktop-nav { display: none !important; }
          .ac-hamburger { display: block !important; }
          .ac-hero-grid { grid-template-columns: 1fr !important; }
          .ac-hero-right { display: none !important; }
          .ac-contact-grid { grid-template-columns: 1fr !important; }
          .ac-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .ac-form-row { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 480px) {
          .ac-footer-grid { grid-template-columns: 1fr !important; }
        }
        
        .ac-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFBFE", color: "#0A1628" }}>
        <Navbar scrolled={scrolled} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        <Hero scrollTo={scrollTo} />
        <WhoWeHelp />
        <Portfolio />
        <Pricing scrollTo={scrollTo} />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer scrollTo={scrollTo} />
      </div>
    </>
  );
}
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(203,213,225,0.7)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <LogoMark size={40} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: "#0A1628", lineHeight: 1, letterSpacing: "-0.3px" }}>Ade Consults</div>
              <div style={{ fontSize: 9, color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>Web Agency</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="ac-desktop-nav">
            {links.map(item => (
              <button key={item} onClick={() => scrollTo(item)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 500, textTransform: "capitalize",
                color: activeSection === item ? "#2563EB" : "#475569",
                padding: "6px 2px", position: "relative", transition: "color 0.2s"
              }}>
                {item === "services" ? "Services" : item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: "#2563EB", borderRadius: 2
                  }} />
                )}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{
              background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
              color: "white", border: "none", cursor: "pointer",
              padding: "10px 22px", borderRadius: 12, fontSize: 14, fontWeight: 600,
              transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: 6
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(10,22,40,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Get Started <ArrowRight size={14} />
            </button>
          </div>

          {/* Hamburger */}
          <button className="ac-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "#0A1628" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: menuOpen ? 400 : 0, overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <div style={{ padding: "8px 0 20px", borderTop: "1px solid #E2E8F0" }}>
            {links.map(item => (
              <button key={item} onClick={() => scrollTo(item)} style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                padding: "13px 0", fontSize: 16, fontWeight: 500,
                color: activeSection === item ? "#2563EB" : "#0A1628",
                textTransform: "capitalize", borderBottom: "1px solid #F1F5F9"
              }}>
                {item === "services" ? "Services" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{
              background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
              color: "white", border: "none", cursor: "pointer",
              padding: "13px 24px", borderRadius: 12, fontSize: 15, fontWeight: 600,
              marginTop: 16, width: "100%"
            }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero({ scrollTo }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 72, position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #F8F9FC 0%, #EEF2FF 100%)"
    }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.5
      }} />
      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 600, height: 600,
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)"
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-5%", width: 500, height: 500,
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(10,22,40,0.05) 0%, transparent 70%)"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div className="ac-hero-grid">
          {/* Left */}
          <div style={{ maxWidth: 580 }}>
            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease"
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.05))",
                border: "1px solid rgba(37,99,235,0.2)",
                padding: "6px 14px", borderRadius: 100, marginBottom: 28
              }}>
                <Star size={12} fill="#2563EB" color="#2563EB" />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em" }}>
                  Professional Web Design Agency
                </span>
              </div>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 100ms, transform 0.8s ease 100ms"
            }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 700, lineHeight: 1.1,
                color: "#0A1628", marginBottom: 24, letterSpacing: "-1px"
              }}>
                Helping Small Businesses{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1B3B6F, #2563EB)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Grow Online</span>{" "}
                With Professional Websites
              </h1>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms"
            }}>
              <p style={{
                fontSize: "clamp(15px, 2vw, 17px)", color: "#64748B", lineHeight: 1.75,
                marginBottom: 40, maxWidth: 480
              }}>
                We build fast, modern, and conversion-focused websites that help your business attract more customers and look credible online.
              </p>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 300ms, transform 0.8s ease 300ms",
              display: "flex", gap: 14, flexWrap: "wrap"
            }}>
              <button onClick={() => scrollTo("contact")} style={{
                background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                color: "white", border: "none", cursor: "pointer",
                padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(10,22,40,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("work")} style={{
                background: "white", color: "#0A1628",
                border: "2px solid #E2E8F0", cursor: "pointer",
                padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A1628"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Work <ChevronRight size={16} />
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: "flex", gap: 32, marginTop: 48,
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.8s ease 500ms"
            }}>
              {[{ val: "50+", label: "Projects Delivered" }, { val: "98%", label: "Client Satisfaction" }, { val: "3 Days", label: "Avg. Response Time" }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#0A1628" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Browser Mockup */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(40px) scale(0.95)",
            transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms"
          }} className="ac-hero-right">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      boxShadow: "0 30px 80px rgba(10,22,40,0.2), 0 4px 20px rgba(10,22,40,0.08)",
      overflow: "hidden",
      border: "1px solid #E2E8F0",
      animation: "acFloat 5s ease-in-out infinite"
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#F1F5F9", padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 12,
        borderBottom: "1px solid #E2E8F0"
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: "white", borderRadius: 6, padding: "5px 12px",
          fontSize: 11, color: "#94A3B8", border: "1px solid #E2E8F0",
          display: "flex", alignItems: "center", gap: 5
        }}>
          <Globe size={10} color="#94A3B8" />
          www.glowcuts.com.ng
        </div>
      </div>
      {/* Fake website content */}
      <div style={{ background: "#FAFBFE" }}>
        {/* Fake nav */}
        <div style={{
          background: "#0A1628", padding: "12px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 22, height: 22, background: "#2563EB", borderRadius: 5 }} />
            <div style={{ color: "white", fontSize: 11, fontWeight: 700 }}>GlowCuts</div>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Home", "Services", "Book"].map(n => (
              <div key={n} style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>{n}</div>
            ))}
          </div>
        </div>
        {/* Hero block */}
        <div style={{ padding: "24px 20px 16px", background: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 100%)" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 8, marginBottom: 4 }}>✦ PREMIUM BARBERSHOP</div>
          <div style={{ color: "white", fontSize: 16, fontWeight: 700, fontFamily: "serif", lineHeight: 1.2, marginBottom: 8 }}>Look Sharp,<br />Feel Confident</div>
          <div style={{ display: "inline-block", background: "#2563EB", color: "white", fontSize: 9, padding: "6px 14px", borderRadius: 6, fontWeight: 600 }}>Book Now</div>
        </div>
        {/* Service cards */}
        <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {["Haircut", "Beard Trim", "Full Groom"].map((s, i) => (
            <div key={s} style={{
              background: "white", borderRadius: 10, padding: "12px 10px",
              border: "1px solid #E2E8F0", textAlign: "center"
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, marginBottom: 6,
                background: ["#EEF2FF", "#F0FDF4", "#FFF7ED"][i],
                margin: "0 auto 6px"
              }} />
              <div style={{ fontSize: 9, fontWeight: 600, color: "#0A1628" }}>{s}</div>
              <div style={{ fontSize: 8, color: "#94A3B8", marginTop: 2 }}>₦5,000</div>
            </div>
          ))}
        </div>
        {/* Footer bar */}
        <div style={{
          background: "#F8F9FC", padding: "10px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid #E2E8F0"
        }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={8} fill="#FBBF24" color="#FBBF24" />)}
          </div>
          <div style={{ fontSize: 8, color: "#94A3B8" }}>4.9 · 200+ reviews</div>
        </div>
      </div>
    </div>
  );
}

/* ─── WHO WE HELP ─── */
function WhoWeHelp() {
  const industries = [
    { icon: UtensilsCrossed, title: "Restaurants", text: "Menus, reservations & online ordering" },
    { icon: Scissors, title: "Salons & Spas", text: "Booking systems & portfolio showcases" },
    { icon: Building2, title: "Real Estate", text: "Property listings & agent profiles" },
    { icon: Heart, title: "Clinics", text: "Appointment booking & services info" },
    { icon: School, title: "Schools", text: "Admissions, events & e-learning portals" },
    { icon: Briefcase, title: "Consultants", text: "Professional credibility & lead capture" },
    { icon: Truck, title: "Logistics", text: "Tracking, quotes & service coverage" },
    { icon: UserCircle, title: "Personal Brands", text: "Portfolio, bio & speaking credentials" },
  ];

  return (
    <section id="services" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Tailored For Your Industry</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              Who We Help
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
              We specialize in creating websites for businesses that want to stand out and grow.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={i * 60}>
                <div style={{
                  background: "#F8F9FC", borderRadius: 20, padding: "28px 24px",
                  border: "1px solid #E2E8F0", cursor: "default",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(10,22,40,0.12)";
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.borderColor = "#BFDBFE";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "#F8F9FC";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
                  }}>
                    <Icon size={22} color="#2563EB" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1628", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{item.text}</div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── PORTFOLIO ─── */
function Portfolio() {
  const projects = [
    {
      name: "GlowCuts Barbershop",
      category: "Beauty & Grooming",
      desc: "A sleek, modern booking website for a premium barbershop chain in Lagos. Features online scheduling, gallery, and pricing.",
      gradient: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 100%)",
      accent: "#2563EB",
      icon: Scissors,
    },
    {
      name: "PrimeStay Apartments",
      category: "Real Estate & Hospitality",
      desc: "Elegant property showcase website with virtual tour integration, availability calendar, and direct booking functionality.",
      gradient: "linear-gradient(135deg, #064E3B 0%, #065F46 100%)",
      accent: "#10B981",
      icon: Building2,
    },
    {
      name: "Bella Treats Bakery",
      category: "Food & Lifestyle",
      desc: "Warm, inviting e-commerce site for a bespoke bakery. Custom order forms, WhatsApp integration, and stunning gallery.",
      gradient: "linear-gradient(135deg, #7C2D12 0%, #9A3412 100%)",
      accent: "#F97316",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <section id="work" style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Our Work</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Recent Projects
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
              A glimpse into websites we've crafted for businesses like yours.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeUp key={p.name} delay={i * 100}>
                <div style={{
                  background: "white", borderRadius: 24, overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 28px 64px rgba(10,22,40,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Screenshot placeholder */}
                  <div style={{ height: 200, background: p.gradient, position: "relative", overflow: "hidden" }}>
                    {/* Decorative elements */}
                    <div style={{
                      position: "absolute", inset: 0, display: "flex",
                      flexDirection: "column", padding: 20
                    }}>
                      {/* Mini browser */}
                      <div style={{
                        background: "rgba(255,255,255,0.12)", borderRadius: 10,
                        padding: "10px 14px", backdropFilter: "blur(8px)"
                      }}>
                        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
                          {["rgba(255,255,255,0.4)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"].map((c, ci) => (
                            <div key={ci} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                          ))}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <Icon size={16} color="rgba(255,255,255,0.8)" />
                          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 600 }}>{p.name}</span>
                        </div>
                        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 6 }}>
                          <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3 }} />
                          <div style={{ height: 6, background: p.accent, borderRadius: 3, opacity: 0.8 }} />
                          <div style={{ height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                          <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }} />
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                      padding: "4px 10px", borderRadius: 20,
                      fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                      {p.category}
                    </div>
                  </div>

                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65, marginBottom: 20 }}>{p.desc}</p>
                    <button style={{
                      display: "flex", alignItems: "center", gap: 7,
                      background: "#F1F5F9", color: "#0A1628", border: "none", cursor: "pointer",
                      padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                      transition: "all 0.25s ease"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0A1628"; }}
                    >
                      <ExternalLink size={13} /> Live Preview
                    </button>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing({ scrollTo }) {
  const plans = [
    {
      name: "Starter",
      price: "₦150,000",
      featured: false,
      features: ["1 Page Website", "Mobile Responsive", "WhatsApp Chat Integration", "Contact Form", "Basic SEO Setup", "2 Revision Rounds"],
    },
    {
      name: "Business",
      price: "₦300,000",
      featured: true,
      badge: "Most Popular",
      features: ["Up to 5 Pages", "Full SEO Setup", "Fast Performance Optimization", "Google Maps Integration", "Premium Custom Design", "Priority Support", "4 Revision Rounds"],
    },
    {
      name: "Premium",
      price: "₦500,000",
      featured: false,
      features: ["Custom Design & Branding", "Advanced Animations", "Booking & Scheduling Features", "Priority Support", "Full Technical Setup", "E-commerce Ready", "6 Revision Rounds"],
    },
  ];

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Simple Pricing
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              No hidden fees. No surprises. Just great websites at fair prices.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 100}>
              <div style={{
                borderRadius: 24, padding: 32, position: "relative",
                background: plan.featured ? "linear-gradient(145deg, #0A1628 0%, #1B3B6F 100%)" : "white",
                border: plan.featured ? "none" : "1px solid #E2E8F0",
                boxShadow: plan.featured ? "0 28px 70px rgba(10,22,40,0.35)" : "none",
                transform: plan.featured ? "scale(1.02)" : "none",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
              }}
                onMouseEnter={e => { if (!plan.featured) { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(10,22,40,0.12)"; } }}
                onMouseLeave={e => { if (!plan.featured) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; } }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    color: "white", padding: "5px 18px", borderRadius: 100,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                    whiteSpace: "nowrap"
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: plan.featured ? "rgba(255,255,255,0.6)" : "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.name}</span>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700, color: plan.featured ? "white" : "#0A1628" }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 13, color: plan.featured ? "rgba(255,255,255,0.5)" : "#94A3B8", marginLeft: 4 }}>starting from</span>
                </div>

                <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.1)" : "#F1F5F9", marginBottom: 24 }} />

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: plan.featured ? "rgba(255,255,255,0.85)" : "#374151" }}>
                      <CheckCircle size={16} color={plan.featured ? "#60A5FA" : "#2563EB"} fill={plan.featured ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.08)"} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    width: "100%", padding: "13px", borderRadius: 14, fontSize: 14, fontWeight: 700,
                    cursor: "pointer", border: "none", transition: "all 0.3s ease",
                    background: plan.featured ? "white" : "transparent",
                    color: plan.featured ? "#0A1628" : "#0A1628",
                    border: plan.featured ? "none" : "2px solid #0A1628"
                  }}
                  onMouseEnter={e => {
                    if (plan.featured) { e.currentTarget.style.background = "#EEF2FF"; e.currentTarget.style.transform = "translateY(-2px)"; }
                    else { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.color = "white"; }
                  }}
                  onMouseLeave={e => {
                    if (plan.featured) { e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(0)"; }
                    else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A1628"; }
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, marginTop: 32 }}>
            All plans include domain consultation, basic hosting guidance, and post-launch support. <span style={{ color: "#2563EB", fontWeight: 600 }}>Custom quotes available</span> for larger projects.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
function WhyChooseUs() {
  const reasons = [
    { icon: Zap, title: "Fast Delivery", text: "Most websites delivered within 7–14 business days without compromising quality." },
    { icon: Star, title: "Clean Professional Design", text: "Designs that reflect your brand and build trust with potential customers instantly." },
    { icon: Smartphone, title: "Mobile First", text: "Every site looks flawless on phones, tablets, and desktops — always." },
    { icon: DollarSign, title: "Affordable Pricing", text: "Premium websites at prices that make sense for small and growing businesses." },
    { icon: Headphones, title: "Ongoing Support", text: "We don't disappear after launch. We offer maintenance and update support." },
    { icon: TrendingUp, title: "Results Focused", text: "Websites designed with conversions in mind — every element serves a purpose." },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Our Commitment</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              Why Businesses Choose<br />Ade Consults
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <FadeUp key={r.title} delay={i * 80}>
                <div style={{
                  background: "white", borderRadius: 20, padding: "28px",
                  border: "1px solid #E2E8F0", display: "flex", gap: 18, alignItems: "flex-start",
                  transition: "all 0.3s ease"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#BFDBFE"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(10,22,40,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                    background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon size={22} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1628", marginBottom: 6 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{r.text}</div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const testimonials = [
    { name: "Chidi Okafor", role: "Owner, GlowCuts Barbershop", text: "Ade Consults transformed our online presence. We started getting 3x more bookings within the first month of launching our new website." },
    { name: "Adaeze Nwosu", role: "Manager, PrimeStay Apartments", text: "Professional, responsive, and incredibly talented. They captured exactly what we needed and delivered ahead of schedule." },
    { name: "Fatima Sule", role: "Founder, Bella Treats Bakery", text: "I had no idea how much a great website would change my business. The orders started rolling in almost immediately after launch!" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Client Stories</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              What Our Clients Say
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div style={{
                background: "#F8F9FC", borderRadius: 20, padding: "32px",
                border: "1px solid #E2E8F0", position: "relative",
                transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 45px rgba(10,22,40,0.1)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#FBBF24" color="#FBBF24" />)}
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: 16, fontWeight: 700
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0A1628" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", type: "", message: "" });
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Get In Touch</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Let's Build Your Website
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 460, margin: "16px auto 0" }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40 }} className="ac-contact-grid">
          {/* Contact info */}
          <FadeUp>
            <div>
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0A1628", marginBottom: 16 }}>Reach Us Directly</h3>
                {[
                  { icon: MessageCircle, label: "WhatsApp", value: "+234 800 000 0000", color: "#22C55E" },
                  { icon: Mail, label: "Email", value: "hello@adeconsults.ng", color: "#2563EB" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "#F59E0B" },
                  { icon: MapPin, label: "Based in", value: "Lagos, Nigeria", color: "#EF4444" },
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 0", borderBottom: "1px solid #F1F5F9"
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                        background: `${c.color}15`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <Icon size={18} color={c.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#0A1628", marginTop: 2 }}>{c.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA note */}
              <div style={{
                background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                borderRadius: 20, padding: 28, color: "white"
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Free Project Consultation</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 16 }}>
                  Not sure what you need? We offer a free 30-minute call to help you decide the best approach.
                </p>
                <a href="https://wa.me/2348000000000" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.15)", color: "white",
                  padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)"
                }}>
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={150}>
            <div style={{
              background: "white", borderRadius: 24, padding: 40,
              border: "1px solid #E2E8F0",
              boxShadow: "0 8px 30px rgba(10,22,40,0.05)"
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>Message Sent!</div>
                  <div style={{ color: "#64748B", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ac-form-row">
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Full Name</label>
                      <input
                        type="text" placeholder="e.g. Adewale Obi" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                          borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                          transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box"
                        }}
                        onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address</label>
                      <input
                        type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                          borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                          transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box"
                        }}
                        onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Business Type</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                        borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                        background: "white", cursor: "pointer", boxSizing: "border-box",
                        transition: "border-color 0.2s, box-shadow 0.2s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                    >
                      <option value="">Select your business type...</option>
                      {["Restaurant / Food", "Salon / Barbershop", "Real Estate", "Clinic / Healthcare", "School / Education", "Consultant / Agency", "Logistics / Delivery", "Personal Brand", "E-commerce / Retail", "Other"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tell Us About Your Project</label>
                    <textarea
                      placeholder="Describe what you need, your goals, and any specific features..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                        borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                        resize: "vertical", minHeight: 120, boxSizing: "border-box",
                        transition: "border-color 0.2s, box-shadow 0.2s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{
                      background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                      color: "white", border: "none", cursor: "pointer",
                      padding: "15px", borderRadius: 14, fontSize: 15, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(10,22,40,0.35)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer({ scrollTo }) {
  return (
    <footer style={{ background: "#0A1628", color: "white", padding: "72px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 64 }} className="ac-footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <LogoMark size={44} />
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, lineHeight: 1 }}>Ade Consults</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Web Agency</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 280 }}>
              We help small and medium-sized businesses grow online with professional, conversion-focused websites.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <button key={i} style={{
                  width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s ease"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.borderColor = "#2563EB"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                >
                  <Icon size={15} color="white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Navigate</div>
            {["home", "services", "work", "pricing", "contact"].map(link => (
              <button key={link} onClick={() => scrollTo(link)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.65)", fontSize: 14, padding: "6px 0",
                textTransform: "capitalize", textAlign: "left", transition: "color 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
              >
                {link === "services" ? "Services" : link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Services</div>
            {["Business Websites", "E-commerce", "Landing Pages", "SEO Setup", "Website Redesign", "Maintenance"].map(s => (
              <div key={s} style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, padding: "6px 0" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Contact</div>
            {[
              { icon: MessageCircle, text: "+234 800 000 0000" },
              { icon: Mail, text: "hello@adeconsults.ng" },
              { icon: MapPin, text: "Lagos, Nigeria" },
              { icon: Clock, text: "Mon–Fri, 9am – 6pm" },
            ].map(c => {
              const Icon = c.icon;
              return (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  <Icon size={14} color="#2563EB" /> {c.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
        }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Ade Consults. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            Built with ❤️ for Nigerian businesses
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN APP ─── */
export default function AdeConsults() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        
        @keyframes acFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(0.5deg); }
        }
        
        .ac-desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .ac-hamburger { display: none !important; }
        
        @media (max-width: 768px) {
          .ac-desktop-nav { display: none !important; }
          .ac-hamburger { display: block !important; }
          .ac-hero-grid { grid-template-columns: 1fr !important; }
          .ac-hero-right { display: none !important; }
          .ac-contact-grid { grid-template-columns: 1fr !important; }
          .ac-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .ac-form-row { grid-template-columns: 1fr !important; }
        }
        
        @media (max-width: 480px) {
          .ac-footer-grid { grid-template-columns: 1fr !important; }
        }
        
        .ac-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FAFBFE", color: "#0A1628" }}>
        <Navbar scrolled={scrolled} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        <Hero scrollTo={scrollTo} />
        <WhoWeHelp />
        <Portfolio />
        <Pricing scrollTo={scrollTo} />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer scrollTo={scrollTo} />
      </div>
    </>
  );
}
